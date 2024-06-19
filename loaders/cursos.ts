import { AppContext } from "site/apps/site.ts";
import { Curso } from "site/apps/types.ts";

export default async function cursos(
    _props: null,
    _req: Request,
    ctx: AppContext,
): Promise<Curso[]> {
    const response = await ctx.api["GET /extranet/o-2.0/relatorio/poc_carga_portal.php"]({
        semestre: "2024/2",
    });

    const data = await response.json();

    return data.map(semestre => semestre.cursos).flat();
}