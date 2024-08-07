import { DialogContentText, Stack } from '@mui/material'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

type Props = {
  withDescription?: boolean
}

export const Carousel = ({ withDescription }: Props) => {
  const images = [
    {
      id: '102',
      author: 'Ben Moore',
      width: 4320,
      height: 3240,
      url: 'https://unsplash.com/photos/pJILiyPdrXI',
      download_url: 'https://picsum.photos/id/102/4320/3240',
    },
    {
      id: '103',
      author: 'Ilham Rahmansyah',
      width: 2592,
      height: 1936,
      url: 'https://unsplash.com/photos/DwTZwZYi9Ww',
      download_url: 'https://picsum.photos/id/103/2592/1936',
    },
    {
      id: '104',
      author: 'Dyaa Eldin',
      width: 3840,
      height: 2160,
      url: 'https://unsplash.com/photos/2fl-ocJ5MOA',
      download_url: 'https://picsum.photos/id/104/3840/2160',
    },
    {
      id: '106',
      author: 'Arvee Marie',
      width: 2592,
      height: 1728,
      url: 'https://unsplash.com/photos/YnfGtpt2gf4',
      download_url: 'https://picsum.photos/id/106/2592/1728',
    },
    {
      id: '107',
      author: 'Lukas Schweizer',
      width: 5000,
      height: 3333,
      url: 'https://unsplash.com/photos/9VWOr22LhVI',
      download_url: 'https://picsum.photos/id/107/5000/3333',
    },
    {
      id: '108',
      author: 'Florian Klauer',
      width: 2000,
      height: 1333,
      url: 'https://unsplash.com/photos/t1mqA3V3-7g',
      download_url: 'https://picsum.photos/id/108/2000/1333',
    },
  ]

  return (
    <ReactCarousel
      showArrows={true}
      // autoPlay
      emulateTouch
      infiniteLoop
      showIndicators={false}
      showThumbs={false}
      // dynamicHeight
      // onChange={onChange}
      // onClickItem={onClickItem}
      // onClickThumb={onClickThumb}
    >
      {images.map((image) => (
        <Stack
          key={image.id}
          spacing={2}
          style={{
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            KhtmlUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
          }}
        >
          <img key={image.id} src={image.download_url} alt={image.author} />
          {withDescription && (
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running
              Let Google help apps determine location. Let Google help apps
              determine location. This means sending anonymous location data to
              Google, even when no apps are running Let Google help apps
              determine location. Let Google help apps determine location. This
              means sending anonymous location data to Google, even when no apps
              are running Let Google help apps determine location. Let Google
              help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running Let Google
              help apps determine location. Let Google help apps determine
              location. This means sending anonymous location data to Google,
              even when no apps are running Let Google help apps determine
              location. Let Google help apps determine location. This means
              sending anonymous location data to Google, even when no apps are
              running Let Google help apps determine location. Let Google help
              apps determine location. This means sending anonymous location
              data to Google, even when no apps are running Let Google help apps
              determine location.
            </DialogContentText>
          )}
        </Stack>
      ))}
    </ReactCarousel>
  )
}
