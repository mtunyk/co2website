import Head from 'next/head'
import Container from '@material-ui/core/Container'
import Nav from './nav'
import { FooterSection, Copyright } from './footer'

// Check out the documentation for Configuring your Layout for more information:
// - https://react-md.dev/guides/configuring-your-layout
const Layout = ({ children, title = 'CO₂ Birthdate!' }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Container component="header" id="header" maxWidth="lg">
      <Nav />
    </Container>

    <Container component="main" maxWidth="lg">
      {children}
    </Container>

    <Container component="footer" id="footer" maxWidth="lg">
      <FooterSection />
      <Copyright className="copyright" />
    </Container>
  </>
)

export default Layout
