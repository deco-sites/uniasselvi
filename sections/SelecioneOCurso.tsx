import { type Curso } from "site/apps/types.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useSignal } from "@preact/signals";
import Icon from "site/components/ui/Icon.tsx";

export function LoadingFallback() {
    const SelectSkeleton = () => (
        <div class="skeleton rounded-md text-xl h-[40px] px-4"></div>
    );
}

interface Props {
    cursos: Curso[];
    image?: ImageWidget;
    /**
     * @format rich-text
     * @description The description of name.
     * @default It Works!
     */
    text_1?: string;
    text_2?: string;
}

export default function SelecioneOCurso({
    cursos,
    image = "",
    text_1 = "Made with",
    text_2 = "Made with",
}: Props) {
    const cursoSelecionado = useSignal<string>("");
    const modalidadeSelecionada = useSignal<string>("");

    return (
        <section class="bg-white pt-16 md:pt-0">
            <div class="container px-[1rem] py-10">
                <div class="flex gap-2">
                    <div class="">
                        <Icon id="ArrowRight" size={30} />
                    </div>
                    <h2 class="text-lg font-semibold text-black">
                        Selecione o curso de Graduação que deseja para saber
                        mais
                    </h2>
                </div>
                <div class="flex justify-center">
                    <div class="basis-full md:basis-8/12 flex flex-col md:flex-row gap-5 mt-10">
                        <div class="grid flex-1 gap-[7px]">
                            <label for="" class="text-xl text-black">
                                Curso de interesse
                            </label>
                            <select
                                onChange={(e) => {
                                    cursoSelecionado.value =
                                        e.currentTarget.value;

                                    if (
                                        cursoSelecionado.value &&
                                        modalidadeSelecionada.value
                                    ) {
                                        window.location.href =
                                            `/curso?curso=${cursoSelecionado.value}`;
                                    }
                                }}
                                class="bg-white border border-[#aaa] rounded-md text-xl py-2 px-4"
                            >
                                <option value="">- Selecione -</option>
                                {cursos.map((curso) => (
                                    <option value={curso.ecur_nome}>
                                        {curso.ecur_nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="grid flex-1 gap-[7px]">
                            <label for="" class="text-xl text-black">
                                Modalidade
                            </label>
                            <select
                                onChange={(e) => {
                                    modalidadeSelecionada.value =
                                        e.currentTarget.value;

                                    if (
                                        cursoSelecionado.value &&
                                        modalidadeSelecionada.value
                                    ) {
                                        window.location.href =
                                            `/curso?curso=${cursoSelecionado.value}`;
                                    }
                                }}
                                class="bg-white border border-[#aaa] rounded-md text-xl py-2 px-4"
                            >
                                <option value="">- Selecione -</option>
                                <option value="ead">EAD</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
