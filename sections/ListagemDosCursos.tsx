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

function ListagemDosCursos({
  image = "",
  text_1 = "Made with",
  text_2 = "Made with",
}: Props) {
  return (
    <section class="bg-white">
      <div class="container px-[1rem] py-10">
        <ul
          class="border border-[#0000001a] group"
          role="tablist"
          aria-multiselectable="true"
        >
          <li>
            <a
              href=""
              class="flex justify-between items-center py-3 px-5 group-hover:opacity-50  text-lg text-black font-bold hover:bg-[#fd0] group-hover:hover:opacity-100 duration-300"
            >
              Farmácia
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="19"
                viewBox="0 0 320 512"
              >
                <path
                  fill="#808080"
                  d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href=""
              class="flex justify-between items-center py-3 px-5 group-hover:opacity-50  text-lg text-black font-bold hover:bg-[#fd0] group-hover:hover:opacity-100 duration-300"
            >
              Enfermagem
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="19"
                viewBox="0 0 320 512"
              >
                <path
                  fill="#808080"
                  d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ListagemDosCursos;
