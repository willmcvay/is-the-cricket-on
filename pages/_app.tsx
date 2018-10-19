import App, { Container, AppComponentProps } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../components/hocs/with-apollo'
import ApolloClient from 'apollo-boost'
import PageContainer from '../styles/base/layout/container'

type Props = AppComponentProps<any> & {
  apollo: ApolloClient<any>
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <Container>
        <PageContainer>
          <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>
        </PageContainer>
      </Container>
    )
  }
}

export default withApollo(MyApp as any)
