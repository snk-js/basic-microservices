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


    type CountCustomerByCity {
        city: String!
        customers_total: Int!
    }


    type Query {
        customersByCity(city: String!): [Customer!]!
        customerById(id: String!): Customer!
        totalCustomersByCity(limit: Int! offset: Int!): [CountCustomerByCity!]!
    }


`

export default typeDefs