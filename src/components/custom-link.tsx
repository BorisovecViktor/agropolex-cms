import { Link, useMatch } from 'react-router-dom'
import { grey, blue } from '@mui/material/colors'

export const CustomLink = ({ children, to, ...props }: any) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  })

  return (
    <Link
      to={to}
      style={{
        width: '100%',
        color: match ? blue[800] : grey[600],
        padding: '5px 10px',
        textDecoration: 'none',
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
