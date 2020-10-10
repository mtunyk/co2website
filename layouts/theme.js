import { createMuiTheme } from '@material-ui/core/styles'

const options = {
  palette: {
    type: 'light',
    primary: {
      light: '#ceead6',
      main: '#1e8e3e',
      dark: '#137333',
      contrastText: '#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
}

const theme = createMuiTheme(options)


export default theme
