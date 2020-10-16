import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, darken } from '@material-ui/core/styles'

const CssStyles = () => {
  (makeStyles(({ palette, ...theme }) => ({
    '@global': {
      html: {
        backgroundColor: '#172225',
      },

      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },

      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },

      'main > h1': {
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
          textAlign: 'left',
        },
      },

      'main > section': {
        paddingBottom: theme.spacing(3),
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
          textAlign: 'left',
        },
      },

      'footer#footer': {
        marginTop: 'auto',
        paddingTop: theme.spacing(3),
        backgroundColor: '#172225',
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
    },
  })))()

  return <CssBaseline />
}

export default CssStyles
