import "reflect-metadata"

import Path from "path"
import { buildSchema } from "type-graphql"
import { ApolloServer } from "apollo-server"
import { UserResolver } from "./src/resolvers/userResolver"

async function main() {
    const schema = await buildSchema({
        resolvers:[UserResolver],
        emitSchemaFile:Path.resolve(__dirname, "schema.gql")
    })

    const server = new ApolloServer({ schema })
    const { url } = await server.listen();
    console.log(`server listening on ${url}`);
}

main()