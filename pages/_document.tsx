import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import BodyStyled from 'styles/base/global/body-styled'

class AppDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <title>Is the Cricket on?</title>
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
