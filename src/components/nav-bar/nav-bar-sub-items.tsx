import { Dispatch, SetStateAction } from 'react'
import { List, ListItem } from '@mui/material'
import { ISubCategory } from 'api/types/category'
import { CustomLink } from 'components/custom-link'
import { blue } from '@mui/material/colors'

type Props = {
  subItems: Array<ISubCategory>
  onOpen: Dispatch<SetStateAction<boolean>>
}

export const NavBarSubItems = ({ subItems, onOpen }: Props) => (
  <>
    {subItems && subItems.length > 0 && (
      <List
        sx={{
          position: 'absolute',
          top: '31px',
          maxHeight: '50vh',
          backgroundColor: 'white',
          overflowY: 'scroll',
          zIndex: 1000,
          boxShadow:
            '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
        }}
      >
        {subItems.map(({ id, path, name }) => {
          return (
            <ListItem
              key={id}
              sx={{ '&:hover': { backgroundColor: blue[50] } }}
            >
              <CustomLink
                to={`/categories${path}`}
                onClick={() => onOpen(false)}
              >
                {name}
              </CustomLink>
            </ListItem>
          )
        })}
      </List>
    )}
  </>
)
