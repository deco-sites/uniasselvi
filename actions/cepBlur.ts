import { AppContext } from "site/apps/site.ts";

interface Props {
  cep: string;
}

export interface PropsCep {
  bairro: string;
  cep: string;
  cidade: string;
  complemento2: string;
  end: string;
  uf: string;
  success: boolean;
  status: number;
  cidade_codi: number;
  cidade_nome: string;
  cidade_uf: string;
}

export default async function cepBlur(
  props: Props,
  _req: Request,
  _ctx: AppContext,
) {
  const url = new URL(
    "https://portal.uniasselvi.com.br/selecao2/server/request_cep.php",
  );

  const params = { ...props };
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, String(value));
  }

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json();
  return response.data as PropsCep;
}
