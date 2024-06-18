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
  
  function SelecioneOCurso({
    image =
    "",
    text_1 = "Made with",
    text_2 = "Made with",
  }: Props) {
    return (
        <section class="bg-white pt-[64px] md:pt-0">
            <div class="container px-[1rem] py-10">
                <div class="flex gap-2">
                    <div>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 49 49" style="enable-background:new 0 0 49 49;" xml:space="preserve"><path class="st0" fill="#00A59A" d="M24.5,0C11,0,0,11,0,24.5S11,49,24.5,49C38,49,49,38,49,24.5C49,11,38,0,24.5,0z M38.5,25.7C38.5,25.8,38.5,25.8,38.5,25.7L25.3,38c-0.7,0.7-1.8,0.7-2.5,0s-0.7-1.8,0-2.5c0,0,0.1-0.1,0.1-0.1l9.7-9H12.1c-1,0.1-1.8-0.7-1.9-1.7c-0.1-1,0.7-1.8,1.7-1.9c0.1,0,0.1,0,0.2,0h20.5l-9.7-9c-0.7-0.7-0.8-1.8-0.1-2.5l0,0c0.7-0.7,1.8-0.8,2.5-0.1l13.1,12.2C39.1,23.9,39.2,25,38.5,25.7z"/></svg>
                    </div>
                    <h2 class="text-lg font-semibold text-black">Selecione o curso de Graduação que deseja para saber mais</h2>
                </div>
                <div class="flex justify-center">
                    <div class="basis-full md:basis-8/12 flex flex-col md:flex-row gap-5 mt-10">
                        <div class="grid flex-1 gap-[7px]">
                            <label for="" class="text-xl text-black">Curso de interesse</label>
                            <select name="" id="" class="bg-white border border-[#aaa] rounded-md text-xl py-2 px-4">
                                <option value=""></option>
                            </select>
                        </div>
                        <div class="grid flex-1 gap-[7px]">
                            <label for="" class="text-xl text-black">Modalidade</label>
                            <select name="" id="" class="bg-white border border-[#aaa] rounded-md text-xl py-2 px-4">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SelecioneOCurso;