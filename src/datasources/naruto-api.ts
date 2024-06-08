import { RESTDataSource } from "@apollo/datasource-rest"
import { Ninja, Clan } from "../types"

export class NarutoAPI extends RESTDataSource {
    baseURL = "https://narutodb.xyz/api/"

    // async getNinja(): Promise<Ninja[]>{
    //     const response = await this.get<{ 
    //         characters: {
    //             items: Ninja[] 
    //         }
    //     }>("character")
        
    //     return response?.characters?.items ?? []
    // }

    async getNinjas(): Promise<Ninja[]>{
        const response = await this.get<{ 
            characters:  Ninja[] 
        }>("character")
        
        return response?.characters ?? []
    }

    async getNinja(ninjaId: string): Promise<Ninja> {
        const response = await this.get(`character/${ninjaId}`)
        return response
    }

    async getClan(nameClan: Clan): Promise<Clan> {
        const response = await this.get(`clan/search?name=${nameClan}`)
        return response
    }
}