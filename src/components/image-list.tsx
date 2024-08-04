import {
  Box,
  ImageListItem,
  ImageListItemBar,
  imageListItemClasses,
} from '@mui/material'

type Props = {
  data: Array<{
    img: string
    title: string
    author: string
  }>
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
        <ImageListItem key={item.img} sx={{ cursor: 'pointer' }}>
          <img
            src={`${item.img}?w=500&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: '6px' }}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
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
