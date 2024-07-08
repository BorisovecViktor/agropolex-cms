import {
  DialogContentText,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { IProduct } from './type'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import { blue, green, orange } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import { CartItemAmount } from 'components/cart'
import { memo, useState } from 'react'
import { useBoolean } from 'lib/hooks/use-boolean'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Carousel } from 'components/carousel'
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined'
import { CustomDialog } from 'components/custom-dialog'

const cellOverflowStyles = {
  maxWidth: '100px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

type Props = {
  productItem: IProduct
  innerRef?: (instance: HTMLTableRowElement) => void
}

export const ProductItem = memo(
  ({ productItem, innerRef, ...props }: Props) => {
    const navigate = useNavigate()
    const { id, title } = productItem
    const minAmount = 0
    const minPurchaseAmount = 1
    const [amount, setAmount] = useState<number>(minAmount)
    const openImageGallery = useBoolean(false)
    const openInfo = useBoolean(false)

    return (
      <>
        <CustomDialog
          title={productItem.title}
          isOpen={openImageGallery.isTrue}
          onClose={openImageGallery.setFalse}
          aria="Image gallery"
        >
          <Carousel withDescription />
        </CustomDialog>
        <CustomDialog
          title={productItem.title}
          isOpen={openInfo.isTrue}
          onClose={openInfo.setFalse}
          aria="Info"
        >
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running Let
            Google help apps determine location. Let Google help apps determine
            location. This means sending anonymous location data to Google, even
            when no apps are running Let Google help apps determine location.
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running Let
            Google help apps determine location. Let Google help apps determine
            location. This means sending anonymous location data to Google, even
            when no apps are running Let Google help apps determine location.
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running Let
            Google help apps determine location. Let Google help apps determine
            location. This means sending anonymous location data to Google, even
            when no apps are running Let Google help apps determine location.
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running Let
            Google help apps determine location. Let Google help apps determine
            location. This means sending anonymous location data to Google, even
            when no apps are running Let Google help apps determine location.
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running Let
            Google help apps determine location. Let Google help apps determine
            location. This means sending anonymous location data to Google, even
            when no apps are running Let Google help apps determine location.
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running Let
            Google help apps determine location. Let Google help apps determine
            location. This means sending anonymous location data to Google, even
            when no apps are running Let Google help apps determine location.
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running Let
            Google help apps determine location. Let Google help apps determine
            location. This means sending anonymous location data to Google, even
            when no apps are running Let Google help apps determine location.
          </DialogContentText>
        </CustomDialog>
        <TableRow
          key={id}
          ref={innerRef}
          onClick={() => navigate(`/products/${id}`)}
          sx={{ cursor: 'pointer', '&:hover': { backgroundColor: blue[50] } }}
          {...props}
        >
          <Tooltip title={title} arrow placement="bottom">
            <TableCell
              component="th"
              scope="row"
              width="25%"
              sx={cellOverflowStyles}
            >
              <Typography component="span">{title}</Typography>
            </TableCell>
          </Tooltip>
          <TableCell
            component="th"
            scope="row"
            width="20%"
            sx={cellOverflowStyles}
          >
            <Typography component="span">{`${title} ${id}`}</Typography>
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            align="center"
            width="5%"
            sx={{ color: green[500] }}
          >
            <Typography>Yes</Typography>
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            align="center"
            width="30%"
            sx={{ p: 0 }}
          >
            <CartItemAmount
              amount={amount}
              onAmount={setAmount}
              minAmount={minAmount}
              buttonColor={blue[200]}
            />
          </TableCell>
          <TableCell component="th" scope="row" align="center" width="15%">
            <Typography>{`${id} UAH`}</Typography>
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            align="center"
            sx={{ p: 0 }}
            width="5%"
          >
            <Stack direction="row">
              <Tooltip
                title={
                  amount < minPurchaseAmount
                    ? 'Add at least one item'
                    : 'Add to cart'
                }
                arrow
                placement="left"
              >
                <Typography
                  component="span"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconButton
                    aria-label="Add to cart"
                    size="small"
                    onClick={() =>
                      console.log(`${title} -> successfully added to cart`)
                    }
                    disabled={amount < minPurchaseAmount}
                    sx={{
                      '&:hover': { backgroundColor: green[100] },
                      '&:hover svg': { color: green[700] },
                      '&:disabled svg': { color: green[200] },
                    }}
                  >
                    <AddShoppingCartOutlinedIcon
                      sx={{
                        fontSize: '18px',
                        color: green[500],
                      }}
                    />
                  </IconButton>
                </Typography>
              </Tooltip>
              <Tooltip title="Image gallery" arrow>
                <IconButton
                  aria-label="Image gallery"
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation()
                    openImageGallery.setTrue()
                  }}
                  sx={{
                    '&:hover': { backgroundColor: orange[100] },
                    '&:hover svg': { color: orange[700] },
                  }}
                >
                  <PhotoLibraryOutlinedIcon
                    sx={{
                      fontSize: '18px',
                      color: orange[500],
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Info" arrow>
                <IconButton
                  aria-label="Info"
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation()
                    openInfo.setTrue()
                  }}
                  sx={{
                    '&:hover': { backgroundColor: blue[100] },
                    '&:hover svg': { color: blue[700] },
                  }}
                >
                  <InfoOutlinedIcon
                    sx={{
                      fontSize: '18px',
                      color: blue[500],
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Stack>
          </TableCell>
        </TableRow>
      </>
    )
  },
)
