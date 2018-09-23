declare module '*.graphql' {
  const DocumentNode = require('graphql').DocumentNode
  const value: DocumentNode
  export default value
}

declare interface AsyncIterator<T> {
  next(value?: any): Promise<IteratorResult<T>>
  return?(value?: any): Promise<IteratorResult<T>>
  throw?(e?: any): Promise<IteratorResult<T>>
}
