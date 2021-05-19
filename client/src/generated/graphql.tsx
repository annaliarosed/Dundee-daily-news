import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateStoryInput = {
  head: Scalars['String'];
  subHead?: Maybe<Scalars['String']>;
  storyText: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  town: Scalars['String'];
  imgUrls: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createStory: Story;
  updateStory?: Maybe<Story>;
  deleteStory: Scalars['Boolean'];
};


export type MutationCreateStoryArgs = {
  input: CreateStoryInput;
};


export type MutationUpdateStoryArgs = {
  head?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationDeleteStoryArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  stories: Array<Story>;
  story?: Maybe<Story>;
};


export type QueryStoryArgs = {
  id: Scalars['Float'];
};

export type Story = {
  __typename?: 'Story';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  head: Scalars['String'];
  subHead: Scalars['String'];
  storyText: Scalars['String'];
  category: Scalars['String'];
  author: Scalars['String'];
  town: Scalars['String'];
  imgUrls: Array<Scalars['String']>;
};

export type StorySnippetFragment = (
  { __typename?: 'Story' }
  & Pick<Story, 'id' | 'createdAt' | 'updatedAt' | 'head' | 'subHead' | 'storyText' | 'category' | 'author' | 'town' | 'imgUrls'>
);

export type CreateStoryMutationVariables = Exact<{
  input: CreateStoryInput;
}>;


export type CreateStoryMutation = (
  { __typename?: 'Mutation' }
  & { createStory: (
    { __typename?: 'Story' }
    & StorySnippetFragment
  ) }
);

export type GetStoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStoriesQuery = (
  { __typename?: 'Query' }
  & { stories: Array<(
    { __typename?: 'Story' }
    & StorySnippetFragment
  )> }
);

export type GetStoryQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetStoryQuery = (
  { __typename?: 'Query' }
  & { story?: Maybe<(
    { __typename?: 'Story' }
    & StorySnippetFragment
  )> }
);

export const StorySnippetFragmentDoc = gql`
    fragment StorySnippet on Story {
  id
  createdAt
  updatedAt
  head
  subHead
  storyText
  category
  author
  town
  imgUrls
}
    `;
export const CreateStoryDocument = gql`
    mutation CreateStory($input: CreateStoryInput!) {
  createStory(input: $input) {
    ...StorySnippet
  }
}
    ${StorySnippetFragmentDoc}`;
export type CreateStoryMutationFn = Apollo.MutationFunction<CreateStoryMutation, CreateStoryMutationVariables>;

/**
 * __useCreateStoryMutation__
 *
 * To run a mutation, you first call `useCreateStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStoryMutation, { data, loading, error }] = useCreateStoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateStoryMutation, CreateStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStoryMutation, CreateStoryMutationVariables>(CreateStoryDocument, options);
      }
export type CreateStoryMutationHookResult = ReturnType<typeof useCreateStoryMutation>;
export type CreateStoryMutationResult = Apollo.MutationResult<CreateStoryMutation>;
export type CreateStoryMutationOptions = Apollo.BaseMutationOptions<CreateStoryMutation, CreateStoryMutationVariables>;
export const GetStoriesDocument = gql`
    query GetStories {
  stories {
    ...StorySnippet
  }
}
    ${StorySnippetFragmentDoc}`;

/**
 * __useGetStoriesQuery__
 *
 * To run a query within a React component, call `useGetStoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetStoriesQuery, GetStoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStoriesQuery, GetStoriesQueryVariables>(GetStoriesDocument, options);
      }
export function useGetStoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoriesQuery, GetStoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStoriesQuery, GetStoriesQueryVariables>(GetStoriesDocument, options);
        }
export type GetStoriesQueryHookResult = ReturnType<typeof useGetStoriesQuery>;
export type GetStoriesLazyQueryHookResult = ReturnType<typeof useGetStoriesLazyQuery>;
export type GetStoriesQueryResult = Apollo.QueryResult<GetStoriesQuery, GetStoriesQueryVariables>;
export const GetStoryDocument = gql`
    query getStory($id: Float!) {
  story(id: $id) {
    ...StorySnippet
  }
}
    ${StorySnippetFragmentDoc}`;

/**
 * __useGetStoryQuery__
 *
 * To run a query within a React component, call `useGetStoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStoryQuery(baseOptions: Apollo.QueryHookOptions<GetStoryQuery, GetStoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStoryQuery, GetStoryQueryVariables>(GetStoryDocument, options);
      }
export function useGetStoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoryQuery, GetStoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStoryQuery, GetStoryQueryVariables>(GetStoryDocument, options);
        }
export type GetStoryQueryHookResult = ReturnType<typeof useGetStoryQuery>;
export type GetStoryLazyQueryHookResult = ReturnType<typeof useGetStoryLazyQuery>;
export type GetStoryQueryResult = Apollo.QueryResult<GetStoryQuery, GetStoryQueryVariables>;