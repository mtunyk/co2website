import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { parse, format } from 'date-fns'

import Layout from '../../layouts/layout'
import Shield from '../../components/shield'
import { getCo2Data, getCo2ByDate } from '../../lib/api'
import { DATE_FORMAT, DEFAULT_DATE, WEBSITE_URL } from '../../lib/constants'

const CO2Page = ({ date, ppm, difference, latest }) => (
  <>
    <Layout
      title={`CO₂ Birthdate for ${date}`}
      meta={[
        { name: 'description', content: 'Get know the atmospheric carbon dioxide (CO₂) measurement on date of your birth and nowadays.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${WEBSITE_URL}/co2/${date}` },
        { property: 'og:image', content: `${WEBSITE_URL}/img/co2birthdate-logo-x512.png` },
        { property: 'og:title', content: `CO₂ Birthdate for ${date}` },
        { property: 'og:description', content: `CO₂ Birthdate for ${date} shows the amount of CO₂ in the atmosphere on ${date}, the amount of CO₂ in the atmosphere today, and the amount of CO₂ added to the atmosphere since this ${date}` },
      ]}
    >
      <Typography component="h1" variant="h4" gutterBottom>
        <time dateTime={date}>{date}</time>&nbsp;
        CO<sub>2</sub> Birthdate!
      </Typography>

      <section>
        <List>
          <ListItem disableGutters>
            <Box pr={2}>
              <Typography component="span" variant="h5">
                {ppm?.toFixed(1)}
              </Typography>
            </Box>
            <ListItemText
              primary={<>ppm CO<sub>2</sub></>}
              secondary={'on this date'}
            />
          </ListItem>

          <ListItem disableGutters>
            <Box pr={2}>
              <Typography component="span" variant="h5">
                {latest.ppm?.toFixed(1)}
              </Typography>
            </Box>
            <ListItemText
              primary={<>ppm CO<sub>2</sub></>}
              secondary={'most recent measurement'}
            />
          </ListItem>

          <ListItem disableGutters>
            <Box pr={2}>
              <span>{(difference > 0) && '+'}</span>
              <Typography component="span" variant="h5">
                {difference}
              </Typography>
              <span>%</span>
            </Box>
            <ListItemText>
              that's a change
            </ListItemText>
          </ListItem>
        </List>

        <Typography variant="h5">
          Get your shield!
        </Typography>
        <Typography>
          Right click to copy URL
        </Typography>

        <Box my={2}>
          <Shield
            birthvalue={ppm}
            currentvalue={latest.ppm}
            percentchange={difference}
          />
        </Box>

        <Box my={1}>
          <Typography variant="h5">
            HTML
          </Typography>
          <textarea defaultValue="HTML code" />
        </Box>

        <Box my={1}>
          <Typography variant="h5">
            Markdown
          </Typography>
          <textarea defaultValue="Markdown" />
        </Box>

        <Box my={1}>
          <Typography variant="h5">
            Share on social media!
          </Typography>
          tw fb in link
        </Box>
      </section>
    </Layout>
  </>
)

export const getStaticPaths = async () => {
  const co2Data = await getCo2Data()

  return {
    paths: co2Data.map(({ date }) => ({ params: { date } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const date = parse(params.date, DATE_FORMAT, new Date(DEFAULT_DATE))
  const { co2, latest, difference } = await getCo2ByDate(date)

  const fs = require('fs')
  const ReactDOMServer = require('react-dom/server')
  const distDirSvg = 'public/shields'

  if (!fs.existsSync(distDirSvg)) {
    fs.mkdirSync(distDirSvg, { recursive: true })
  }

  fs.writeFileSync(`${distDirSvg}/${params.date}.svg`, ReactDOMServer.renderToStaticMarkup(
    <Shield
      birthvalue={co2.ppm}
      currentvalue={latest.ppm}
      percentchange={difference}
    />
  ))

  return {
    props: {
      date: format(date, DATE_FORMAT),
      ppm: co2.ppm,
      difference,
      latest,
    },
  }
}

export default CO2Page
