interface Props {
    // image?: ImageWidget;
    /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
    text_1?: string;
    text_2?: string;
  }

function GradeCurricular({
    image =
    "",
    text_1 = "Made with",
    text_2 = "Made with",
  }: Props) {
    return (
        <section class="bg-white py-[50px] relative">
            <div class="container px-[1rem]">
                <div class="flex gap-[24px]">
                    <div class="basis-full md:basis-1/2">
                        <div class="bg-[#ebebeb] rounded-[3px] shadow-[0_3px_10px_rgba(65,65,65,.25)]">
                            <div class="flex">
                                <div class="flex-1 text-center py-3 px-2">
                                    <p class="text-black font-base text-xl">Mercado de Trabalho</p>
                                </div>
                                <button class="flex-1 text-center py-3 px-2 bg-gradient-to-b from-[#d5d5d5] to-[#b9b9b9] text-black font-base text-xl" onclick={()=>document.getElementById('my_modal_2').showModal()}>Grade Curricular</button>
                            </div>
                            
                            <dialog id="my_modal_2" class="modal">
                                <div class="modal-box bg-white rounded-md">
                                    <form method="dialog">
                                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 class="font-bold text-2xl text-black">Grade Curricular</h3>
                                    <div class="py-4">
                                        <p class="text-lg text-black font-bold">1° Semestre</p>
                                    </div>
                                </div>
                                <form method="dialog" class="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                            <div class="py-[70px] px-[40px]">
                                {/* <p class="text-lg text-black font">O curso tecnólogo em Marketing, na modalidade EAD, tem como objetivo formar profissionais capacitados para atuar como responsáveis pela elaboração de estratégias comerciais que promovam o crescimento das empresas, desenvolvendo produtos e/ou serviços que atendam ao mercado consumidor. O profissional, ao cursar Marketing, poderá atuar na gestão de marketing de empresas de publicidade e propaganda, de instituições de ensino superior, de indústrias, de vestuário, de alimentos e bebidas entre outras organizações voltadas ao aprimoramento conceitual e comercial de bens e serviços.</p> */}
                                {/* <p class="text-lg text-black font">{text_1}</p> */}
                                <div class="text-lg text-black" dangerouslySetInnerHTML={{
                                    __html: text_1,
                                }}></div>
                            </div>
                            <hr class="mx-[40px] border-black" />
                            <div class="py-[70px] px-[40px]">
                                <p class="text-3xl text-black font-bold">Inscreva-se agora e dê o primeiro passo em direção aos seus sonhos.</p>
                                <div class="flex items-center gap-[20px] mt-10">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="44px" width="50px" viewBox="0 0 49.99 43.02">
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="Layer_1-2" data-name="Layer 1">
                                                    <path fill="#00a499" d="M5.35,17.71c4.84,4.13,11.89,10.44,11.89,10.44S33.46,9.15,48.81,0L50,3.19C44.42,6.71,27.55,26,20.95,43c0,0-17.6-17.27-20.95-21.21l5.35-4.1Z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <p class="text-2xl font-base text-black">Resolução de Autorização nº 023-I/2010</p>
                                </div>
                                <div class="flex items-center gap-[20px] mt-10">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="44px" width="50px" viewBox="0 0 49.99 43.02">
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="Layer_1-2" data-name="Layer 1">
                                                    <path fill="#00a499" d="M5.35,17.71c4.84,4.13,11.89,10.44,11.89,10.44S33.46,9.15,48.81,0L50,3.19C44.42,6.71,27.55,26,20.95,43c0,0-17.6-17.27-20.95-21.21l5.35-4.1Z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <p class="text-2xl font-base text-black"><strong>Mesma validade e peso</strong> que uma graduação presencial</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GradeCurricular;