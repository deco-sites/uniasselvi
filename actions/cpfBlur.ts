import { AppContext } from "site/apps/site.ts";

interface Props {
    cpf: string;
}

const DEFAULT_PROPS = {
    passa_curso: "s",
    esem: 3,
    ecur_codi: 5029,
    tipo: "inscricao_ficha",
}

export interface CpfResponse {
    passa_curso:  string;
    esem:         string;
    ecur_codi:    string;
    tipo:         string;
    data:         string;
    error:        boolean;
    tem_insc:     boolean;
    data_confere: boolean;
    tem_so_insc:  boolean;
    pessoa:       Pessoa;
}

export interface Pessoa {
    mail_code:      number;
    celu_code:      number;
    pess_codi:      string;
    pess_nome:      string;
    pess_mail:      string;
    pess_dnas:      string;
    pess_sexo:      string;
    pess_cep:       string;
    pess_ende:      string;
    pess_nume:      string;
    pess_comp:      string;
    pess_bair:      string;
    pess_uf:        string;
    pess_ance:      string;
    pess_naci_desc: string;
    pess_naci:      string;
    pess_celu_full: string;
    ddd_pess_celu:  string;
    pess_celu:      string;
    ddd_pess_fone:  string;
    pess_fone:      string;
}

function transform(props: Props) {
    return {
        data: props.cpf,
    };
}

export default async function cpfBlur(props: Props, _req: Request, _ctx: AppContext) {
    const url = new URL("https://portal.uniasselvi.com.br/selecao2/server/request.php");

    const params = {...DEFAULT_PROPS, ...transform(props)};
    for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, String(value));
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    });

    const response = await res.json();
    return response as CpfResponse;
}