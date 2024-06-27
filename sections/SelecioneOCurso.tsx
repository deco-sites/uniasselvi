import { type Curso } from "site/apps/types.ts";
import { useSignal } from "@preact/signals";
import Icon from "site/components/ui/Icon.tsx";
import { JSX } from "preact/jsx-runtime";

function Select(props: JSX.IntrinsicElements["select"]) {
  return (
    <select
      {...props}
      class="bg-white border border-[#aaa] rounded-md text-xl py-2 px-4"
    />
  );
}

function WithLabel(
  { children, id, label }: {
    children: JSX.Element;
    id: string;
    label: string;
  },
) {
  return (
    <div class="grid flex-1 gap-2">
      <label for={id} class="text-xl text-black">
        {label}
      </label>
      {children}
    </div>
  );
}

export function LoadingFallback() {
  const SelectSkeleton = () => (
    <div class="animate-pulse bg-gray-200 rounded-md text-xl h-10 px-4">
    </div>
  );

  const TitleSkeleton = () => (
    <div class="animate-pulse bg-gray-200 rounded-full text-xl min-w-96 h-8 px-4">
    </div>
  );

  return (
    <section class="bg-white pt-16 md:pt-0">
      <div class="container px-4 py-10">
        <div class="flex gap-2">
          <div class="">
            <Icon id="ArrowRight" size={30} />
          </div>
          <TitleSkeleton />
          <h2 class="text-lg font-semibold text-black"></h2>
        </div>
        <div class="flex justify-center">
          <div class="basis-full md:basis-8/12 flex flex-col md:flex-row gap-5 mt-10">
            <WithLabel id="curso" label="Curso de interesse">
              <SelectSkeleton />
            </WithLabel>
            <WithLabel id="modalidade" label="Modalidade">
              <SelectSkeleton />
            </WithLabel>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Props {
  /**
   * @title Cursos
   * @description Loader trazendo Lista de cursos disponíveis para seleção
   */
  cursos: Curso[];

  /**
   * @title Título
   */
  title?: string;

  /**
   * @title Label do select vazio
   * @description Label do select vazio quando nenhum curso está selecionado
   */
  emptySelectLabel?: string;
}

export default function SelecioneOCurso({
  cursos,
  title = "Selecione o curso de Graduação que deseja para saber mais",
  emptySelectLabel = "- Selecione -",
}: Props) {
  const cursoSelecionado = useSignal<string>("");
  const modalidadeSelecionada = useSignal<string>("");

  const handleChangeRedirect = () => {
    if (
      cursoSelecionado.value &&
      modalidadeSelecionada.value
    ) {
      window.location.href = `/curso?curso=${cursoSelecionado.value}`;
    }
  };

  return (
    <section class="bg-white pt-16 md:pt-0">
      <div class="container px-4 py-10">
        <div class="flex gap-2">
          <div class="">
            <Icon id="ArrowRight" size={30} />
          </div>
          <h2 class="text-lg font-semibold text-black">{title}</h2>
        </div>
        <div class="flex justify-center">
          <div class="basis-full md:basis-8/12 flex flex-col md:flex-row gap-5 mt-10">
            <WithLabel id="curso" label="Curso de interesse">
              <Select
                onChange={(e) => {
                  cursoSelecionado.value = e.currentTarget.value;
                  handleChangeRedirect();
                }}
              >
                <option value="">{emptySelectLabel}</option>
                {cursos.map((curso) => (
                  <option value={curso.ecur_nome}>
                    {curso.ecur_nome}
                  </option>
                ))}
              </Select>
            </WithLabel>
            <WithLabel id="modalidade" label="Modalidade">
              <Select
                onChange={(e) => {
                  modalidadeSelecionada.value = e.currentTarget.value;
                  handleChangeRedirect();
                }}
              >
                <option value="">{emptySelectLabel}</option>
                <option value="ead">EAD</option>
              </Select>
            </WithLabel>
          </div>
        </div>
      </div>
    </section>
  );
}
