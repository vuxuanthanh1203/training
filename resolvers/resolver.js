const users = require('../data/users');
const products = require('../data/products');
const categories = require('../data/categories');

const resolves = {
    // QUERY
    Query: {
        products: () => products,
        product: (parent, args) => products.find(product => product.id === args.id * 1),
        users: () => users,
        user: (parent, args) => users.find(user => user.id === args.id * 1),
        categories: () => categories,
        category: (parent, args) => categories.find(category => category.id === args.id * 1)
    },
    Product: {
        category: (parent, args) => {
            return categories.find(category => category.id === parent.categoryId * 1);
        }
    },
    Category: {
        products: (parent, args) => {
            // console.log(parent);
            return products.filter(product => product.categoryId === parent.id);
        }
    },

    //MUTATION
    Mutation: {
        createCategory: (parent, args) => {
            const { name } = args
            const category = { id: categories.length + 1, name }
            categories.push(category)
            return category
        },
        deleteCategory: (parent, args) => {
            const categoryIndex = categories.findIndex(category => category.id == args.id)
            let flag = false
            if (categoryIndex != -1) {
                categories.splice(categoryIndex, 1);
                flag = true
            }
            return flag;
        },
        updateCategory: (parent, args) => {
            const categoryIndex = categories.findIndex(category => category.id == args.id)
            const { name } = args
            let flag = false
            if (categoryIndex != -1) {
                if (name) {
                    categories[categoryIndex].name = name
                    flag = true
                }
            }
            return flag;
        },
        createProduct: (parent, args) => { console.log(args) }
    }

}

module.exports = resolves;