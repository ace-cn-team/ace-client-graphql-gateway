module.exports = {
    serverPort: 8080,
    graphqlPath: '/graphql',
    graphqlServiceUrlList: [
        {name: "human", url: "http://localhost:8082/graphql"},
        {name: "book", url: "http://localhost:8081/graphql"},
    ]
};