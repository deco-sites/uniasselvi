import { type Curso } from "site/apps/types.ts";
import { useSignal } from "@preact/signals";

export interface Props {
    cursos: Curso[];
}

interface Estado {
    nome: string;
    sigla: string;
}

const estadosDoBrasil: Estado[] = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' },
];

export default function Cursos({
    cursos
}: Props) {
    const cidadesToShow = useSignal<string[]>([]);

    return (
        <ul class="flex flex-col gap-2 p-2">
            <select onChange={(e) => {
                const sigla = e.currentTarget.value;
                const cidades: string[] = [];                

                for (const curso of cursos) {
                    for (const polo of curso.polos) {
                        if (polo.cidd_esta === sigla) {
                            cidades.push(polo.cidd_nome);
                        }
                    }
                }

                cidadesToShow.value = cidades;
            }}>
                {estadosDoBrasil.map(estado => (
                    <option value={estado.sigla}>{estado.nome}</option>
                ))}
            </select>
            <select>
                {cidadesToShow.value.map(cidade => (
                    <option value={cidade}>{cidade}</option>
                ))}
            </select>
            {cursos.map(curso => (
                <li>- {curso.ecur_nome}</li>
            ))}
        </ul>
    );
}