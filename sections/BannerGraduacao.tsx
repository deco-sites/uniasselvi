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

function BannerGraduacao({
  image = "",
  text_1 = "Made with",
  text_2 = "Made with",
}: Props) {
  return (
    <section class="bg-[#fd0] hidden md:block">
      <div class="container px-[1rem] pt-[64px]">
        <div class="flex flex-col md:flex-row gap-5 py-10">
          <div class="basis-1/2">
            <h2 class="text-3xl text-black font-bold ">
              NÃO DEIXE NADA ATRAPALHAR<br />O SEU FUTURO
            </h2>
            <h3 class="text-lg text-black font-semibold">Seleção UNIASSELVI</h3>
          </div>
          <div class="basis-1/2">
            <h2 class="text-xl text-black font-bold ">
              ESTUDO GARANTIDO: caso você perca o emprego no início do curso, as
              mensalidades do primeiro semestre serão por conta da UNIASSELVI.
            </h2>
            <h3 class="text-xl text-black font-bold">
              Estude em casa ou no polo com tutor exclusivo por turma.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerGraduacao;
