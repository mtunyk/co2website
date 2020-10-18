import { parse, isEqual } from 'date-fns'
import { DATE_FORMAT } from './constants'

import co2Data from '../dataops/output_data/co2.json'
import latestCo2Data from '../dataops/output_data/latest.json'

export const getCo2Data = async () => (co2Data)

export const getCo2ByDate = async (date) => {
  const historical = co2Data.find((co2) => {
    const dt = parse(co2.date, DATE_FORMAT, new Date())
    return isEqual(dt, date)
  })

  return {
    co2: {
      date: historical.date,
      ppm: historical.ppm,
    },
    difference: ( 100 * (latestCo2Data.ppm - historical.ppm) / historical.ppm).toFixed(1),
    latest: latestCo2Data,
  }
}
