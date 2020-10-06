import { useState } from 'react'
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { DatePicker, LocalizationProvider } from '@material-ui/pickers'
import { motion } from 'framer-motion'
import Layout from '../layouts/layout'

//export async function getStaticProps() {
  // fetch
//}

const HomePage = ({ postList }) => {
  const [selectedDate, handleDateChange] = useState(new Date())

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
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
                value={selectedDate}
                onChange={(date) => handleDateChange(date)}
              />
            </Box>
          </Box>

          <Button
            variant="outlined"
            color="primary"
          >
            Get My Birthdate CO₂
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  )
}

HomePage.Layout = (props) => Layout({ ...props, title: 'Home page' })

export default HomePage
