// const sequelize = require('sequelize');
const User = require('../models').User;
const Product = require('../models').Product;
const Category = require('../models').Category;

const resolves = {
    // QUERY
    Query: {
        categories: async (parent, args, { queryData }) => await queryData.getAllCategory(),
        category: async (parent, { id }, { queryData }) => await queryData.getCategoryById(id),

        products: async (parent, args, { queryData }) => await queryData.getAllProducts(),
        product: async (parent, { id }, { queryData }) => await queryData.getProductById(id),

        users: async (parent, args, { queryData }) => await queryData.getAllUsers(),
        user: async (parent, { id }, { queryData }) => await queryData.getUserById(id),
    },
    Product: {
        category: async ({ categoryId }, args, { queryData }) => await queryData.getCategoryById(categoryId),
    },
    Category: {
        products: async ({ id }, args, { queryData }) => await queryData.getAllProducts(id),
    },

    //MUTATION
    Mutation: {
        createCategory: async (parent, args, { queryData }) => await queryData.createCategory(args),

        deleteCategory: async (parent, args, { queryData }) => await queryData.deleteCategory(args),
        updateCategory: async (parent, args, { queryData }) => await queryData.updateCategory(args),
        createProduct: async (parent, args, { queryData }) => await queryData.createProduct(args),

        createUser: async (parent, args, { queryData }) => await queryData.createUser(args),
    }

}

module.exports = resolves;