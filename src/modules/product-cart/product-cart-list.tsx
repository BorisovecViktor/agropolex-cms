import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { useMemo, useRef } from 'react'
import { ProductCartItem } from './product-cart-item'
import { useProducts } from 'api/hooks/use-products'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAIN_SPACING } from 'layout/app-layout'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table'
import { IProduct } from 'api/types/product'
import { CartItemAmount } from 'components/cart'
import { blue, red } from '@mui/material/colors'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined'
import { useVirtualizer } from '@tanstack/react-virtual'

export const ProductCartList = () => {
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
          <Tooltip title="Remove from cart" arrow placement="left">
            <IconButton
              aria-label="Remove from cart"
              size="small"
              onClick={(e) => {
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
    return null
  }

  if (status === 'error') {
    return <p>Error: {error?.message}</p>
  }

  return (
    <TableContainer
      component={Paper}
      ref={tableContainerRef}
      sx={{
        height: `calc(50vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - (3 * ${MAIN_SPACING}))`,
        minHeight: '10vh',
        resize: 'vertical',
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
              <ProductCartItem
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
