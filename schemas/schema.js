const { gql } = require('apollo-server-express');

const typeDefs = gql`
# ROOT TYPE
    type Query {
        categories: [Category]!
        category (id: ID!): Category!

        products: [Product]!
        product (id: ID!): Product!

        users: [User]!
        user (id: ID!): User!
        
    }

    type Mutation {
        createCategory(name: String!): Category!
        deleteCategory(id:ID!): Boolean!
        updateCategory(id:ID!,name:String): Boolean!

        createProduct(name: String!, des: String!, categoryId: ID!): Product!
    }

    type Category {
        id: ID!
        name: String!
        products: [Product]
    }

    type Product {
        id: ID!
        name: String!
        des: String!
        category: Category!
    }

    type User {
        id: ID!
        name: String!
        email: String!
    }
`
module.exports = typeDefs;