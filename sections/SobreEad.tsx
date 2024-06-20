import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    image?: ImageWidget;
    /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
    text_1?: string;
    text_2?: string;
  }
  
  function Sobre({
    image =
    "",
    text_1 = "Made with",
    text_2 = "Made with",
  }: Props) {
    return (
        <section class="relative overflow-hidden px-[1rem]">
            <div class="min-h-full min-w-full aspect-video absolute top-0 left-[50%] translate-x-[-50%]">
                {/* <img src="/img-1/about.jpg" class="block min-w-full h-full opacity-90 bg-center" alt="" /> */}
                {image && (
                    <Image
                        class="block min-w-full h-full opacity-90 bg-center"
                        src={image || ""}
                        // alt={alt || ""}
                        // height={height || 54}
                        // width={width || 220}
                    />
                )}
            </div>
            <div class="absolute top-0 w-full h-full h-full flex flex-col lg:flex-row container gap-[24px] relative py-10">
                <div class="basis-full lg:basis-1/2">
                    {/* <p class="text-4xl text-white font-semibold mb-10">Sobre o EAD de <span class="font-bold">Marketing</span> da UNIASSELVI:</p> */}
                    {/* <div class="text-4xl text-white font-semibold mb-10" dangerouslySetInnerHTML={{
                        __html: text_1,
                        }}></div> */}
                    <div class="text-4xl text-white font-semibold mb-10" dangerouslySetInnerHTML={{
                        __html: text_1,
                    }}></div>
                    {/* <p class="text-white text-lg">O curso tecnólogo a distância de Marketing - EAD visa formar profissionais capacitados para definir o diagnóstico organizacional de uma instituição, identificando os impactos da cultura e do cenário empresarial com amplitude de visão econômica do mercado a fim de traçar um planejamento estratégico. O curso tecnólogo EAD em Marketing fornece ferramentas necessárias para que o profissional defina planos de posicionamento de produtos/serviços, bem como atue no processo produtivo e no fluxograma de atividades organizacionais, definindo as práticas mais eficazes para a eficiência na gestão de processos. Entre os diferenciais do curso está a flexibilidade oferecida pela modalidade a distância. No curso EAD, o aluno poderá contar com estudos online e encontros presenciais uma vez por semana. Além disso, o curso possui professores e tutores capacitados e matriz curricular atualizada.</p> */}
                    <p class="text-white text-lg">{text_2}</p>
                </div>
                <div class="basis-full lg:basis-1/2">
                </div>
            </div>
        </section>
    );
}

export default Sobre;