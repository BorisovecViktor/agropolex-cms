import { useCallback, useEffect, useMemo, useRef } from 'react'
import {
  Box,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import { ProductItem } from './product-item'
import {
  ColumnDef,
  getCoreRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { IProduct } from 'api/types/product'
import { CartItemAmount } from 'components/cart'
import { CartAction, GalleryAction, InfoAction } from './table-actions'
import { VirtualTableHeadCell } from 'components/virtual-table-head-cell'
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

// import { useParams } from 'react-router-dom'

type Props = {
  data?: InfiniteData<AxiosResponse<Array<IProduct>, any>, unknown>
  onFetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<AxiosResponse<IProduct[], any>, unknown>,
      Error
    >
  >
  isFetching: boolean
  status: 'error' | 'success' | 'pending'
}

export const ProductList = ({
  data,
  onFetchNextPage,
  isFetching,
  status,
}: Props) => {
  // const { category } = useParams()
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const flatData = useMemo(
    () => data?.pages?.flatMap((page) => page.data) ?? [],
    [data],
  )
  const totalDBRowCount = data?.pages?.[0].headers['x-total-count']
  const totalFetched = flatData.length
  const columns = useMemo<ColumnDef<IProduct>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        cell: (info) => (
          <Typography component="span">{`${info.getValue()}`}</Typography>
        ),
      },
      {
        accessorKey: 'name',
        header: 'Name',
        cell: (info) => (
          <Tooltip title={`${info.getValue()}`} arrow placement="left">
            <Typography component="span">{`${info.getValue()}`}</Typography>
          </Tooltip>
        ),
        meta: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
      // {
      //   accessorKey: 'completed',
      //   header: 'Availability',
      //   cell: (info) => (
      //     <Typography component="span">
      //       {info.getValue() ? 'Yes' : 'No'}
      //     </Typography>
      //   ),
      //   meta: {
      //     textAlign: 'center',
      //   },
      // },
      {
        accessorKey: 'amount',
        header: 'Amount',
        cell: () => <CartItemAmount buttonColor={blue[200]} />,
        size: 300,
        meta: {
          paddingTop: 0,
          paddingBottom: 0,
          textAlign: 'center',
        },
      },
      // {
      //   accessorKey: 'userId',
      //   header: 'Total price',
      //   cell: (info) => (
      //     <Typography component="span">{`${info.getValue()} UAH`}</Typography>
      //   ),
      //   meta: {
      //     textAlign: 'center',
      //   },
      // },
      {
        accessorKey: 'actions',
        header: 'Actions',
        cell: (info) => (
          <Stack
            direction="row"
            onClick={(e) => e.stopPropagation()}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '33px',
              px: 2,
            }}
          >
            <CartAction row={info.row} />
            <GalleryAction row={info.row} />
            <InfoAction row={info.row} />
          </Stack>
        ),
        meta: {
          paddingTop: 0,
          paddingBottom: 0,
          textAlign: 'center',
        },
      },
    ],
    [],
  )

  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement

        if (
          scrollHeight - scrollTop - clientHeight < 500 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
          onFetchNextPage()
        }
      }
    },
    [onFetchNextPage, isFetching, totalFetched, totalDBRowCount],
  )

  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current)
  }, [fetchMoreOnBottomReached])

  const table = useReactTable({
    data: flatData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  })

  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 33,
    getScrollElement: () => tableContainerRef.current,
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  })

  return (
    <Box position="relative">
      <TableContainer
        component={Paper}
        onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
        ref={tableContainerRef}
        sx={{
          height: '50vh',
          resize: 'vertical',
        }}
      >
        <Table size="small" aria-label="products table">
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} sx={{ display: 'flex' }}>
                {headerGroup.headers.map((header) => (
                  <VirtualTableHeadCell key={header.id} header={header} />
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody
            sx={{
              display: 'grid',
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = rows[virtualRow.index] as Row<IProduct>

              return (
                <ProductItem
                  key={row.id}
                  row={row}
                  virtualRow={virtualRow}
                  rowVirtualizer={rowVirtualizer}
                />
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {status === 'pending' && (
        <Box
          position="absolute"
          top="55%"
          left="50%"
          sx={{
            height: '37px',
            color: grey[500],
            transform: 'translate(-50%, -55%)',
          }}
        >
          <CircularProgress color="inherit" size={37} />
        </Box>
      )}
    </Box>
  )
}
