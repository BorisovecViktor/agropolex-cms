import { breakpointsTheme } from './breakpoints'

const h1 = {
  fontWeight: 900,
  fontSize: '1.625rem',
  lineHeight: '34px',
  [breakpointsTheme.breakpoints.up('sm')]: {
    fontSize: '2rem',
    lineHeight: '38px',
  },
  [breakpointsTheme.breakpoints.up('lg')]: {
    fontSize: '2.375rem',
    lineHeight: '46px',
  },
  [breakpointsTheme.breakpoints.up('xl')]: {
    fontSize: '2.75rem',
    lineHeight: '52px',
  },
} as const

export const typography = {
  h1,
} as const
