import React from 'react'
import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import BodyStyled from '../styles/base/global/body-styled'

class AppDocument extends Document {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
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
        </Head>
        <BodyStyled>
          <Main />
          <NextScript />
        </BodyStyled>
      </html>
    )
  }
}

export default AppDocument
