import {
  Box,
  Button,
  CircularProgress,
  IconButton,
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
import { blue, grey, red } from '@mui/material/colors'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAIN_SPACING } from 'layout/app-layout'
import { useMemo, useRef } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { IProduct } from 'api/types/product'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { CartItemAmount } from 'components/cart'

export const CartList = () => {
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const { data, status, error } = useProducts('')

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
            <Tooltip title="Remove from cart" arrow placement="left">
              <IconButton
                aria-label="Remove from cart"
                size="small"
                onClick={(e) => {
                  e.stopPropagation()
                  console.log(
                    `${info.row.original.title} -> successfully removed from cart`,
                  )
                }}
                sx={{
                  '&:hover': { backgroundColor: red[100] },
                  '&:hover svg': { color: red[700] },
                }}
              >
                <RemoveShoppingCartOutlinedIcon
                  sx={{
                    fontSize: '18px',
                    color: red[500],
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add to favorite" arrow placement="right">
              <IconButton
                aria-label="Add to favorite"
                size="small"
                onClick={(e) => {
                  e.stopPropagation()
                  console.log(
                    `${info.row.original.title} -> successfully add to favorite`,
                  )
                }}
                sx={{
                  '&:hover': { backgroundColor: blue[100] },
                  '&:hover svg': { color: blue[700] },
                }}
              >
                <FavoriteBorderOutlinedIcon
                  sx={{
                    fontSize: '18px',
                    color: blue[500],
                  }}
                />
              </IconButton>
            </Tooltip>
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

  const flatData = useMemo(
    () => data?.pages?.flatMap((page) => page.data) ?? [],
    [data],
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
    <TableContainer
      component={Paper}
      ref={tableContainerRef}
      sx={{
        height: `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - (2 * ${MAIN_SPACING}))`,
      }}
    >
      <Table size="small" aria-label="cart table" sx={{ minWidth: 650 }}>
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
            <TableCell component="th" scope="row" colSpan={4} sx={{ py: 2 }}>
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
