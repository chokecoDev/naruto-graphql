import { NarutoAPI } from "./datasources/naruto-api";

export type DataSourceContext = {
    dataSources: {
        narutoAPI: NarutoAPI
    }
}