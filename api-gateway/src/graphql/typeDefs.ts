import { gql } from "apollo-server"

const typeDefs = gql`
    type Customer {
        id: ID!
        first_name: String!
        last_name: String
        email: String
        gender: String
        company: String
        city: String!
        title: String!
        lat: String
        long: String
    }

    type Query {
        customers: [Customer!]!
    }

`

export default typeDefs