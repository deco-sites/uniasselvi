
export interface Semestre {
    esem_peri: string;
    esem_seme: string;
    esem_sequ: string;
    esem_desc: string;
    esem_etip: string;
    esem_stat: string;
    esem_sede: string;
    esem_dpin: Date;
    esem_dpfi: Date;
    data_ini:  Date;
    data_fim:  Date;
    etip_nome: string;
    etip_moda: string;
    sede_pead: string;
    cursos:    Curso[];
}

export interface Curso {
    ecur_codi: string;
    ecur_nome: string;
    ecur_curs: string;
    ecur_sede: string;
    ecse_turn: string;
    ecse_peri: string;
    cidd_esta: CiddEsta;
    polos:     Polo[];
}

export type CiddEsta = "MG" | "PA" | "PE" | "MA" | "CE" | "GO" | "RN" | "SP" | "SC" | "AL" | "PI" | "PB" | "BA" | "RS" | "PR" | "MT" | "RO" | "MS" | "RJ" | "SE" | "ES" | "TO" | "AM" | "RR" | "DF" | "AC" | "AP";

export interface Polo {
    epon_nome: string;
    sede_codi: string;
    epon_bair: string;
    epon_ende: string;
    epon_nume: string;
    epon_comp: string;
    epon_cep:  string;
    epon_sten: string;
    epon_cidd: string;
    epon_fone: string;
    status:    Status;
    epol_codi: string;
    epon_nucl: string;
    epol_desc: string;
    epol_polo: string;
    cidd_esta: CiddEsta;
    cidd_nome: string;
    slug:      string;
    preco:     PrecoElement[] | PurplePreco;
}

export interface PrecoElement {
    valor:           string;
    percentual:      string;
    payment_code:    string;
    payment_text:    PaymentText;
    valorCalculado?: string;
}

export type PaymentText = "pagando em dia";

export interface PurplePreco {
    "0":       PrecoElement;
    promocoes: Promocoe[];
}

export interface Promocoe {
    descricao?:               string;
    codigo_oferta:            string;
    data_ini:                 Date;
    data_fim:                 Date;
    percentual?:              number | string;
    percentual_pontualidade?: string;
    valor_final:              string;
    data_corte_deducoes?:     DataCorteDeducoes;
    poed_cart?:               PoedCart;
    payment_perc:             number | string;
    payment_valor:            string;
    payment_code?:            string;
    payment_text?:            string;
}

export type DataCorteDeducoes = "S";

export type PoedCart = "T";

export type Status = "Ativo Site e Seleção";