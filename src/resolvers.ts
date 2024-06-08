import { Resolvers } from "./types"

export const resolvers: Resolvers = {
    Query: {
        // ninjas: (parent, args, contextValue, info) => {}
        ninjas: (_, __, { dataSources }) => {
            return dataSources.narutoAPI.getNinjas()
        },
        ninja: (_, { id }, {dataSources} ) => {
            return dataSources.narutoAPI.getNinja(id)
        }
    },
    Ninja: {
        // personal: (parent) => {
        //     console.log(parent);
        personal: ({ personal }) => {
            return personal;
          }
    },
    PersonalData: {
        clan: ({clan}, _, { dataSources }) => {
            return dataSources.narutoAPI.getClan(clan)
        }
    }
}