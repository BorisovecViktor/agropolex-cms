import { useCallback, useEffect, useMemo, useRef } from 'react'
import {
  Box,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import { ProductItem } from './product-item'
import { useProducts } from 'api/hooks/use-products'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { IProduct } from 'api/types/product'
import { CartItemAmount } from 'components/cart'
import { CartButton, GalleryButton, InfoButton } from './table-actions'

// import { useParams } from 'react-router-dom'

export const ProductList = () => {
  // const { category } = useParams()
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const { data, status, error, fetchNextPage, isFetching } = useProducts(
    // category
    '',
  )

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
        meta: {
          textAlign: 'center',
        },
      },
      {
        accessorKey: 'title',
        header: 'Manufacturer',
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
      {
        accessorKey: 'completed',
        header: 'Availability',
        cell: (info) => (
          <Typography component="span">
            {info.getValue() ? 'Yes' : 'No'}
          </Typography>
        ),
        meta: {
          textAlign: 'center',
        },
      },
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
      {
        accessorKey: 'userId',
        header: 'Total price',
        cell: (info) => (
          <Typography component="span">{`${info.getValue()} UAH`}</Typography>
        ),
        meta: {
          textAlign: 'center',
        },
      },
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
            <CartButton row={info.row} />
            <GalleryButton row={info.row} />
            <InfoButton row={info.row} />
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
          fetchNextPage()
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount],
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

  if (status === 'pending') {
    return (
      <Box
        display="flex"
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        sx={{ color: grey[500] }}
      >
        <CircularProgress color="inherit" size={37} />
      </Box>
    )
  }

  if (status === 'error') {
    return <p>Error: {error?.message}</p>
  }

  return (
    <TableContainer
      component={Paper}
      onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
      ref={tableContainerRef}
      sx={{
        height: '50vh',
        minHeight: '10vh',
        resize: 'vertical',
      }}
    >
      <Table size="small" aria-label="products table" sx={{ minWidth: 650 }}>
        <TableHead sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} sx={{ display: 'flex' }}>
              {headerGroup.headers.map((header) => (
                <TableCell
                  key={header.id}
                  sx={{
                    flexGrow: header.getSize() === 150 ? 1 : 0,
                    width: header.getSize(),
                    textAlign: header.column.columnDef.meta?.textAlign,
                  }}
                >
                  <Typography fontWeight={600}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </Typography>
                </TableCell>
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
  )
}
