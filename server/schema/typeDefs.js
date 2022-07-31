import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String
    friends: [User]
    favouriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  input AddUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: String = "BRAZIL"
  }

  input UpdateUserInput {
    name: String
    username: String
    age: Int
    nationality: String
  }

  type Mutation {
    addUser(input: AddUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): User
  }
`;
