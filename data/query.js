const Category = require('../models').Category;
const Product = require('../models').Product;
const User = require('../models').User;

const queryData = {
    getAllCategories: async (condition = null) => {
        return condition === null ? await Category.findAll() : await Product.findAll(condition)
    },
    getCategoryById: async (id) => await Category.findByPk(id),
    deleteCategory: async (args) => await Category.destroy({
        where: {
            id: args.id
        }
    }),
    updateCategory: async (args) => await Category.update({ name: args.name, updatedAt: Date.now() }, {
        where: {
            id: args.id
        }
    }),

    getAllProducts: async () => await Product.findAll(),
    getProductById: async (id) => await Product.findByPk(id),

    getAllUsers: async () => await User.findAll(),
    getUserById: async (id) => await User.findByPk(id),

    createUser: async (args) => await User.create(args),
    createProduct: async (args) => await Product.create(args),
    createCategory: async (args) => await Category.create(args),
}

module.exports = queryData;