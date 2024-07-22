import { memo } from 'react'
import { TableCell, TableRow } from '@mui/material'
import { IProduct } from 'api/types/product'
import { flexRender, Row } from '@tanstack/react-table'
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual'

type Props = {
  row: Row<IProduct>
  virtualRow: VirtualItem<Element>
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>
}

export const CartItem = memo(({ row, virtualRow, rowVirtualizer }: Props) => {
  return (
    <TableRow
      data-index={virtualRow.index}
      ref={(node) => rowVirtualizer.measureElement(node)}
      sx={{
        display: 'flex',
        position: 'absolute',
        transform: `translateY(${virtualRow.start}px)`,
        width: '100%',
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
})
