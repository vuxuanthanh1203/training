const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID
        name: String
        email: String
    }

    type Category {
        id: ID
        name: String
        products: [Product]
    }

    type Product {
        id: ID
        name: String
        des: String
        category: Category
    }
 
    # ROOT TYPE
    type Query {
        products: [Product]
        product (id: ID!): Product
        users: [User]
        user (id: ID!): User
        categories: [Category]
        category (id: ID!): Category
    }

    type Mutation {
        createCategory(name: String!): Category
        deleteCategory(id:ID!): Boolean,
        updateCategory(id:ID!,name:String): Boolean,
        createProduct(name: String!, des: String!, categoryId: ID!): Product
    }
    
`
module.exports = typeDefs;