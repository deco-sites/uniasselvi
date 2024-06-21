import { AppContext } from "site/apps/site.ts";
import { Curso, Semestre } from "site/apps/types.ts";
import { api } from "../apps/site.ts";

let data: Semestre[] | null = null;

async function fetchSemestre() {
  const semestres = await api
    ["GET /extranet/o-2.0/relatorio/poc_carga_portal.php"]({
      semestre: "2024/2",
    }).then((response) => {
      return response.json();
    });

  data = semestres;

  return data;
}

export default async function cursos(
  _props: null,
  _req: Request,
  _ctx: AppContext,
): Promise<Curso[]> {
  const semestres = data ?? await fetchSemestre();

  return semestres.map((semestre) => semestre.cursos).flat();
}

export const cache = "stale-while-revalidate";
