import DateFnsUtils from '@material-ui/pickers/adapter/date-fns'
import { LocalizationProvider } from '@material-ui/pickers'
import { ThemeProvider } from '@material-ui/core/styles'

export const AppContextProvider = ({ children, theme }) => (
  <LocalizationProvider dateAdapter={DateFnsUtils}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </LocalizationProvider>
)
