const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const app = express();

// Load Schemas & resolves
const typeDefs = require('./schemas/schema');
const resolvers = require('./resolvers/resolver');

const startApolloServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    server.applyMiddleware({ app });
}

startApolloServer();

app.listen(4000, () => {
    console.log("Server running on port 4000");
});