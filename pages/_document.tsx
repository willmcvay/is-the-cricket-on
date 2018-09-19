// @flow
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import GlobalStyle from '../styles/global'

class AppDocument extends Document {
	render () {
		return (
			<html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <title>Is the Cricket on?</title>
        </Head>
        <GlobalStyle />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
		)
	}
}

export default AppDocument
