declare module "graphql-upload/graphqlUploadExpress.js" {
  import { RequestHandler } from "express";
  const graphqlUploadExpress: (options?: {
    maxFileSize?: number;
    maxFiles?: number;
  }) => RequestHandler;
  export default graphqlUploadExpress;
}

declare module "graphql-upload/GraphQLUpload.js" {
  import { GraphQLScalarType } from "graphql";

  const GraphQLUpload: GraphQLScalarType;

  export default GraphQLUpload;
}

// declare module "graphql-upload" {
//   export interface FileUpload {
//     filename: string;
//     mimetype: string;
//     encoding: string;
//     createReadStream: () => NodeJS.ReadableStream;
//   }
// }
