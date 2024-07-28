import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { useProducts } from 'api/hooks/use-products'
import { CartItem } from './cart-item'
import { blue, grey } from '@mui/material/colors'
import { useMemo, useRef } from 'react'
import {
  ColumnDef,
  getCoreRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { IProduct } from 'api/types/product'
import { CartItemAmount } from 'components/cart'
import { VirtualTableHeadCell } from 'components/virtual-table-head-cell'
import { FavoriteButton, RemoveButton } from 'components/button'

export const CartList = () => {
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const { data, status, error } = useProducts({})
  const flatData = useMemo(
    () => data?.pages?.flatMap((page) => page.data) ?? [],
    [data],
  )
  const columns = useMemo<Array<ColumnDef<IProduct>>>(
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
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '33px',
            }}
          >
            <RemoveButton row={info.row} />
            <FavoriteButton row={info.row} />
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
        sx={{
          color: grey[500],
        }}
      >
        <CircularProgress color="inherit" size={37} />
      </Box>
    )
  }

  if (status === 'error') {
    return <p>Error: {error?.message}</p>
  }

  return (
    <TableContainer component={Paper} ref={tableContainerRef}>
      <Table size="small" aria-label="cart table">
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
              <CartItem
                key={row.id}
                row={row}
                virtualRow={virtualRow}
                rowVirtualizer={rowVirtualizer}
              />
            )
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell component="th" scope="row" colSpan={6} sx={{ py: 2 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="right"
                spacing={2}
              >
                <Typography component="span" variant="h5" color="black">
                  Total: 1000 UAH
                </Typography>
                <Button variant="contained" color="success">
                  Checkout
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
