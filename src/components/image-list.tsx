import {
  Box,
  ImageListItem,
  ImageListItemBar,
  imageListItemClasses,
} from '@mui/material'
import { ICategory } from 'api/types/category'

type Props = {
  data: Array<ICategory>
}

export const ImageList = ({ data }: Props) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: 1,
        [`& .${imageListItemClasses.root}`]: {
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {data.map((item) => (
        <ImageListItem key={item.id} sx={{ cursor: 'pointer' }}>
          <img
            src={item.url}
            alt={item.name}
            loading="lazy"
            style={{ borderRadius: '6px' }}
          />
          <ImageListItemBar
            title={item.name}
            subtitle={<span>by: {item.id}</span>}
            sx={{
              borderBottomRightRadius: '6px',
              borderBottomLeftRadius: '6px',
            }}
          />
        </ImageListItem>
      ))}
    </Box>
  )
}
