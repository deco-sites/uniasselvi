import { type Semestre } from "./types.ts";

export interface API {
    "GET /extranet/o-2.0/relatorio/poc_carga_portal.php": {
        response: Semestre[];
        searchParams: {
            semestre: string;
        };
    }
}