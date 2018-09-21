declare module "*.graphql" {
  const DocumentNode = require('graphql').DocumentNode
  const value: DocumentNode;
  export default value;
}
