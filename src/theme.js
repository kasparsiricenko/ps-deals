import { createTheme } from '@mui/material/styles'

export default createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#202124',
    },
    text: {
      primary: '#BDC1C6',
    },
  },
  typography: {
    fontFamily: `Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
  },
})
