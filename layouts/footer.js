import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

export const Copyright = ({ className }) => (
  <Box mt={3} py={1} align="center" className={className}>
    <Typography component="span" variant="body2">
      © { new Date().getFullYear() } co2birthdate,
    </Typography>
    &nbsp;
    <MuiLink
      href="http://www.wtfpl.net"
      title="WTFPL - Do What the Fuck You Want to Public License"
    >
      WTF Public License
    </MuiLink>
  </Box>
)

export const FooterSection = () => (
  <Grid container spacing={3} justify="space-evenly">
    <Grid component="section" item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom>
        About us
      </Typography>
      <ul>
        <li>
          <MuiLink
            href="https://github.com/co2birthdate/dataops/blob/master/README.md"
            variant="subtitle1"
          >
            Our data process
          </MuiLink>
        </li>
        <li>
          <MuiLink
            href="https://en.wikipedia.org/wiki/Carbon_dioxide_in_Earth%27s_atmosphere#Anthropogenic_CO2_emissions"
            variant="subtitle1"
          >
            Anthropogenic CO₂ emissions
          </MuiLink>
        </li>
      </ul>
    </Grid>

    <Grid component="section" item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom>
        Created by
      </Typography>
      <ul>
        <li>
          <MuiLink
            href="https://twitter.com/philshem"
            variant="subtitle1"
          >
            @philshem
          </MuiLink>
        </li>
        <li>
          <MuiLink
            href="https://twitter.com/jalbertbowdenii"
            variant="subtitle1"
          >
            @jalbertbowdenii
          </MuiLink>
        </li>
      </ul>
    </Grid>

    <Grid component="section" item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom>
        Get in touch
      </Typography>
      <ul>
        <li>
          twitter:
          &nbsp;
          <MuiLink
            href="https://twitter.com/co2birthdate"
            variant="subtitle1"
          >
            @co2birthdate
          </MuiLink>
        </li>
        <li>
          e-mail:
          &nbsp;
          <MuiLink
            href="mailto:info@co2birth.date"
            variant="subtitle1"
          >
            info@co2birth.date
          </MuiLink>
        </li>
      </ul>
    </Grid>

    <Grid component="section" item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom>
        Credits
      </Typography>
      <ul>
        <li>
          Logo:
          &nbsp;
          <MuiLink
            href="https://thenounproject.com/chulvi"
            variant="subtitle1"
          >
            Alfonso López-Sanz
          </MuiLink>
        </li>
      </ul>
    </Grid>
  </Grid>
)
