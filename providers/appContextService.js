import { useReducer, useContext, createContext } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

const AppStateContext = createContext()
const AppDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const AppContextProvider = ({ children, theme }) => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}
