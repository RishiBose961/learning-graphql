import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"


import merageResolvers from "./resolvers/index.js"
import merageTypesDefs from "./typeDefs/index.js"
 
const server = new ApolloServer({
  typeDefs:merageTypesDefs,
  resolvers:merageResolvers,
})
 
const { url } = await startStandaloneServer(server)
 
console.log(`🚀 Server ready at ${url}`)