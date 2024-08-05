import { useState } from 'react'
import { NavBarSubItems } from './nav-bar-sub-items'
import { ListItem } from '@mui/material'
import { CustomLink } from 'components/custom-link'
import { blue } from '@mui/material/colors'
import { ICategory } from 'api/types/category'

type Props = {
  category: ICategory
}

export const NavBarItem = ({ category }: Props) => {
  const { id, name, subCategories } = category
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ListItem
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      sx={{ width: 'auto', '&:hover': { backgroundColor: blue[50] } }}
    >
      <CustomLink to={`/categories/${id}`} fontWeight={600}>
        {name}
      </CustomLink>
      {isOpen && (
        <NavBarSubItems
          categoryId={id}
          subCategories={subCategories}
          onOpen={setIsOpen}
        />
      )}
    </ListItem>
  )
}
