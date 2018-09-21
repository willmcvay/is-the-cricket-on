import App, { Container, AppComponentProps } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../utils/with-apollo'
import ApolloClient from 'apollo-boost'

type Props = AppComponentProps<any> & {
  apollo: ApolloClient<any>
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp as any)
