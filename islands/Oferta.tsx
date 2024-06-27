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
  { nome: "Acre", sigla: "AC" },
  { nome: "Alagoas", sigla: "AL" },
  { nome: "Amapá", sigla: "AP" },
  { nome: "Amazonas", sigla: "AM" },
  { nome: "Bahia", sigla: "BA" },
  { nome: "Ceará", sigla: "CE" },
  { nome: "Distrito Federal", sigla: "DF" },
  { nome: "Espírito Santo", sigla: "ES" },
  { nome: "Goiás", sigla: "GO" },
  { nome: "Maranhão", sigla: "MA" },
  { nome: "Mato Grosso", sigla: "MT" },
  { nome: "Mato Grosso do Sul", sigla: "MS" },
  { nome: "Minas Gerais", sigla: "MG" },
  { nome: "Pará", sigla: "PA" },
  { nome: "Paraíba", sigla: "PB" },
  { nome: "Paraná", sigla: "PR" },
  { nome: "Pernambuco", sigla: "PE" },
  { nome: "Piauí", sigla: "PI" },
  { nome: "Rio de Janeiro", sigla: "RJ" },
  { nome: "Rio Grande do Norte", sigla: "RN" },
  { nome: "Rio Grande do Sul", sigla: "RS" },
  { nome: "Rondônia", sigla: "RO" },
  { nome: "Roraima", sigla: "RR" },
  { nome: "Santa Catarina", sigla: "SC" },
  { nome: "São Paulo", sigla: "SP" },
  { nome: "Sergipe", sigla: "SE" },
  { nome: "Tocantins", sigla: "TO" },
];

function formatReal(value) {
  const val = (value / 1).toFixed(2).replace(".", ",");
  return "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function formatDesconto(value) {
  const val = (value / 1).toFixed(0).replace(".", ",");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "%";
}

