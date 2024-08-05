import { TableCell, Typography } from '@mui/material'
import { flexRender, Header } from '@tanstack/react-table'
import { IProduct } from 'api/types/product'

type Props = {
  header: Header<IProduct, unknown>
}

export const VirtualTableHeadCell = ({ header }: Props) => {
  const { getSize, column, getContext } = header

  return (
    <TableCell
      sx={{
        flexGrow: getSize() === 150 ? 1 : 0,
        width: getSize(),
        textAlign: column.columnDef.meta?.textAlign 
      }}
    >
      <Typography fontWeight={600}>
        {flexRender(column.columnDef.header, getContext())}
      </Typography>
    </TableCell>
  )
}
