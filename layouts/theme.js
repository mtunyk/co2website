import { createMuiTheme } from '@material-ui/core/styles'

const options = {
  palette: {
    type: 'light',
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

let theme = createMuiTheme(options)


export default theme
