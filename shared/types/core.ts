import { ChildProps } from 'react-apollo'
import { Query } from './queries'
import { WithRouterProps } from 'next/router'

export namespace Core {
  export type ApolloWrappedProps = ChildProps<{}, Query>
  export type ApolloWrappedRouterProps<T> = ApolloWrappedProps & WithRouterProps<T>
}
