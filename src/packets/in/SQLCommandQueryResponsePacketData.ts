import {Client} from "../../logic/data/Client";
import {Column} from "../../logic/data/Column";

export type SQLCommandQueryResponsePacketData = {
    sql: string,
    databaseID: string,
    success: boolean,
    errormessage: string,
    client: Client,
    rows: Map<string, any>[],
    columns: Column[]
}
