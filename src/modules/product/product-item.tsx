import { memo } from 'react'
import { TableCell, TableRow } from '@mui/material'
import { blue } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import { flexRender, Row } from '@tanstack/react-table'
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual'
import { IProduct } from 'api/types/product'

type Props = {
  row: Row<IProduct>
  virtualRow: VirtualItem<Element>
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>
}

export const ProductItem = memo(
  ({ row, virtualRow, rowVirtualizer }: Props) => {
    const navigate = useNavigate()

    return (
      <TableRow
        data-index={virtualRow.index}
        ref={(node) => rowVirtualizer.measureElement(node)}
        onClick={() => navigate(`/products/${row.id}`)}
        sx={{
          display: 'flex',
          position: 'absolute',
          transform: `translateY(${virtualRow.start}px)`,
          width: '100%',
          cursor: 'pointer',
          '&:hover': { backgroundColor: blue[50] },
        }}
      >
        {row.getVisibleCells().map((cell) => (
          <TableCell
            key={cell.id}
            component="th"
            scope="row"
            sx={{
              flexGrow: cell.column.getSize() === 150 ? 1 : 0,
              width: cell.column.getSize(),
              ...cell.column.columnDef.meta,
            }}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    )
  },
)
