import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
  }
`;

export default typeDefs;
