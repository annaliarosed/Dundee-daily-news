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
  caption?: Maybe<Scalars['String']>;
  storyText: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  town: Scalars['String'];
  altText?: Maybe<Scalars['String']>;
  imgUrls: Array<Scalars['String']>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FilterQueryByCategory = {
  category?: Maybe<Scalars['String']>;
};

export type FilterQueryByTown = {
  town?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createStory: Story;
  updateStory: Story;
  deleteStory: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
};


export type MutationCreateStoryArgs = {
  input: CreateStoryInput;
};


export type MutationUpdateStoryArgs = {
  input: UpdateStoryInput;
  id: Scalars['Float'];
};


export type MutationDeleteStoryArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  logInInput: UserNamePasswordInput;
};


export type MutationLoginArgs = {
  logInInput: UserNamePasswordInput;
};

export type Query = {
  __typename?: 'Query';
  stories: Array<Story>;
  story?: Maybe<Story>;
  me?: Maybe<User>;
};


export type QueryStoriesArgs = {
  categoryFilter?: Maybe<FilterQueryByCategory>;
  townFilter?: Maybe<FilterQueryByTown>;
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
  caption: Scalars['String'];
  storyText: Scalars['String'];
  category: Scalars['String'];
  author: Scalars['String'];
  town: Scalars['String'];
  altText: Scalars['String'];
  imgUrls: Array<Scalars['String']>;
};

export type UpdateStoryInput = {
  head: Scalars['String'];
  subHead?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  storyText: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  town: Scalars['String'];
  altText?: Maybe<Scalars['String']>;
  imgUrls: Array<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserNamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type StorySnippetFragment = (
  { __typename?: 'Story' }
  & Pick<Story, 'id' | 'createdAt' | 'updatedAt' | 'head' | 'subHead' | 'caption' | 'storyText' | 'category' | 'author' | 'altText' | 'town' | 'imgUrls'>
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

export type DeleteStoryMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteStoryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteStory'>
);

export type LogInMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LogInMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )> }
  ) }
);

export type UpdateStoryMutationVariables = Exact<{
  id: Scalars['Float'];
  input: UpdateStoryInput;
}>;


export type UpdateStoryMutation = (
  { __typename?: 'Mutation' }
  & { updateStory: (
    { __typename?: 'Story' }
    & StorySnippetFragment
  ) }
);

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'createdAt' | 'updatedAt'>
  )> }
);

export type GetStoriesQueryVariables = Exact<{
  townFilter?: Maybe<FilterQueryByTown>;
  categoryFilter?: Maybe<FilterQueryByCategory>;
}>;


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
  caption
  storyText
  category
  author
  altText
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
export const DeleteStoryDocument = gql`
    mutation deleteStory($id: Float!) {
  deleteStory(id: $id)
}
    `;
export type DeleteStoryMutationFn = Apollo.MutationFunction<DeleteStoryMutation, DeleteStoryMutationVariables>;

/**
 * __useDeleteStoryMutation__
 *
 * To run a mutation, you first call `useDeleteStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStoryMutation, { data, loading, error }] = useDeleteStoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStoryMutation, DeleteStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStoryMutation, DeleteStoryMutationVariables>(DeleteStoryDocument, options);
      }
export type DeleteStoryMutationHookResult = ReturnType<typeof useDeleteStoryMutation>;
export type DeleteStoryMutationResult = Apollo.MutationResult<DeleteStoryMutation>;
export type DeleteStoryMutationOptions = Apollo.BaseMutationOptions<DeleteStoryMutation, DeleteStoryMutationVariables>;
export const LogInDocument = gql`
    mutation LogIn($username: String!, $password: String!) {
  login(logInInput: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}
    `;
export type LogInMutationFn = Apollo.MutationFunction<LogInMutation, LogInMutationVariables>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLogInMutation(baseOptions?: Apollo.MutationHookOptions<LogInMutation, LogInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument, options);
      }
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<LogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<LogInMutation, LogInMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(logInInput: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateStoryDocument = gql`
    mutation updateStory($id: Float!, $input: UpdateStoryInput!) {
  updateStory(id: $id, input: $input) {
    ...StorySnippet
  }
}
    ${StorySnippetFragmentDoc}`;
export type UpdateStoryMutationFn = Apollo.MutationFunction<UpdateStoryMutation, UpdateStoryMutationVariables>;

/**
 * __useUpdateStoryMutation__
 *
 * To run a mutation, you first call `useUpdateStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStoryMutation, { data, loading, error }] = useUpdateStoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStoryMutation, UpdateStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStoryMutation, UpdateStoryMutationVariables>(UpdateStoryDocument, options);
      }
export type UpdateStoryMutationHookResult = ReturnType<typeof useUpdateStoryMutation>;
export type UpdateStoryMutationResult = Apollo.MutationResult<UpdateStoryMutation>;
export type UpdateStoryMutationOptions = Apollo.BaseMutationOptions<UpdateStoryMutation, UpdateStoryMutationVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  me {
    id
    username
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetStoriesDocument = gql`
    query GetStories($townFilter: FilterQueryByTown, $categoryFilter: FilterQueryByCategory) {
  stories(townFilter: $townFilter, categoryFilter: $categoryFilter) {
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
 *      townFilter: // value for 'townFilter'
 *      categoryFilter: // value for 'categoryFilter'
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