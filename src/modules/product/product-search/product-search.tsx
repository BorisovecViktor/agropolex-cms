import { ChangeEvent, useEffect, useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useDebounce } from 'lib/hooks/use-debounce'
import { Search } from '@mui/icons-material'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'

type Props = {
  onChange: (search: string) => void
}

export const ProductSearch = ({ onChange }: Props) => {
  const [search, setSearch] = useState<string>('')
  const debouncedSearch = useDebounce(search)

  useEffect(() => {
    onChange(debouncedSearch)
  }, [debouncedSearch, onChange])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleClear = () => {
    setSearch('')
  }

  return (
    <TextField
      value={search}
      onChange={handleSearch}
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: search && (
          <IconButton
            aria-label="Clear search"
            size="small"
            onClick={handleClear}
          >
            <ClearOutlinedIcon sx={{ fontSize: '18px' }} />
          </IconButton>
        ),
      }}
    />
  )
}
