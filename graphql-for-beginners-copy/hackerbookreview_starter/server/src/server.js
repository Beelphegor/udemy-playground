import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
// import cors from "cors";
// import bodyParser from "body-parser";
// import { makeExecutableSchema } from "graphql-tools";
// import { graphql } from "graphql";
// import { ApolloLink, fromPromise } from "apollo-link";
import typeDefs from "./typedefs";
import resolvers from "./resolvers";
import loaders from "./loaders";

const PORT = 4000;

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: {
    loaders: loaders(),
  },
});

await server.start();

server.applyMiddleware({ app, path: "/graphql", cors: true });

await new Promise((resolve) => app.listen({ port: PORT }, resolve));
console.log(
  `Go to http://localhost:${PORT}${server.graphqlPath} to run queries!`
);

// app.use(cors());

// app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// app.listen(4000, () => {
//   console.log("Go to http://localhost:4000/graphiql");
// });

// const typeDefs = `
// schema {
//   query: Query
// }
// # root query for ***Hello World Server***
// type Query {
//   #Syas hello *world*
//   hello: String
//   """
//   multi line

//   documentation

//   here
//   """
//   name: String
// }
// `;
