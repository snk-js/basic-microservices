import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';

import cors from 'cors';
import express from 'express';

// @ts-ignore
import resolvers from '#root/graphql/resolvers'
// @ts-ignore
import typeDefs from '#root/graphql/typeDefs'
// @ts-ignore
import accessEnv from '#root/helpers/accessEnv';

const PORT = accessEnv("PORT", 7000);

const apolloServer = new ApolloServer({
    resolvers,
    typeDefs
})
const app = express()

app.use(cookieParser());

app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
}))

apolloServer.applyMiddleware({app, cors: false, path: "/graphql"})

app.listen(PORT, "0.0.0.0", () => {
    console.info(`API gateway listening on ${PORT}`)
})
