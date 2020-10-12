import { parse, isEqual, isWithinInterval } from 'date-fns'
import { DATE_FORMAT, CO2_API_ENDPOINTS } from './constants'

export const getCo2Dates = async () => {
  const res = await fetch(CO2_API_ENDPOINTS)
  const dates = Object.keys(await res.json())
  const latest = dates[dates.length - 1]
  const start = parse('1900-01-01', DATE_FORMAT, new Date())
  const end = parse(latest, DATE_FORMAT, new Date())

  return dates.filter((dateStr) => {
    const date = parse(dateStr, DATE_FORMAT, new Date())
    return isWithinInterval(date, { start, end })
  })
}

export const getCo2ByDate = async (date) => {
  const res = await fetch(CO2_API_ENDPOINTS)
  const co2Data = Object.entries(await res.json())
  const latest = co2Data[co2Data.length - 1]

  const historical = co2Data.find(([d]) => {
    const dt = parse(d, DATE_FORMAT, new Date())
    return isEqual(dt, date)
  })

  return {
    co2: {
      date: historical[0],
      ppm: historical[1],
    },
    latest: {
      date: latest[0],
      ppm: latest[1],
    },
  }
}
