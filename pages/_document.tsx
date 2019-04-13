import React from 'react'
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  RenderPageResponse
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface DocumentProps extends RenderPageResponse {
  styleTags: React.ReactElement<{}>[]
}

class AppDocument extends Document<DocumentProps> {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />) as React.ReactElement<any>
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="An app for cricket fans" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#89bdd3" />
          <link href="https://fonts.googleapis.com/css?family=Marvel" rel="stylesheet" />
          <link rel="manifest" href="/_next/static/manifest.json" />
          <link rel="icon" href="/static/favicon.ico" />
          {this.props.styleTags}
          <title>Is the Cricket on?</title>
        </Head>
        <Main />
        <NextScript />
      </html>
    )
  }
}

export default AppDocument