const Oferta = ({ cursos }: Props) => {
  const cidadesToShow = useSignal<string[]>([]);
  const polosToShow = useSignal<string[]>([]);
  const ofertasToShow = useSignal<object>({});
  const mostrarOfertas = useSignal<boolean>(false);

  const etapa1 = (
    <div class="basis-full md:basis-1/2 md:order-2">
      <iframe
        class="aspect-video mb-10"
        width="100%"
        src="https://www.youtube.com/embed/qAGTbTVwHSQ?si=SqbLqN5qhN1F08aq"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      >
      </iframe>

      <script src="/cardScript.js"></script>

      <div
        id="card"
        class="bg-[#3a3b39] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-[16px] z-10 md:max-w-[347px] lg:max-w-[457px] xl:max-w-[507px] 2xl:max-w-[572px]"
      >
        <ul class="steps bg-[#30312f] w-full rounded-t-[16px] py-5 px-10">
          <li class="step step-warning">
            <p class="text-xs text-white">Selecione o curso</p>
          </li>
          <li class="step step-warning">
            <p class="text-xs text-white">Selecione sua localidade</p>
          </li>
          <li class="step">
            <p class="text-xs text-white">Confira a melhor oferta</p>
          </li>
          <li class="step">
            <p class="text-xs text-white">Inscreva-se</p>
          </li>
        </ul>
        <p class="text-4xl font-bold text-[#ffdd00] px-5 pt-5">
          Seu caminho para o sucesso começa aqui
        </p>
        <p class="text-2xl font-base text-white my-4 px-5">
          Selecione o <strong>Estado</strong> a <strong>Cidade</strong> e a{" "}
          <strong>Unidade</strong> em que deseja iniciar sua jornada.
        </p>
        <div class="flex flex-col md:flex-row gap-[15px] px-5">
          <div class="flex-1 grid gap-[7px]">
            <label for="" class="text-xl text-white">Estado</label>
            <select
              onChange={(e) => {
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
              class="bg-white border border-black rounded-md text-xl py-2 px-4 w-full"
            >
              <option value="">- Selecione -</option>
              {estadosDoBrasil.map((estado) => (
                <option value={estado.sigla}>{estado.nome}</option>
              ))}
            </select>
          </div>
          <div class="flex-1 grid gap-[7px]">
            <label for="" class="text-xl text-white">Cidade</label>
            <select
              class="bg-white border border-black rounded-md text-xl py-2 px-4 w-full"
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
              {cidadesToShow.value.map((cidade) => (
                <option value={cidade}>{cidade}</option>
              ))}
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-[15px] px-5 py-5">
          <div class=" flex-1 grid gap-[7px]">
            <label for="" class="text-xl text-white">Unidade/Polo</label>
            <select
              class="bg-white border border-black rounded-md text-xl py-2 px-4 w-full"
              onChange={(e) => {
                const poloSelecionado = e.currentTarget.value;
                var ofertas: object = {};

                for (const curso of cursos) {
                  for (const polo of curso.polos) {
                    if (polo.epon_nome === poloSelecionado) {
                      const promocoes = polo.preco.promocoes[0];

                      const valorBruto = parseFloat(polo.preco[0].valor);
                      const valorLiquido = parseFloat(
                        polo.preco[0].valorCalculado,
                      );
                      const economia = valorBruto - valorLiquido;
                      const desconto = parseFloat(promocoes.percentual) +
                        parseFloat(promocoes.percentual_pontualidade);

                      ofertas = {
                        curso: curso.ecur_nome,
                        codigo: curso.ecur_codi,
                        codigo_polo: polo.epol_codi,
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
              {polosToShow.value.map((polo) => (
                <option value={polo}>{polo}</option>
              ))}
            </select>
          </div>
          <div class="flex-1">
            <button
              disabled={ofertasToShow.value ? false : true}
              onClick={() => {
                mostrarOfertas.value = true;
              }}
              class="block w-full py-3 px-6 text-2xl font-bold text-center text-[#ffdd00] uppercase border border-[#ffdd00] rounded-[6px]"
            >
              Confira nossas ofertas
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const etapa2 = (
    <div class="basis-full md:basis-1/2 md:order-2">
      <iframe
        class="aspect-video mb-10"
        width="100%"
        src="https://www.youtube.com/embed/qAGTbTVwHSQ?si=SqbLqN5qhN1F08aq"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      >
      </iframe>

      <script src="/cardScript.js"></script>

      <div
        id="card"
        class="bg-[#3a3b39] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-[16px] z-10 md:max-w-[347px] lg:max-w-[457px] xl:max-w-[507px] 2xl:max-w-[572px]"
      >
        <ul class="steps bg-[#30312f] w-full rounded-t-[16px] py-5 px-10">
          <li class="step step-warning">
            <p class="text-xs text-white">Selecione o curso</p>
          </li>
          <li class="step step-warning">
            <p class="text-xs text-white">Selecione sua localidade</p>
          </li>
          <li class="step step-warning">
            <p class="text-xs text-white">Confira a melhor oferta</p>
          </li>
          <li class="step">
            <p class="text-xs text-white">Inscreva-se</p>
          </li>
        </ul>
        <p class="text-4xl font-bold text-[#ffdd00] px-5 pt-5">
          {ofertasToShow.value.curso}
        </p>
        <p class="text-3xl font-base text-[#ffdd00] my-4 px-5">
          Bacharelado - EAD
        </p>
        <p class="text-2xl font-base text-white my-4 px-5">
          Inscreva-se agora e <strong>garanta sua vaga</strong>{" "}
          e comece sua graduação o quanto antes.
        </p>
        <div className="px-5">
          <div className="bg-white p-3">
            <p>
              <strong>Mensalidade:</strong>
            </p>
            <div className="flex gap-4 my-5">
              <div class="w-fit">
                <p>
                  <s>De: {formatReal(ofertasToShow.value.valorBruto)}</s>
                </p>
                <p>
                  <strong class="text-4xl">
                    {formatReal(ofertasToShow.value.valorLiquido)}
                  </strong>
                </p>
              </div>
              <div class="relative h-16 w-16">
                <svg
                  class="absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 62.92 62.91"
                >
                  <path
                    fill="#ffe11f"
                    class="cls-1"
                    d="M23.31,1,28.5,3.26,33.11,0l4.24,3.73,5.4-1.68,2.88,4.86L51.28,7l1.25,5.51,5.35,1.81-.52,5.63,4.53,3.38-2.24,5.18,3.27,4.62-3.73,4.24,1.68,5.4L56,45.63l-.07,5.65-5.51,1.25-1.82,5.35L43,57.36l-3.38,4.53-5.19-2.24-4.61,3.26-4.25-3.72-5.39,1.68L17.28,56l-5.65-.07-1.24-5.51L5,48.61,5.56,43,1,39.61l2.23-5.19L0,29.81l3.73-4.25L2,20.17l4.86-2.89L7,11.63l5.51-1.24L14.3,5l5.63.52Z"
                  />
                </svg>
                <p class="absolute text-bold top-5 text-3x1 text-center ml-2">
                  <strong>
                    -{formatDesconto(ofertasToShow.value.desconto)}*
                  </strong>
                </p>
              </div>
            </div>
            <p>
              (economize até{" "}
              <strong class="text-[#00a499]">
                {formatReal(ofertasToShow.value.economia)}
              </strong>{" "}
              pagando em dia)
            </p>
          </div>

          <p class="text-[14px] font-base text-white my-4 px-5">
            <strong>
              {ofertasToShow.value.cidade} - {ofertasToShow.value.estado}
            </strong>
          </p>
          <p class="text-[14px] font-base text-white my-4 px-5">
            {ofertasToShow.value.telefone}
          </p>
          <p class="text-[14px] font-base text-white my-4 px-5">
            {ofertasToShow.value.endereco}, {ofertasToShow.value.numero}{" "}
            {ofertasToShow.value.complemento} - {ofertasToShow.value.bairro}
          </p>
          <button
            onClick={() => {
              window.location.href =
                `/etapa-selecao?ecur_codi=${ofertasToShow.value.codigo}&epol_codi=${ofertasToShow.value.codigo_polo}`;
            }}
            class="block w-full py-3 px-6 text-2xl font-bold text-center bg-[#ffdd00] color-[#3a3b39] uppercase border border-[#ffdd00] rounded-[6px]"
          >
            Inscreva-se
          </button>
        </div>
        <p class="text-[12px] font-base text-white my-4 px-5 pb-4">
          {ofertasToShow.value.descricao}
        </p>
      </div>
    </div>
  );

  return mostrarOfertas.value ? etapa2 : etapa1;
};

export default Oferta;
