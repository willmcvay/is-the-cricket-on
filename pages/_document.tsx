import React from 'react'
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  RenderPageResponse
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import globalStyles from '../styles/base/global/global'

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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <title>Is the Cricket on?</title>
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
          {this.props.styleTags}
          {globalStyles()}
        </Head>
        <Main />
        <NextScript />
      </html>
    )
  }
}

export default AppDocument
