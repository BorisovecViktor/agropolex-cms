import { Dispatch, SetStateAction } from 'react'
import { List, ListItem } from '@mui/material'
import { ISubCategory } from 'api/types/category'
import { CustomLink } from './custom-link'

type Props = {
  subItems: Array<ISubCategory>
  onOpen: Dispatch<SetStateAction<boolean>>
}

export const NavBarSubItems = ({ subItems, onOpen }: Props) => (
  <List
    sx={{
      position: 'absolute',
      top: '34px',
      maxHeight: '50vh',
      backgroundColor: 'white',
      overflowY: 'scroll',
      zIndex: 1000,
      boxShadow:
        '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    }}
  >
    {subItems.map(({ Subcategory_ID, Subcategory_Name }) => {
      return (
        <ListItem key={Subcategory_ID}>
          <CustomLink to={`/${Subcategory_Name}`} onClick={() => onOpen(false)}>
            {Subcategory_Name}
          </CustomLink>
        </ListItem>
      )
    })}
  </List>
)
