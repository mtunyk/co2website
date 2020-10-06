import React from 'react'
import Link from '../components/common/link'
import MuiLink from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub'
// import SvgIcon from '@material-ui/core/SvgIcon'
// import WtfplSvg from '../assets/svg/wtfpl.svg'
import LogoSvg from '../assets/svg/co2birthdate.svg'

const Nav = () => (
  <Box component="nav" py={1}>
    <Grid container className="container" spacing={3} justify="space-between" alignItems="center">
      <Grid item xs={3}>
        {/*<Link href="/" as={process.env.BACKEND_URL + '/'}>*/}
        <Link href="/">
          <LogoSvg height="64" width="64" />
        </Link>
      </Grid>
      <Grid item xs={3} align="right" >
        <MuiLink
          href="https://github.com/co2birthdate"
          title="co2birthdate open-source"
          underline="none"
        >
          <GitHubIcon />
        </MuiLink>
        {/*<MuiLink
          href="http://www.wtfpl.net"
          title="WTFPL - Do What the Fuck You Want to Public License"
          underline="none"
        >
          <SvgIcon component={WtfplSvg} width="24" height="24" />
        </MuiLink>*/}
      </Grid>
    </Grid>
  </Box>
)

export default Nav
