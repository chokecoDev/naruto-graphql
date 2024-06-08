import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

import { readFileSync } from "fs"
import path from "path"
import { gql } from "graphql-tag"

import { resolvers } from "./resolvers"
import { NarutoAPI } from "./datasources/naruto-api"

const typeDefs = gql(
    readFileSync(path.resolve(__dirname, "./schema.graphql"), {
        encoding: "utf-8"
    })
)

async function startApolloServer(){
    const server = new ApolloServer({ 
        typeDefs,
        resolvers
    })

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000},
        context: async () => {
            const { cache } = server

            return {
                dataSources: {
                    narutoAPI: new NarutoAPI({ cache })
                }
            }
        }
    })
    console.log(`
        El Server está activo!
        Abrir en un navegador Web: ${url}
    `)
}

startApolloServer()