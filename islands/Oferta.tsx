
import { type Curso } from "site/apps/types.ts";
import { useSignal } from "@preact/signals";

interface OfertaProps {
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

const Oferta = ({ cursos }: OfertaProps) => {
    
    
    const cidadesToShow = useSignal<string[]>([]);
    const polosToShow = useSignal<string[]>([]);
    const ofertasToShow = useSignal<object>({});
    const mostrarOfertas = useSignal<boolean>(false);

    const etapa1 = (
        <div class="basis-full md:basis-1/2 md:order-2">
            
            <iframe class="aspect-video mb-10" width="100%" src="https://www.youtube.com/embed/qAGTbTVwHSQ?si=SqbLqN5qhN1F08aq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <script src="/cardScript.js"></script>

            <div id="card" class="bg-[#3a3b39] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-[16px] z-10">
                <ul class="steps bg-[#30312f] w-full rounded-t-[16px] py-5 px-10">
                    <li class="step step-warning"><p class="text-xs text-white">Selecione o curso</p></li>
                    <li class="step step-warning"><p class="text-xs text-white">Selecione sua localidade</p></li>
                    <li class="step"><p class="text-xs text-white">Confira a melhor oferta</p></li>
                    <li class="step"><p class="text-xs text-white">Inscreva-se</p></li>
                </ul>
                <p class="text-4xl font-bold text-[#ffdd00] px-5 pt-5">Seu caminho para o sucesso começa aqui</p>
                <p class="text-2xl font-base text-white my-4 px-5">Selecione o <strong>Estado</strong> a <strong>Cidade</strong> e a <strong>Unidade</strong> em que deseja iniciar sua jornada.</p>
                <div class="flex gap-[15px] px-5">
                    
                    <div class="flex-1 grid gap-[7px]">
                        <label for="" class="text-xl text-white">Estado</label>
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
                        }}
                            class="bg-white border border-black rounded-md text-xl py-2 px-4">
                        <option value="">- Selecione -</option>
                        {estadosDoBrasil.map(estado => (
                            <option value={estado.sigla}>{estado.nome}</option>
                        ))}
                        </select>
                    </div>
                    <div class="flex-1 grid gap-[7px]">
                        <label for="" class="text-xl text-white">Cidade</label>
                        <select
                            class="bg-white border border-black rounded-md text-xl py-2 px-4"
                            onChange={(e) => {
                                const cidade = e.currentTarget.value;
                                const polos: string[] = [];                

                                for (const curso of cursos) {
                                    for (const polo of curso.polos) {
                                        if (polo.cidd_nome === cidade) {
                                            polos.push(polo.epon_nome);
                                        }
                                    }
                                }
                                polosToShow.value = polos;
                            }}
                        >
                            <option value="">- Selecione -</option>
                            {cidadesToShow.value.map(cidade => (
                                <option value={cidade}>{cidade}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div class="flex flex-col gap-[15px] px-5 py-5">
                    <div class=" flex-1 grid gap-[7px]">
                        <label for="" class="text-xl text-white">Unidade/Polo</label>
                        <select
                            class="bg-white border border-black rounded-md text-xl py-2 px-4"
                            onChange={(e) => {
                                
                                const poloSelecionado = e.currentTarget.value;
                                var ofertas: object = {};                

                                for (const curso of cursos) {
                                    for (const polo of curso.polos) {
                                        if (polo.epon_nome === poloSelecionado) {

                                            const promocoes = polo.preco.promocoes[0]

                                            const valorBruto = parseFloat(polo.preco[0].valor)
                                            const valorLiquido = parseFloat(polo.preco[0].valorCalculado)
                                            const economia = valorBruto - valorLiquido
                                            const desconto = parseFloat(promocoes.percentual) + parseFloat(promocoes.percentual_pontualidade)

                                            ofertas = {
                                                curso: curso.ecur_nome,
                                                valorBruto,
                                                valorLiquido,
                                                desconto,
                                                economia,
                                                descricao: promocoes.descricao,
                                                cidade: polo.cidd_nome,
                                                estado: polo.cidd_esta,
                                                endereco: polo.epon_ende,
                                                bairro: polo.epon_bair,
                                                numero: polo.epon_nume,
                                                complemento: polo.epon_comp,
                                                telefone: polo.epon_fone,
                                            };
                                        }
                                    }
                                }
                                
                                ofertasToShow.value = ofertas;
                            }}
                        >
                            <option value="">- Selecione -</option>
                            {polosToShow.value.map(polo => (
                                <option value={polo}>{polo}</option>
                            ))}
                        </select>
                    </div>
                    <div class="flex-1">
                        <button disabled={ofertasToShow.value ? false : true} onClick={() => { mostrarOfertas.value = true }} class="block w-full py-3 px-6 text-2xl font-bold text-center text-[#ffdd00] uppercase border border-[#ffdd00] rounded-[6px]">Confira nossas ofertas</button>
                    </div>

                </div>
            </div>
        </div>
    )

    const etapa2 = (
        
        <div class="basis-full md:basis-1/2 md:order-2">
            
            <iframe class="aspect-video mb-10" width="100%" src="https://www.youtube.com/embed/qAGTbTVwHSQ?si=SqbLqN5qhN1F08aq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <script src="/cardScript.js"></script>

            <div id="card" class="bg-[#3a3b39] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-[16px] z-10">
                <ul class="steps bg-[#30312f] w-full rounded-t-[16px] py-5 px-10">
                    <li class="step step-warning"><p class="text-xs text-white">Selecione o curso</p></li>
                    <li class="step step-warning"><p class="text-xs text-white">Selecione sua localidade</p></li>
                    <li class="step step-warning"><p class="text-xs text-white">Confira a melhor oferta</p></li>
                    <li class="step"><p class="text-xs text-white">Inscreva-se</p></li>
                </ul>
                <p class="text-4xl font-bold text-[#ffdd00] px-5 pt-5">{ofertasToShow.value.curso}</p>
                <p class="text-3xl font-base text-[#ffdd00] my-4 px-5">Bacharelado - EAD</p>
                <p class="text-2xl font-base text-white my-4 px-5">Inscreva-se agora e <strong>garanta sua vaga</strong> e comece sua graduação o quanto antes.</p>
                
                <div className="bg-white p-3">
                    <p><strong>Mensalidade:</strong></p>
                    <p>De: R$ { ofertasToShow.value.valorBruto }</p>
                    <p>R$ { ofertasToShow.value.valorLiquido }</p>
                    <p>Desconto { ofertasToShow.value.desconto }</p>
                    <p>(economize até <span>R$ { ofertasToShow.value.economia }</span> pagando em dia)</p>
                </div>

                <p class="text-[14px] font-base text-white my-4 px-5"><strong>{ ofertasToShow.value.cidade } - { ofertasToShow.value.estado }</strong></p>
                <p class="text-[14px] font-base text-white my-4 px-5">{ ofertasToShow.value.telefone }</p>
                <p class="text-[14px] font-base text-white my-4 px-5">{ ofertasToShow.value.endereco }, { ofertasToShow.value.numero } {ofertasToShow.value.complemento} - { ofertasToShow.value.bairro }</p>
                <button onClick={() => { mostrarOfertas.value = true }} class="block w-full py-3 px-6 text-2xl font-bold text-center bg-[#ffdd00] color-[#3a3b39] uppercase border border-[#ffdd00] rounded-[6px]">Inscreva-se</button>
                <p class="text-[12px] font-base text-white my-4 px-5">{ofertasToShow.value.descricao}</p>
            </div>
        </div>
    );

    return mostrarOfertas.value ? etapa2 : etapa1;
};

export default Oferta;