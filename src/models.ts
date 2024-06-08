export type NinjaClan = {
    items: {
        clan: ClanModel
    }
}

export type NinjaModel = {
    id: string
    name: string
    jutsu: [string]
}

export type ClanModel = {
    id: string
    name: string
}