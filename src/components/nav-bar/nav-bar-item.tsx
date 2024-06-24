import { useState } from 'react'
import { NavBarSubItems } from './nav-bar-sub-items'
import { ListItem } from '@mui/material'
import { ICategory } from 'api/types/category'
import { CustomLink } from 'components/custom-link'
import { blue } from '@mui/material/colors'

type Props = {
  item: ICategory
}

export const NavBarItem = ({ item }: Props) => {
  const { path, name, subCategories } = item
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ListItem
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      sx={{ width: 'auto', '&:hover': { backgroundColor: blue[50] } }}
    >
      <CustomLink to={`/categories${path}`} fontWeight={600}>
        {name}
      </CustomLink>
      {isOpen && <NavBarSubItems subItems={subCategories} onOpen={setIsOpen} />}
    </ListItem>
  )
}
