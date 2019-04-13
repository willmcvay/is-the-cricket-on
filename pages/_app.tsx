import App, { Container, AppComponentProps } from 'next/app'
import React, { Fragment } from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../components/hocs/with-apollo'
import ApolloClient from 'apollo-boost'
import PageContainer from '../styles/base/layout/container'
import InnerContainer from '../styles/base/layout/inner-container'
import GlobalStyle from '../styles/base/global/global'
import OfflineSupport from '../components/common/offline-support'

type Props = AppComponentProps & {
  apollo: ApolloClient<any>
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <Fragment>
        <OfflineSupport />
        <GlobalStyle />
        <Container>
          <PageContainer>
            <InnerContainer>
              <ApolloProvider client={apollo}>
                <Component {...pageProps} />
              </ApolloProvider>
            </InnerContainer>
          </PageContainer>
        </Container>
      </Fragment>
    )
  }
}

export default withApollo(MyApp as any)
