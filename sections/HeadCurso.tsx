interface Props {
    // image?: ImageWidget;
    curso?: string;
    tipo_curso?: string;
    semestre?: string;
    /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
    text_4?: string;
    /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
    text_5?: string;
    /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
    text_6?: string;
    /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
    text_7?: string;
    /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
    text_8?: string;
    /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
    text_9?: string;
    /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
    text_10?: string;
  }

function HeadCurso({
    // image =
    // "",
    curso = "Made with",
    tipo_curso = "Made with",
    semestre = "Made with",
    text_4 = "Made with",
    text_5 = "Made with",
    text_6 = "Made with",
    text_7 = "Made with",
    text_8 = "Made with",
    text_9 = "Made with",
    text_10 = "Made with",
  }: Props) {
    return (
        <section class="bg-[#e6e7e6]">
            <div class="container px-[1rem] pt-[64px] pb-[50px]">
                <div class=" mt-[100px]">
                    <div class="breadcrumb flex text-grey mb-8">
                        <a href="" class="text-xl">Uniasselvi</a>
                        <p class="px-5">></p>
                        <a href="" class="text-xl">Graduação</a>
                        <p class="px-5">></p>
                    </div>
                    <h1 class="text-4xl text-black font-bold mb-6">{curso}</h1>
                </div>
                <div class="flex flex-col md:flex-row gap-[24px]">
                    
                    <div class="basis-full md:basis-1/2 md:order-2">
                        
                        <iframe class="aspect-video mb-10" width="100%" src="https://www.youtube.com/embed/qAGTbTVwHSQ?si=SqbLqN5qhN1F08aq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        <div id="card" class="bg-[#3a3b39] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-[16px] z-10">
                            <ul class="steps bg-[#30312f] w-full rounded-t-[16px] py-5 px-10">
                                <li class="step step-warning"><p class="text-xs text-white">Selecione o curso</p></li>
                                <li class="step step-warning"><p class="text-xs text-white">Selecione sua localidade</p></li>
                                <li class="step"><p class="text-xs text-white">Confira a melhor oferta</p></li>
                                <li class="step"><p class="text-xs text-white">Inscreva-se</p></li>
                            </ul>
                            <p class="text-4xl font-bold text-[#ffdd00]">Seu caminho para o sucesso começa aqui</p>
                            <p class="text-2xl font-base text-white my-4">Selecione o <strong>Estado</strong> a <strong>Cidade</strong> e a <strong>Unidade</strong> em que deseja iniciar sua jornada.</p>
                            <div class="grid grid-cols-2 gap-[15px]">
                                <div class="grid gap-[7px]">
                                    <label for="" class="text-xl text-white">Estado</label>
                                    <select name="" id="" class="bg-white border border-black rounded-md text-xl py-2 px-4">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="grid gap-[7px]">
                                    <label for="" class="text-xl text-white">Cidade</label>
                                    <select name="" id="" class="bg-white border border-black rounded-md text-xl py-2 px-4">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-span-2 grid gap-[7px]">
                                    <label for="" class="text-xl text-white">Unidade/Polo</label>
                                    <select name="" id="" class="bg-white border border-black rounded-md text-xl py-2 px-4">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-span-2">
                                    <button class="block w-full py-3 px-6 text-2xl font-bold text-center text-[#ffdd00] uppercase border border-[#ffdd00] rounded-[6px]">Confira nossas ofertas</button>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
                <div class="basis-full md:basis-1/2 md:order-1">
                    <div class="flex gap-[12px] mb-6">
                        <p class="text-black text-2xl italic">{tipo_curso}</p>
                        <div class="relative">
                            <div class="bg-[url('/img-1/conceito.png')] bg-cover w-[90px] h-[33px]"></div>
                            <p class="absolute top-[50%] translate-y-[-50%] left-[12px] text-white font-semibold">4</p>
                        </div>
                    </div>
                    <p class="text-2xl text-black font-bold">Duração: <span class="font-semibold">{semestre} semestres</span></p>
                    <div class="flex gap-[12px] mt-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="35px" viewBox="0 0 35 29.92">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path class="cls-1" d="M7,4H29.76V26.44H7Z" fill="transparent" stroke="#2d2e2d" stroke-width="2px"/>
                                        <path class="cls-2" d="M3.74,12.32c3.39,2.87,8.32,7.26,8.32,7.26S23.42,6.36,34.17,0L35,2.22c-3.9,2.45-15.71,15.84-20.33,27.7,0,0-12.32-12-14.66-14.75l3.74-2.85h0Z" fill="#00a59a"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {/* <p class="text-2xl text-black font-semibold">{text_4}</p> */}
                        <div class="text-2xl text-black font-semibold" dangerouslySetInnerHTML={{
                            __html: text_4,
                        }}></div>
                    </div>
                    <div class="flex gap-[12px] mt-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="35px" viewBox="0 0 35 29.92">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path class="cls-1" d="M7,4H29.76V26.44H7Z" fill="transparent" stroke="#2d2e2d" stroke-width="2px"/>
                                        <path class="cls-2" d="M3.74,12.32c3.39,2.87,8.32,7.26,8.32,7.26S23.42,6.36,34.17,0L35,2.22c-3.9,2.45-15.71,15.84-20.33,27.7,0,0-12.32-12-14.66-14.75l3.74-2.85h0Z" fill="#00a59a"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {/* <p class="text-2xl text-black font-semibold">{text_5}</p> */}
                        <div class="text-2xl text-black font-semibold" dangerouslySetInnerHTML={{
                            __html: text_5,
                        }}></div>
                    </div>
                    <div class="flex gap-[12px] mt-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="35px" viewBox="0 0 35 29.92">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path class="cls-1" d="M7,4H29.76V26.44H7Z" fill="transparent" stroke="#2d2e2d" stroke-width="2px"/>
                                        <path class="cls-2" d="M3.74,12.32c3.39,2.87,8.32,7.26,8.32,7.26S23.42,6.36,34.17,0L35,2.22c-3.9,2.45-15.71,15.84-20.33,27.7,0,0-12.32-12-14.66-14.75l3.74-2.85h0Z" fill="#00a59a"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {/* <p class="text-2xl text-black font-semibold">{text_6}</p> */}
                        <div class="text-2xl text-black font-semibold" dangerouslySetInnerHTML={{
                            __html: text_6,
                        }}></div>
                    </div>
                    <div class="flex gap-[12px] mt-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="35px" viewBox="0 0 35 29.92">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path class="cls-1" d="M7,4H29.76V26.44H7Z" fill="transparent" stroke="#2d2e2d" stroke-width="2px"/>
                                        <path class="cls-2" d="M3.74,12.32c3.39,2.87,8.32,7.26,8.32,7.26S23.42,6.36,34.17,0L35,2.22c-3.9,2.45-15.71,15.84-20.33,27.7,0,0-12.32-12-14.66-14.75l3.74-2.85h0Z" fill="#00a59a"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {/* <p class="text-2xl text-black font-semibold">{text_7}</p> */}
                        <div class="text-2xl text-black font-semibold" dangerouslySetInnerHTML={{
                            __html: text_7,
                        }}></div>
                    </div>
                    <div class="flex gap-[12px] mt-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="35px" viewBox="0 0 35 29.92">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path class="cls-1" d="M7,4H29.76V26.44H7Z" fill="transparent" stroke="#2d2e2d" stroke-width="2px"/>
                                        <path class="cls-2" d="M3.74,12.32c3.39,2.87,8.32,7.26,8.32,7.26S23.42,6.36,34.17,0L35,2.22c-3.9,2.45-15.71,15.84-20.33,27.7,0,0-12.32-12-14.66-14.75l3.74-2.85h0Z" fill="#00a59a"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {/* <p class="text-2xl text-black font-semibold">{text_8}</p> */}
                        <div class="text-2xl text-black font-semibold" dangerouslySetInnerHTML={{
                            __html: text_8,
                        }}></div>
                    </div>
                    <div class="flex gap-[12px] mt-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="35px" viewBox="0 0 35 29.92">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path class="cls-1" d="M7,4H29.76V26.44H7Z" fill="transparent" stroke="#2d2e2d" stroke-width="2px"/>
                                        <path class="cls-2" d="M3.74,12.32c3.39,2.87,8.32,7.26,8.32,7.26S23.42,6.36,34.17,0L35,2.22c-3.9,2.45-15.71,15.84-20.33,27.7,0,0-12.32-12-14.66-14.75l3.74-2.85h0Z" fill="#00a59a"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {/* <p class="text-2xl text-black font-semibold">{text_9}</p> */}
                        <div class="text-2xl text-black font-semibold" dangerouslySetInnerHTML={{
                            __html: text_9,
                        }}></div>
                    </div>
                    <div class="flex gap-[12px] mt-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="35px" viewBox="0 0 35 29.92">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path class="cls-1" d="M7,4H29.76V26.44H7Z" fill="transparent" stroke="#2d2e2d" stroke-width="2px"/>
                                        <path class="cls-2" d="M3.74,12.32c3.39,2.87,8.32,7.26,8.32,7.26S23.42,6.36,34.17,0L35,2.22c-3.9,2.45-15.71,15.84-20.33,27.7,0,0-12.32-12-14.66-14.75l3.74-2.85h0Z" fill="#00a59a"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {/* <p class="text-2xl text-black font-semibold">{text_10}</p> */}
                        <div class="text-2xl text-black font-semibold" dangerouslySetInnerHTML={{
                            __html: text_10,
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeadCurso;