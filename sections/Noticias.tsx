import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image?: ImageWidget;
  alt?: string;
}

function Noticias({
  image = "",
  alt = "",
}: Props) {
  return (
    <section class="bg-white">
      <div class="container px-[1rem] py-10">
        <h2 class="text-xl md:text-3xl font-bold text-black mb-6">
          Fique por dentro das novidades
        </h2>
        <div class="flex gap-4 overflow-x-auto md:overflow-x-visible md:grid md:grid-cols-2 lg:grid-cols-4">
          <a
            href=""
            class="relative block bg-[#F4F4F4] overflow-hidden shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.19)] min-w-[250px] md:min-w-full"
          >
            <p class="absolute z-10 top-[10px] left-[10px] py-1 px-4 rounded-full bg-[#FCAF17] text-white">
              Notícia
            </p>
            <img src="/noticia-1.png" alt="" />
            <div class="p-4">
              <p class="text-sm text-black">11/06/2024</p>
              <p class="text-md text-black py-3">
                Áreas de Educação, Saúde e Tecnologia ganham novos cursos de
                Pós-grad...
              </p>
              <div class="flex items-center gap-5">
                <p class="text-md text-black font-bold">Acessar notícia</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27px"
                  height="22px"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </div>
          </a>
          <a
            href=""
            class="relative block bg-[#F4F4F4] overflow-hidden shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.19)] min-w-[250px] md:min-w-full"
          >
            <p class="absolute z-10 top-[10px] left-[10px] py-1 px-4 rounded-full bg-[#FCAF17] text-white">
              Notícia
            </p>
            <img src="/noticia-1.png" alt="" />
            <div class="p-4">
              <p class="text-sm text-black">11/06/2024</p>
              <p class="text-md text-black py-3">
                Áreas de Educação, Saúde e Tecnologia ganham novos cursos de
                Pós-grad...
              </p>
              <div class="flex items-center gap-5">
                <p class="text-md text-black font-bold">Acessar notícia</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27px"
                  height="22px"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </div>
          </a>
          <a
            href=""
            class="relative block bg-[#F4F4F4] overflow-hidden shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.19)] min-w-[250px] md:min-w-full"
          >
            <p class="absolute z-10 top-[10px] left-[10px] py-1 px-4 rounded-full bg-[#FCAF17] text-white">
              Notícia
            </p>
            <img src="/noticia-1.png" alt="" />
            <div class="p-4">
              <p class="text-sm text-black">11/06/2024</p>
              <p class="text-md text-black py-3">
                Áreas de Educação, Saúde e Tecnologia ganham novos cursos de
                Pós-grad...
              </p>
              <div class="flex items-center gap-5">
                <p class="text-md text-black font-bold">Acessar notícia</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27px"
                  height="22px"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </div>
          </a>
          <a
            href=""
            class="relative block bg-[#F4F4F4] overflow-hidden shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.19)] min-w-[250px] md:min-w-full"
          >
            <p class="absolute z-10 top-[10px] left-[10px] py-1 px-4 rounded-full bg-[#FCAF17] text-white">
              Notícia
            </p>
            <img src="/noticia-1.png" alt="" />
            <div class="p-4">
              <p class="text-sm text-black">11/06/2024</p>
              <p class="text-md text-black py-3">
                Áreas de Educação, Saúde e Tecnologia ganham novos cursos de
                Pós-grad...
              </p>
              <div class="flex items-center gap-5">
                <p class="text-md text-black font-bold">Acessar notícia</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27px"
                  height="22px"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Noticias;
