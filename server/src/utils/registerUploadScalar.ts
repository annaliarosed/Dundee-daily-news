// src/utils/registerUploadScalar.ts
import { GraphQLScalarType } from "graphql";

export async function registerUploadScalar(): Promise<GraphQLScalarType> {
  const { default: GraphQLUpload } = await import(
    "graphql-upload/GraphQLUpload.mjs"
  );
  return GraphQLUpload as GraphQLScalarType;
}
