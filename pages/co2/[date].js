import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import MuiLink from '@material-ui/core/Link'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import LinkIcon from '@material-ui/icons/Link'
import { useState } from 'react'
import { parse, format } from 'date-fns'

import Layout from '../../layouts/layout'
import Shield from '../../components/shield'
import { getCo2Data, getCo2ByDate } from '../../lib/api'
import { DATE_FORMAT, DEFAULT_DATE, WEBSITE_URL } from '../../lib/constants'

const CO2Page = ({ date, ppm, difference, latest }) => {
  const pageUrl = `${WEBSITE_URL}/co2/${date}`
  const pageUrlEncoded = encodeURIComponent(pageUrl)
  const shareTextEncoded = encodeURIComponent(`My CO₂ birthdate is ${ppm} ppm. Today we are at ${latest.ppm} ppm. That's a change of ${difference}%!`)
  const codeHtml = `<img src="${WEBSITE_URL}/shields/${date}.svg" alt="${WEBSITE_URL} Shield for ${date}." />`
  const codeMarkdown = `![${WEBSITE_URL} Shield for ${date}.](${WEBSITE_URL}/shields/${date}.svg)`

  const [snackbarVisibility, setSnackbarVisibility] = useState(false)
  const handleCloseSnackbar = () => {
    setSnackbarVisibility(false)
  }

  const copyToClipboard = (message) => {
    if (document.queryCommandSupported('copy')) {
      const dummyTextarea = document.createElement('textarea')
      try {
        document.body.appendChild(dummyTextarea)
        dummyTextarea.value = message
        dummyTextarea.select()

        document.execCommand('copy')
        setSnackbarVisibility(true)
      } finally {
        document.body.removeChild(dummyTextarea)
      }
    }
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarVisibility}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Copied!
        </Alert>
      </Snackbar>

      <Layout
        title={`CO₂ Birthdate for ${date}`}
        meta={[
          { name: 'description', content: 'Get the atmospheric carbon dioxide (CO₂) measurement on any date since 1900.' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: `${WEBSITE_URL}/co2/${date}` },
          { property: 'og:image', content: `${WEBSITE_URL}/img/co2birthdate-logo-x512.png` },
          { property: 'og:title', content: `CO₂ Birthdate for ${date}` },
          { property: 'og:description', content: `CO₂ Birthdate for ${date} shows the amount of CO₂ in the atmosphere on ${date} compared to today.` },
        ]}
      >
        <Typography component="h1" variant="h4" gutterBottom>
        Happy CO<sub>2</sub> Birthdate for&nbsp;<time dateTime={date}>{date}</time>🎂🎁
        </Typography>

        <section>
          <List disablePadding dense>
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
              <ListItemText
              secondary={'that\'s your change'}
               >
              </ListItemText>
            </ListItem>
          </List>
        </section>

        <section>
          <Typography component="h2" variant="h5">
            Share this shield on your blog or website!
          </Typography>

          <Typography variant="body2">
            As the CO₂ levels change, the data in this shield will be updated.
          </Typography>

          <Box mt={1}>
            <Shield
              birthvalue={ppm}
              currentvalue={latest.ppm}
              percentchange={difference}
            />
          </Box>

          <Typography variant="body2">
            Double-click a green box below to copy the link to your shield.
          </Typography>


          <Box my={1}>
            <Typography component="h3" variant="subtitle1">
              HTML
            </Typography>
            <pre
              onDoubleClick={() => {
                copyToClipboard(codeHtml)
              }}
            >
              <code>{codeHtml}</code>
            </pre>
          </Box>

          <Box my={1}>
            <Typography component="h3" variant="subtitle1">
              Markdown
            </Typography>
            <pre
              onDoubleClick={() => {
                copyToClipboard(codeMarkdown)
              }}
            >
              <code>{codeMarkdown}</code>
            </pre>
          </Box>
        </section>

        <section>
          <Typography component="h2" variant="h5">
            Share on social media!
          </Typography>
          <Box className="social-links" my={1}>
            <ul className="row">
            <li>
              <MuiLink
                href={`https://twitter.com/intent/tweet?url=${pageUrlEncoded}&via=co2birthdate&text=${shareTextEncoded}&hashtags=co2birthdate`}
                rel="noopener nofollow noreferrer"
                target="_blank"
                title="Share on Twitter"
              >
                <TwitterIcon className="twitter" fontSize="large" />
              </MuiLink>
            </li>
            <li>
              <MuiLink
                href={`https://www.facebook.com/sharer.php?u=${pageUrlEncoded}`}
                rel="noopener nofollow noreferrer"
                target="_blank"
                title="Share on Facebook"
              >
                <FacebookIcon className="facebook" fontSize="large" />
              </MuiLink>
            </li>
            <li>
              <MuiLink
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrlEncoded}`}
                rel="noopener nofollow noreferrer"
                target="_blank"
                title="Share on LinkedIn"
              >
                <LinkedInIcon className="linkedin" fontSize="large" />
              </MuiLink>
            </li>
            <li>
              <MuiLink
                href={pageUrl}
                rel="noopener nofollow noreferrer"
                target="_blank"
                title="Share this URL"
              >
                <LinkIcon fontSize="large" />
              </MuiLink>
            </li>
          </ul>
          </Box>
        </section>
      </Layout>
    </>
  )
}

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
