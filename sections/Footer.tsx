// import React, { useEffect, useState } from 'react';

interface Props {
  text?: string;
}

function Footer({
  text = "Made with",
}: Props) {
  return (
    <div>
        <footer class="bg-[#f6f6f6] border-t border-[#0000001a] py-10 text-[#606060] hidden lg:block">
            <div class="container mx-0 md:mx-auto w-full md:w-auto">
                <div class="flex flex-wrap md:gap-[15px]">
                    <div class="flex-[1_1_auto] w-full md:w-auto md:max-w-[260px]">
                        <h4 class="text-2xl font-bold p-0">Institucional</h4>
                        <ul class="px-3 md:px-0">
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Conheça a UNIASSELVI</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Unidades e polos</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Canal de Ética</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Ouvidoria</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Notícias</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Política de Privacidade</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Press releases</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Publicações legais</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Regulamentos</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Trabalhe conosco</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Seja nosso parceiro</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Núcleos de atendimento</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Portal da Extensão</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Editora UNIASSELVI</a></li>
                        </ul>
                    </div>
                      
                    <div class="flex-[1_1_auto] w-full md:w-auto md:max-w-[260px]">
                        <h4 class="text-2xl font-bold p-0">Graduação</h4>
                        <ul class="px-3 md:px-0">
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Cursos</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Inscreva-se</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Serviços</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Portal do aluno</a></li>
                            <li><h4 class="text-xl font-bold mt-3 px-3 md:px-0">Portal do candidato:</h4></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">EAD <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">Presencial <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                            <li><h4 class="text-xl font-bold mt-3 px-3 md:px-0">Resultados:</h4></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">EAD <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">Presencial <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                        </ul>
                    </div>
                    <div class="flex-[1_1_auto] w-full md:w-auto md:max-w-[260px]">
                        <h4 class="text-2xl font-bold p-0">Pós-graduação</h4>
                        <ul class="px-3 md:px-0">
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Cursos</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Inscreva-se</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Serviços</a></li>
                            <li><h4 class="text-xl font-bold mt-3 px-3 md:px-0">Portal do aluno:</h4></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">EAD</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Aluno Sala Virtual</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Presencial</a></li>
                            <li><h4 class="text-xl font-bold mt-3 px-3 md:px-0">Portal do candidato:</h4></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">EAD <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">Presencial <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                        </ul>
                        <h4 class="text-2xl font-bold p-0 mt-3">Egressos</h4>
                        <ul class="px-3 md:px-0">
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Portal do egresso</a></li>
                        </ul>
                    </div>
                    <div class="flex-[1_1_auto] w-full md:w-auto md:max-w-[260px]">
                        <h4 class="text-2xl font-bold p-0">Técnicos e Profissionalizantes</h4>
                        <ul class="px-3 md:px-0">
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Cursos</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Inscreva-se</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Portal do aluno</a></li>
                        </ul>
                        <h4 class="text-2xl font-bold p-0">Cursos livres</h4>
                        <ul class="px-3 md:px-0">
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Cursos</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Inscreva-se</a></li>
                            <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Portal do aluno</a></li>
                        </ul>
                        <img src="/e-mec.png" class="hidden md:block w-full max-w-[200px] mt-3" alt="" />
                    </div>
                    <div class="flex-[1_1_auto] w-full md:w-auto md:max-w-[260px]">
                        <h4 class="text-2xl font-bold p-0">Contato</h4>
                        <div class="flex items-center gap-[12px] px-3 md:px-0">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 39 39"><path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path><path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path></svg>
                            </div>
                            <p class="text-md font-base">Formulário de contato</p>
                        </div>
                        
                        <h4 class="text-2xl font-bold p-0">Telefones</h4>
                        <ul class="grid grid-cols-2 px-3 md:px-0 gap-x-[10px]">
                            <li>
                                <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                    Pós EAD e Presencial <br />
                                    <strong>(47) 3301 6200</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                    Alunos EAD WhatsApp <br />
                                    <strong>(47) 3301 6100</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                    Blumenau/SC <br />
                                    <strong>0800 729 9009</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                    Brusque/SC <br />
                                    <strong>0800 729 9009</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                    Cuiabá/MT <br />
                                    <strong>0800 729 9009</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                    Guaramirim/SC <br />
                                    <strong>0800 729 9009</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                    Indaial/SC <br />
                                    <strong>0800 729 9009</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                    Rio do Sul/SC <br />
                                    <strong>0800 729 9009</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                    Rondonópolis/MT <br />
                                    <strong>0800 729 9009</strong>
                                </a>
                            </li>
                            <li class="last">
                                <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                    Timbó/SC <br />
                                    <strong>0800 729 9009</strong>
                                </a>
                            </li>					
                        </ul>
                    </div>
                </div>
                <div class="flex pt-10">
                    <div class="flex-1">
                        <p>UNIASSELVI © Todos os direitos reservados.</p>
                    </div>
                    <div class="flex items-center justify-end gap-[12px] flex-1">
                        <p>Redes sociais:</p>
                        <a href="https://www.facebook.com/uniasselvi/" target="_blank" class="social">
                            <svg style="display: block;" fill="#808080" width="24px" height="24px" viewBox="0 0 0.72 0.72" id="facebook" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M0.42 0.18h0.09a0.03 0.03 0 0 0 0.03 -0.03V0.09a0.03 0.03 0 0 0 -0.03 -0.03h-0.09a0.15 0.15 0 0 0 -0.15 0.15v0.09H0.21a0.03 0.03 0 0 0 -0.03 0.03v0.06a0.03 0.03 0 0 0 0.03 0.03h0.06v0.21a0.03 0.03 0 0 0 0.03 0.03h0.06a0.03 0.03 0 0 0 0.03 -0.03v-0.21h0.067a0.03 0.03 0 0 0 0.03 -0.023l0.015 -0.06a0.03 0.03 0 0 0 -0.03 -0.037H0.39V0.21a0.03 0.03 0 0 1 0.03 -0.03"></path></svg>
                        </a>
                        <a href="https://www.instagram.com/uniasselvioficial/" target="_blank" class="social">
                            <svg style="display: block;" fill="#808080" width="24px" height="24px" viewBox="0 0 0.45 0.45" xmlns="http://www.w3.org/2000/svg"><path d="M0.225 0.15a0.075 0.075 0 1 0 0 0.15 0.075 0.075 0 0 0 0 -0.15" fill="#808080"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.135 0A0.135 0.135 0 0 0 0 0.135v0.18A0.135 0.135 0 0 0 0.135 0.45h0.18a0.135 0.135 0 0 0 0.135 -0.135v-0.18A0.135 0.135 0 0 0 0.315 0zM0.12 0.225a0.105 0.105 0 1 1 0.21 0 0.105 0.105 0 0 1 -0.21 0M0.33 0.12h0.03V0.09h-0.03z" fill="#808080"></path></svg>
                        </a>
                        <a href="https://twitter.com/UniasselviBR" target="_blank" class="social">
                            <svg style="display:block;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2805_1812)">
                                <rect width="24" height="24" rx="5" fill="#808080"></rect>
                                <path d="M0 0H24V24H0V0Z" fill="#808080"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00159 4.59375H3.89062L9.95039 12.598L4.27828 19.3125H6.89897L11.189 14.2341L14.9984 19.2658H20.1094L13.8735 11.0289L13.8846 11.0431L19.2537 4.68722H16.633L12.6458 9.40725L9.00159 4.59375ZM6.7118 5.99555H8.30292L17.2882 17.864H15.6971L6.7118 5.99555Z" fill="white"></path>
                                </g>
                                <defs>
                                <clipPath id="clip0_2805_1812">
                                <rect width="24" height="24" rx="5" fill="white"></rect>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/user/wwwuniasselvi" target="_blank" class="social">
                            <svg style="display:block;" width="24" height="24" viewBox="0 0 0.48 0.48" xmlns="http://www.w3.org/2000/svg"><path fill="#808080" d="M.198 0H.171L.153.069.135 0h-.03l.018.051a.2.2 0 0 1 .015.057V.18h.027V.108zM.27.135V.09Q.27.069.261.057C.252.045.246.045.234.045S.213.051.207.06Q.198.068.198.09v.048q0 .022.009.03.009.013.027.012C.252.179.255.174.261.165Q.27.159.27.135M.246.141q0 .018-.012.018C.222.159.222.153.222.141V.084q0-.018.012-.018c.012 0 .012.006.012.018zM.36.18V.045H.336v.102Q.328.16.321.159L.315.153V.045H.291V.15q0 .013.003.021 0 .009.015.009C.324.18.327.174.336.165V.18zm.012.135Q.359.315.36.333v.012h.024V.333q0-.018-.012-.018m-.087 0a.02.02 0 0 0-.012.006v.081a.02.02 0 0 0 .012.006Q.294.408.294.39V.333q0-.018-.009-.018"></path><path fill="#808080" d="M.432.249C.426.228.408.21.39.21Q.317.203.24.204C.163.205.141.204.09.21.072.21.054.228.048.249Q.041.295.042.342c.001.047 0 .063.006.093q.01.033.042.039.075.007.15.006C.315.479.339.48.39.474.411.471.429.456.432.435Q.44.389.438.342C.436.295.438.279.432.249M.156.276h-.03v.153H.099V.276H.072V.249h.084zm.072.153H.204V.414Q.191.431.177.429C.163.427.165.426.162.42Q.16.416.159.399V.294h.024v.105q0 .005.006.006.008 0 .015-.012V.294h.024zm.09-.042q0 .018-.003.027Q.31.428.297.429C.284.43.279.423.273.414v.012H.249V.249h.024v.057Q.285.292.297.291C.309.29.312.297.315.306l.003.027zm.09-.021H.36V.39q0 .018.012.018.008 0 .012-.009V.384h.024v.018q0 .008-.006.015-.008.014-.03.015-.017 0-.03-.015Q.333.407.333.387V.342q0-.022.006-.03.008-.014.03-.015.018 0 .027.015.007.01.006.03v.024z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

        <footer class="bg-[#f6f6f6] border-t border-[#0000001a] pb-10 md:py-10 text-[#606060] lg:hidden">
            <div class="container mx-0 md:mx-auto w-full md:w-auto px-0 md:px-[1rem]">
                <div class="flex flex-wrap md:gap-[15px]">
                    <div class="flex-[1_1_auto] w-full md:w-auto md:max-w-[260px]">
                        <div class="collapse border-t border-[#000000a1] md:border-0 rounded-none py-3">
                            <input type="checkbox" class="md:hidden peer min-h-fit" />
                            <div class="collapse-title px-3 min-h-fit md:py-0 text-xl md:text-2xl font-bold p-0">
                                Institucional
                            </div>
                            <div class="collapse-content">
                                <ul class="px-3 md:px-0 pt-3 md:pt-0">
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Conheça a UNIASSELVI</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Unidades e polos</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Canal de Ética</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Ouvidoria</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Notícias</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Política de Privacidade</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Press releases</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Publicações legais</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Regulamentos</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Trabalhe conosco</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Seja nosso parceiro</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Núcleos de atendimento</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Portal da Extensão</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Editora UNIASSELVI</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                      
                    <div class="flex-[1_1_auto] w-full md:w-auto md:max-w-[260px]">
                        <div class="collapse border-t border-[#000000a1] md:border-0 rounded-none py-3">
                            <input type="checkbox" class="md:hidden peer min-h-fit" />
                            <div class="collapse-title px-3 min-h-fit md:py-0 text-xl md:text-2xl font-bold p-0">
                                Graduação
                            </div>
                            <div class="collapse-content">
                                <ul class="px-3 md:px-0 pt-3 md:pt-0">
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Cursos</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Inscreva-se</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Serviços</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Portal do aluno</a></li>
                                    <li><h4 class="text-xl font-bold mt-3 px-3 md:px-0">Portal do candidato:</h4></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">EAD <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">Presencial <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                                    <li><h4 class="text-xl font-bold mt-3 px-3 md:px-0">Resultados:</h4></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">EAD <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">Presencial <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex-[1_1_auto] w-full md:w-auto md:max-w-[260px]">
                        <div class="collapse border-t border-[#000000a1] md:border-0 rounded-none py-3">
                            <input type="checkbox" class="md:hidden peer min-h-fit" />
                            <div class="collapse-title px-3 min-h-fit md:py-0 text-xl md:text-2xl font-bold p-0">
                                Pós-graduação
                            </div>
                            <div class="collapse-content">
                                <ul class="px-3 md:px-0 pt-3 md:pt-0">
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Cursos</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Inscreva-se</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Serviços</a></li>
                                    <li><h4 class="text-xl font-bold mt-3 px-3 md:px-0">Portal do aluno:</h4></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">EAD</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Aluno Sala Virtual</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Presencial</a></li>
                                    <li><h4 class="text-xl font-bold mt-3 px-3 md:px-0">Portal do candidato:</h4></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">EAD <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0 flex leading-3 gap-[10px]">Presencial <svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="0 0 512 512"><path stroke="#606060" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse border-t border-[#000000a1] md:border-0 rounded-none py-3 md:mt-3">
                            <input type="checkbox" class="md:hidden peer min-h-fit" />
                            <div class="collapse-title px-3 min-h-fit md:py-0 text-xl md:text-2xl font-bold p-0">
                                Egressos
                            </div>
                            <div class="collapse-content">
                                <ul class="px-3 md:px-0 pt-3 md:pt-0">
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Portal do egresso</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex-[1_1_auto] w-full md:w-auto md:max-w-[260px]">
                        <div class="collapse border-t border-[#000000a1] md:border-0 rounded-none py-3">
                            <input type="checkbox" class="md:hidden peer min-h-fit" />
                            <div class="collapse-title px-3 min-h-fit md:py-0 text-xl md:text-2xl font-bold p-0">
                                Técnicos e Profissionalizantes
                            </div>
                            <div class="collapse-content">
                                <ul class="px-3 md:px-0 pt-3 md:pt-0">
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Cursos</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Inscreva-se</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Portal do aluno</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse border-t border-[#000000a1] md:border-0 rounded-none py-3">
                            <input type="checkbox" class="md:hidden peer min-h-fit" />
                            <div class="collapse-title px-3 min-h-fit md:py-0 text-xl md:text-2xl font-bold p-0">
                                Cursos Livres
                            </div>
                            <div class="collapse-content">
                                <ul class="px-3 md:px-0 pt-3 md:pt-0">
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Cursos</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Inscreva-se</a></li>
                                    <li><a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">Portal do aluno</a></li>
                                </ul>
                            </div>
                        </div>
                        <img src="/e-mec.png" class="hidden md:block w-full max-w-[200px] mt-3" alt="" />
                    </div>
                    <div class="flex-[1_1_auto] w-full md:w-auto md:max-w-[260px]">
                        <div class="collapse border-t border-[#000000a1] md:border-0 rounded-none py-3">
                            <input type="checkbox" class="md:hidden peer min-h-fit" />
                            <div class="collapse-title px-3 min-h-fit md:py-0 text-xl md:text-2xl font-bold p-0">
                                Contato
                            </div>
                            <div class="collapse-content">
                                <div class="flex items-center gap-[12px] px-3 md:px-0">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 39 39"><path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path><path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path></svg>
                                    </div>
                                    <p class="text-md font-base">Formulário de contato</p>
                                </div>
                            </div>
                        </div>
                        <div class="collapse border-y border-[#000000a1] md:border-0 rounded-none">
                            <input type="checkbox" class="md:hidden peer min-h-fit" />
                            <div class="collapse-title px-3 min-h-fit py-3 md:py-0 text-xl md:text-2xl font-bold p-0">
                                Telefones
                            </div>
                            <div class="collapse-content">
                                <ul class="grid grid-cols-2 px-3 md:px-0 gap-x-[10px]">
                                    <li>
                                        <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                            Pós EAD e Presencial <br />
                                            <strong>(47) 3301 6200</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                            Alunos EAD WhatsApp <br />
                                            <strong>(47) 3301 6100</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                            Blumenau/SC <br />
                                            <strong>0800 729 9009</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                            Brusque/SC <br />
                                            <strong>0800 729 9009</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                            Cuiabá/MT <br />
                                            <strong>0800 729 9009</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                            Guaramirim/SC <br />
                                            <strong>0800 729 9009</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                            Indaial/SC <br />
                                            <strong>0800 729 9009</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                            Rio do Sul/SC <br />
                                            <strong>0800 729 9009</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                            Rondonópolis/MT <br />
                                            <strong>0800 729 9009</strong>
                                        </a>
                                    </li>
                                    <li class="last">
                                        <a href="" class="text-md font-base py-2 px-3 md:px-0 block bg-white border md:bg-transparent md:border-0">
                                            Timbó/SC <br />
                                            <strong>0800 729 9009</strong>
                                        </a>
                                    </li>					
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex pt-10 gap-[24px] px-[1rem]">
                    <div class="flex-1">
                        <p>UNIASSELVI © Todos os direitos reservados.</p>
                        <p class="mt-5">Redes sociais:</p>
                        <div class="flex items-center gap-[12px]">
                            <a href="https://www.facebook.com/uniasselvi/" target="_blank" class="social">
                                <svg style="display: block;" fill="#808080" width="24px" height="24px" viewBox="0 0 0.72 0.72" id="facebook" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M0.42 0.18h0.09a0.03 0.03 0 0 0 0.03 -0.03V0.09a0.03 0.03 0 0 0 -0.03 -0.03h-0.09a0.15 0.15 0 0 0 -0.15 0.15v0.09H0.21a0.03 0.03 0 0 0 -0.03 0.03v0.06a0.03 0.03 0 0 0 0.03 0.03h0.06v0.21a0.03 0.03 0 0 0 0.03 0.03h0.06a0.03 0.03 0 0 0 0.03 -0.03v-0.21h0.067a0.03 0.03 0 0 0 0.03 -0.023l0.015 -0.06a0.03 0.03 0 0 0 -0.03 -0.037H0.39V0.21a0.03 0.03 0 0 1 0.03 -0.03"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/uniasselvioficial/" target="_blank" class="social">
                                <svg style="display: block;" fill="#808080" width="24px" height="24px" viewBox="0 0 0.45 0.45" xmlns="http://www.w3.org/2000/svg"><path d="M0.225 0.15a0.075 0.075 0 1 0 0 0.15 0.075 0.075 0 0 0 0 -0.15" fill="#808080"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.135 0A0.135 0.135 0 0 0 0 0.135v0.18A0.135 0.135 0 0 0 0.135 0.45h0.18a0.135 0.135 0 0 0 0.135 -0.135v-0.18A0.135 0.135 0 0 0 0.315 0zM0.12 0.225a0.105 0.105 0 1 1 0.21 0 0.105 0.105 0 0 1 -0.21 0M0.33 0.12h0.03V0.09h-0.03z" fill="#808080"></path></svg>
                            </a>
                            <a href="https://twitter.com/UniasselviBR" target="_blank" class="social">
                                <svg style="display:block;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2805_1812)">
                                    <rect width="24" height="24" rx="5" fill="#808080"></rect>
                                    <path d="M0 0H24V24H0V0Z" fill="#808080"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00159 4.59375H3.89062L9.95039 12.598L4.27828 19.3125H6.89897L11.189 14.2341L14.9984 19.2658H20.1094L13.8735 11.0289L13.8846 11.0431L19.2537 4.68722H16.633L12.6458 9.40725L9.00159 4.59375ZM6.7118 5.99555H8.30292L17.2882 17.864H15.6971L6.7118 5.99555Z" fill="white"></path>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_2805_1812">
                                    <rect width="24" height="24" rx="5" fill="white"></rect>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/user/wwwuniasselvi" target="_blank" class="social">
                                <svg style="display:block;" width="24" height="24" viewBox="0 0 0.48 0.48" xmlns="http://www.w3.org/2000/svg"><path fill="#808080" d="M.198 0H.171L.153.069.135 0h-.03l.018.051a.2.2 0 0 1 .015.057V.18h.027V.108zM.27.135V.09Q.27.069.261.057C.252.045.246.045.234.045S.213.051.207.06Q.198.068.198.09v.048q0 .022.009.03.009.013.027.012C.252.179.255.174.261.165Q.27.159.27.135M.246.141q0 .018-.012.018C.222.159.222.153.222.141V.084q0-.018.012-.018c.012 0 .012.006.012.018zM.36.18V.045H.336v.102Q.328.16.321.159L.315.153V.045H.291V.15q0 .013.003.021 0 .009.015.009C.324.18.327.174.336.165V.18zm.012.135Q.359.315.36.333v.012h.024V.333q0-.018-.012-.018m-.087 0a.02.02 0 0 0-.012.006v.081a.02.02 0 0 0 .012.006Q.294.408.294.39V.333q0-.018-.009-.018"></path><path fill="#808080" d="M.432.249C.426.228.408.21.39.21Q.317.203.24.204C.163.205.141.204.09.21.072.21.054.228.048.249Q.041.295.042.342c.001.047 0 .063.006.093q.01.033.042.039.075.007.15.006C.315.479.339.48.39.474.411.471.429.456.432.435Q.44.389.438.342C.436.295.438.279.432.249M.156.276h-.03v.153H.099V.276H.072V.249h.084zm.072.153H.204V.414Q.191.431.177.429C.163.427.165.426.162.42Q.16.416.159.399V.294h.024v.105q0 .005.006.006.008 0 .015-.012V.294h.024zm.09-.042q0 .018-.003.027Q.31.428.297.429C.284.43.279.423.273.414v.012H.249V.249h.024v.057Q.285.292.297.291C.309.29.312.297.315.306l.003.027zm.09-.021H.36V.39q0 .018.012.018.008 0 .012-.009V.384h.024v.018q0 .008-.006.015-.008.014-.03.015-.017 0-.03-.015Q.333.407.333.387V.342q0-.022.006-.03.008-.014.03-.015.018 0 .027.015.007.01.006.03v.024z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="flex">
                        <img src="/e-mec-mobile.png" class="block" width="96px" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
