import { Cookie, setCookie } from "std/http/cookie.ts";
import { AppContext } from "site/apps/site.ts";

const DEFAULT_PROPS = {
  type: "candidate",
};

interface Props {
  cpf: string;
  data_nasc: string;
}

function transform(props: Props) {
  return {
    username: props.cpf,
    birthDay: props.data_nasc,
  };
}

export default async function getTokenAva(
  props: Props,
  _req: Request,
  _ctx: AppContext,
) {
  const url = new URL(
    "https://api-areasegura.uniasselvi.com.br/security/check",
  );

  const body = { ...transform(props), ...DEFAULT_PROPS };

  console.log(JSON.stringify(body));
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const response = await res.json();
  return response.token;
}
