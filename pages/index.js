import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { DatePicker, LocalizationProvider } from '@material-ui/pickers'
import { motion } from 'framer-motion'
import Layout from '../layouts/layout'
import { useStateContext, useDispatchContext } from '../providers/appContextService'

// export async function getStaticProps() {
//   const { birthdate } = useStateContext()
//   const dispatch = useDispatchContext()
//
//   const handleDateChange = (event) => (
//     dispatch({
//       type: 'SET_DATE',
//     })
//   )
//
//   // fetch current CO2 value
//   const response = await fetch('https://raw.githubusercontent.com/co2birthdate/dataops/master/output_data/latest.json')
//   const latestCO2ppm = await response.json()
//   return dispatch({
//     type: 'SET_LATEST_CO2_PPM',
//     payload: latestCO2ppm,
//   })
//   // return {
//   //   props: {
//   //     latestCO2ppm,
//   //   },
//   // }
// }

//const HomePage = ({ birthdate, handleDateChange }) => {
const HomePage = (props) => {
  const [birthdate, handleDateChange] = useState(new Date());

  return (
  <Grid container component="section" spacing={3} alignItems="center">
    <Grid item xs={12} sm={6}>
      <motion.img
        src="/img/carbon_cycle.jpg"
        width="100%"
        alt="carbon_cycle"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      />
    </Grid>

    <Grid item xs={12} sm={6}>
      <Typography variant="h3">
        What's Your CO₂ Birthdate?
      </Typography>

      <Box my={5}>
        <Typography variant="body2">Enter a valid date (since 1900)</Typography>
        <Box mt={3}>
          <DatePicker
            renderInput={(props) => <TextField {...props} />}
            clearable
            disableFuture
            value={birthdate}
            onChange={(date) => handleDateChange(date)}
          />
        </Box>
      </Box>

      <Button
        variant="outlined"
        color="primary"
        onClick={handleButtonClick}
      >
        Get My Birthdate CO₂
      </Button>
    </Grid>
  </Grid>
)
}

HomePage.Layout = (props) => Layout({ ...props, title: 'Home page' })

export default HomePage
