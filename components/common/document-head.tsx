import React from 'react'
import { Head } from 'next/document'

const DocumentHead = () => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="description" content="An app for cricket fans" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#89bdd3" />
    <link href="https://fonts.googleapis.com/css?family=Marvel" rel="stylesheet" />
    <link rel="manifest" href="/_next/static/manifest.json" />
    <link rel="icon" href="/static/favicon.ico" />
    <title>Is the Cricket on?</title>
  </Head>
)

export default DocumentHead
