import { DocumentNode } from 'graphql'
// const DocumentNode = ('graphql').DocumentNode

declare module "*.graphql" {
  const value: DocumentNode;
  export default value;
}
