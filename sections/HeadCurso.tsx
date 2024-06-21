// import React, { useEffect, useRef } from 'react';
import { type Curso } from "site/apps/types.ts";
import Oferta from "../islands/Oferta.tsx";

interface Props {
    // image?: ImageWidget;
    cursos: Curso[];
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

export default function HeadCurso({
    cursos,
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

    console.log(cursos.length)

    return (
        <section class="bg-[#e6e7e6]">
            <div class="container px-[1rem] pt-[64px] pb-[50px]">
                <div class=" mt-[100px]">
                    <div class="breadcrumb flex text-grey mb-8">
                        <a href="" class="text-xl">Uniasselvi</a>
                        <p class="px-5">&gt;</p>
                        <a href="" class="text-xl">Graduação</a>
                        <p class="px-5">&gt;</p>
                    </div>
                    <h1 class="text-4xl text-black font-bold mb-6">{curso}</h1>
                </div>
                <div class="flex flex-col md:flex-row gap-[24px]">

                    <Oferta cursos={cursos} />

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
                            <div class="text-2xl text-black font-base" dangerouslySetInnerHTML={{
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
                            <div class="text-2xl text-black font-base" dangerouslySetInnerHTML={{
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
                            <div class="text-2xl text-black font-base" dangerouslySetInnerHTML={{
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
                            <div class="text-2xl text-black font-base" dangerouslySetInnerHTML={{
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
                            <div class="text-2xl text-black font-base" dangerouslySetInnerHTML={{
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
                            <div class="text-2xl text-black font-base" dangerouslySetInnerHTML={{
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
                            <div class="text-2xl text-black font-base" dangerouslySetInnerHTML={{
                                __html: text_10,
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <div>Aqui</div>
    );
}