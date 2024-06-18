import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    image?: ImageWidget;
    alt?: string;
  }
  
  function CursosMaisProcurados({
    image =
    "",
    alt = "",
  }: Props) {
    return (
        <section class="bg-white pt-[64px]">
            <div class="container px-[1rem] py-8">
                <h2 class="text-3xl font-bold text-black mb-4">Cursos mais procurados</h2>
                <p class="text-md font-base text-black mb-8">Descubra o curso ideal para você</p>
                <div class="flex justify-between items-center mb-8 gap-4">
                    <div class="flex gap-4 overflow-auto">
                        <p class="border border-[#00a59a] py-1 px-4 rounded-full text-white bg-[#00a59a] font-bold whitespace-nowrap">Graduação</p>
                        <p class="border border-[#00a59a] py-1 px-4 rounded-full text-[#00a59a] font-bold whitespace-nowrap">Pós-Graduação</p>
                        <p class="border border-[#00a59a] py-1 px-4 rounded-full text-[#00a59a] font-bold whitespace-nowrap">Técnico/Profissionalizantes</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <p class="text-lg text-[#00a59a] font-bold whitespace-nowrap">Ver mais cursos</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="#00a59a" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                    </div>
                </div>

                {/* <!-- Swiper --> */}
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div class="relative rounded-md h-[350px] flex flex-wrap content-between flex-row overflow-hidden bg-no-repeat bg-center hover:scale-y-[106%] group hover:scale-x-[105%] hover:border border-black duration-300">
                        <div>
                            <img src="/pedagogia.webp" class="block w-full rounded-md object-cover absolute h-full brightness-[0.68]" alt="" />
                            <p class="z-10 bg-[#fd0] text-black py-1 px-2 rounded-full mt-5 ml-5 text-xs font-bold z-10 relative">Profissionalizante</p>
                        </div>
                        <div class="flex justify-between items-end flex-[0_0_100%] p-5 z-10 shadow-[inset_0_0px_0_0px_rgba(0,_0,_0,_0.5)] group-hover:shadow-[inset_0_-180px_0_-1px_rgba(0,_0,_0,_0.7)] duration-300">
                            <div class="flex-1 text-white">
                                <p class="text-xs">Profissionalizante</p>
                                <p class="text-md font-bold">Profissionalizante em Auxiliar Administrativo</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 512 512"><path fill="#ffffff" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="relative rounded-md h-[350px] flex flex-wrap content-between flex-row overflow-hidden bg-no-repeat bg-center hover:scale-y-[106%] group hover:scale-x-[105%] hover:border border-black duration-300">
                        <div>
                            <img src="/pedagogia.webp" class="block w-full rounded-md object-cover absolute h-full brightness-[0.68]" alt="" />
                            <p class="z-10 bg-[#fd0] text-black py-1 px-2 rounded-full mt-5 ml-5 text-xs font-bold z-10 relative">Profissionalizante</p>
                        </div>
                        <div class="flex justify-between items-end flex-[0_0_100%] p-5 z-10 shadow-[inset_0_0px_0_0px_rgba(0,_0,_0,_0.5)] group-hover:shadow-[inset_0_-180px_0_-1px_rgba(0,_0,_0,_0.7)] duration-300">
                            <div class="flex-1 text-white">
                                <p class="text-xs">Profissionalizante</p>
                                <p class="text-md font-bold">Profissionalizante em Auxiliar Administrativo</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 512 512"><path fill="#ffffff" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="relative rounded-md h-[350px] flex flex-wrap content-between flex-row overflow-hidden bg-no-repeat bg-center hover:scale-y-[106%] group hover:scale-x-[105%] hover:border border-black duration-300">
                        <div>
                            <img src="/pedagogia.webp" class="block w-full rounded-md object-cover absolute h-full brightness-[0.68]" alt="" />
                            <p class="z-10 bg-[#fd0] text-black py-1 px-2 rounded-full mt-5 ml-5 text-xs font-bold z-10 relative">Profissionalizante</p>
                        </div>
                        <div class="flex justify-between items-end flex-[0_0_100%] p-5 z-10 shadow-[inset_0_0px_0_0px_rgba(0,_0,_0,_0.5)] group-hover:shadow-[inset_0_-180px_0_-1px_rgba(0,_0,_0,_0.7)] duration-300">
                            <div class="flex-1 text-white">
                                <p class="text-xs">Profissionalizante</p>
                                <p class="text-md font-bold">Profissionalizante em Auxiliar Administrativo</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 512 512"><path fill="#ffffff" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="relative rounded-md h-[350px] flex flex-wrap content-between flex-row overflow-hidden bg-no-repeat bg-center hover:scale-y-[106%] group hover:scale-x-[105%] hover:border border-black duration-300">
                        <div>
                            <img src="/pedagogia.webp" class="block w-full rounded-md object-cover absolute h-full brightness-[0.68]" alt="" />
                            <p class="z-10 bg-[#fd0] text-black py-1 px-2 rounded-full mt-5 ml-5 text-xs font-bold z-10 relative">Profissionalizante</p>
                        </div>
                        <div class="flex justify-between items-end flex-[0_0_100%] p-5 z-10 shadow-[inset_0_0px_0_0px_rgba(0,_0,_0,_0.5)] group-hover:shadow-[inset_0_-180px_0_-1px_rgba(0,_0,_0,_0.7)] duration-300">
                            <div class="flex-1 text-white">
                                <p class="text-xs">Profissionalizante</p>
                                <p class="text-md font-bold">Profissionalizante em Auxiliar Administrativo</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 512 512"><path fill="#ffffff" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CursosMaisProcurados;