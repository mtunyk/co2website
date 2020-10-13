import Head from 'next/head'
import { parse, format } from 'date-fns'

import Layout from '../../layouts/layout'
import { getCo2ByDate, getCo2Dates } from '../../lib/api'
import { DATE_FORMAT, DEFAULT_DATE } from '../../lib/constants'

const CO2Page = ({ date, ppm, difference, latest }) => (
  <>
    <Head>
      <meta name="robots" content="noindex" />
    </Head>

    <Layout title={`CO₂ on ${date}`}>
      <p>Date: <time dateTime={date}>{date}</time></p>
      <p>On this date: <b>{ppm}</b> ppm CO<sub>2</sub></p>
      <p>Most recent measurement: <b>{latest.ppm}</b> ppm CO<sub>2</sub> on <time dateTime={latest.date}>{latest.date}</time></p>
      <p>That's a change of <b>{(difference > 0) && '+'}{difference}</b>%</p>
    </Layout>
  </>
)

export const getStaticPaths = async () => {
  const dates = await getCo2Dates()

  return {
    paths: dates?.map(({ date }) => ({ params: { date } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const date = parse(params.date, DATE_FORMAT, new Date(DEFAULT_DATE))
  const { co2, latest } = await getCo2ByDate(date)
  const ppm = co2.ppm
  const difference = ( 100 * (latest.ppm - ppm) / ppm).toFixed(1)

  return {
    props: {
      date: format(date, DATE_FORMAT),
      ppm,
      difference,
      latest,
    },
  }
}

export default CO2Page
