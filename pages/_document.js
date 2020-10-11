import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '../layouts/theme'

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/*<link rel="shortcut icon" href="/favicons/favicon.ico" />*/}
          <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          {/*<link rel="manifest" href="/favicons/site.webmanifest" />*/}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color={theme.palette.primary.main} />
          {/*<meta name="msapplication-config" content="/favicons/browserconfig.xml" />*/}
          <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
          <meta name="msapplication-TileColor" content={theme.palette.primary.main} />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
AppDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  }
}
