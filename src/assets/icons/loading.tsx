import { Box } from '@mui/material'

type Props = {
  color?: string
  width: string
  height: string
}

export const Loading = ({ color, width, height }: Props) => {
  return (
    <Box
      sx={{
        width,
        height,
        background: `url(https://api.iconify.design/eos-icons/bubble-loading.svg?color=${
          color ?? '%23787878'
        }) no-repeat center center / contain`,
        content: `url(https://api.iconify.design/eos-icons/bubble-loading.svg?color=${
          color ?? '%23787878'
        })`,
      }}
    />
  )
}
