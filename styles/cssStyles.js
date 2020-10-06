import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, darken } from '@material-ui/core/styles'

// import { colorStyles } from './utilities/_color'
// import { landingStyles } from './utilities/_landing'

const CssStyles = () => {
  // colorStyles()
  // landingStyles()

  (makeStyles(({ palette, ...theme }) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },

      'main > section': {
        paddingBottom: theme.spacing(3),
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
          textAlign: 'left',
        },
      },

      'footer#footer': {
        background: palette.text.primary,
        color: palette.background.default,

        '& section': {
          textAlign: 'center',
          [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
          },

          '& a': {
            color: darken(palette.background.default, 0.1),
          },
        },

        '& .copyright': {
          borderTop: `1px solid ${palette.grey[700]}`,
          color: palette.grey[400],

          '& a': {
            color: palette.grey[500],
          },
        },
      },

      // link: {
      //   borderRadius: 4,
      //   '&:hover': {
      //     background: darken('#011C3A', 0.2),
      //   },
      // },
    },
  })))()

  return (<CssBaseline />)
}

export default CssStyles
