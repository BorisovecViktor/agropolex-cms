import { useState } from 'react'
import { NavBarSubItems } from './nav-bar-sub-items'
import { ListItem } from '@mui/material'
import { ICategory } from 'api/types/category'
import { CustomLink } from './custom-link'

type Props = {
  item: ICategory
}

export const NavBarItem = ({ item }: Props) => {
  const { Category_Name, Subcategories } = item
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ListItem
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      sx={{ width: 'auto' }}
    >
      <CustomLink to={`/${Category_Name}`}>{Category_Name}</CustomLink>
      {isOpen && <NavBarSubItems subItems={Subcategories} onOpen={setIsOpen} />}
    </ListItem>
  )
}
