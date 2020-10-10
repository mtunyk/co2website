import DateFnsUtils from '@material-ui/pickers/adapter/date-fns'
import { LocalizationProvider } from '@material-ui/pickers'
import { ThemeProvider } from '@material-ui/core/styles'
import { useReducer, useContext, createContext } from 'react'

const initialState = {
  latestCO2ppm: undefined,
  birthdate: undefined,
}
const AppStateContext = createContext(initialState)
const AppDispatchContext = createContext(null)

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_LATEST_CO2_PPM':
      return state.latestCO2ppm = payload
    case 'SET_DATE':
      return state.birthdate = payload
    default:
      throw new Error(`Unknown action: ${type}`)
  }
}

export const AppContextProvider = ({ children, theme }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        <LocalizationProvider dateAdapter={DateFnsUtils}>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </LocalizationProvider>
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}

export const useStateContext = () => useContext(AppStateContext)
export const useDispatchContext = () => useContext(AppDispatchContext)
