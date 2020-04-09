const {ApolloGateway} = require("@apollo/gateway");

const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const appConfig = require('./appConfig');

const gateway = new ApolloGateway({
    serviceList: appConfig.graphqlServiceUrlList
});
const server = new ApolloServer({gateway, subscriptions: false});
const app = express();
server.graphqlPath = appConfig.graphqlPath;
server.applyMiddleware({app});

module.exports = app;