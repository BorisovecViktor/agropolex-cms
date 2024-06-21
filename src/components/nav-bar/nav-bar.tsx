import { useCategories } from 'api/hooks/use-categories'
import { NavBarItem } from './nav-bar-item'
import { List } from '@mui/material'

export const Navbar = () => {
  const { data: categories } = useCategories(true)

  return (
    <>
      {categories && categories.length > 0 && (
        <List component="nav" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <NavBarItem key={category.id} item={category} />
            ))}
          </List>
        </List>
      )}
    </>
  )
}
