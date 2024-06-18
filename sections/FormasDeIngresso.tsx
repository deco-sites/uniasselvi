import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    image?: ImageWidget;
    alt?: string;
  }
  
  function FormasDeIngresso({
    image =
    "",
    alt = "",
  }: Props) {
    return (
        <section class="bg-white py-5">
            <div class="container px-[1rem] py-10">
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h3 class="text-3xl font-bold text-black mb-4">Formas de ingresso</h3>
                        <p class="text-lg font-base text-black">Conheça nossas formas de ingresso e saiba qual combina mais com você!</p>
                    </div>
                    <div>
                        <div class="flex items-center mb-6">
                            <div>
                                <svg class="block mr-4" width="24px" height="24px" viewBox="0 0 0.72 0.72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m0.36 0.135 -0.3 0.15 0.3 0.15 0.3 -0.15z" stroke="#00a59a" stroke-width="0.06" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.57 0.33v0.15l-0.21 0.105L0.15 0.48v-0.15" stroke="#00a59a" stroke-width="0.06" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.66 0.42v0.12" stroke="#00a59a" stroke-width="0.06" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <h4 class="text-xl font-bold text-[#00a59a]">Graduação</h4>
                        </div>
                        <div class="collapse rounded-none collapse-arrow mb-3">
                            <input type="radio" class="group" name="my-accordion-1" /> 
                            <div class="collapse-title group-check:checked:text-[#00A6A5] bg-[#F4F4F4] text-black text-xl font-bold">
                                Vestibular
                            </div>
                            <div class="collapse-content p-0">
                                <div class=" border border-[#ccc] my-1 p-3">
                                    <p class="py-1 px-3 rounded-full text-xs mb-3 text-white bg-[#00A6A5] inline-block">Graduação EAD e Presencial</p>
                                    <p class="text-lg text-black">Uma instituição completa para você. Realize uma prova on-line e <span class="font-bold underline">ingresse agora!</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="collapse rounded-none collapse-arrow mb-3">
                            <input type="radio" class="group" name="my-accordion-1" /> 
                            <div class="collapse-title group-check:checked:text-[#00A6A5] bg-[#F4F4F4] text-black text-xl font-bold">
                                ENEM
                            </div>
                            <div class="collapse-content p-0">
                                <div class=" border border-[#ccc] my-1 p-3">
                                    <p class="py-1 px-3 rounded-full text-xs mb-3 text-white bg-[#00A6A5] inline-block">Graduação EAD e Presencial</p>
                                    <p class="text-lg text-black">Tenha desconto com sua nota no ENEM. Quero meu desconto <span class="font-bold underline">agora!</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="collapse rounded-none collapse-arrow mb-3">
                            <input type="radio" class="group" name="my-accordion-1" /> 
                            <div class="collapse-title group-check:checked:text-[#00A6A5] bg-[#F4F4F4] text-black text-xl font-bold">
                                ENCCEJA
                            </div>
                            <div class="collapse-content p-0">
                                <div class=" border border-[#ccc] my-1 p-3">
                                    <p class="py-1 px-3 rounded-full text-xs mb-3 text-white bg-[#00A6A5] inline-block">Graduação EAD e Presencial</p>
                                    <p class="text-lg text-black">Use sua nota do ENCEEJA, faça uma prova simples e <span class="font-bold underline">estude conosco!</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="collapse rounded-none collapse-arrow mb-3">
                            <input type="radio" class="group" name="my-accordion-1" /> 
                            <div class="collapse-title group-check:checked:text-[#00A6A5] bg-[#F4F4F4] text-black text-xl font-bold">
                                2° Graduação
                            </div>
                            <div class="collapse-content p-0">
                                <div class=" border border-[#ccc] my-1 p-3">
                                    <p class="py-1 px-3 rounded-full text-xs mb-3 text-white bg-[#00A6A5] inline-block">Graduação EAD e Presencial</p>
                                    <p class="text-lg text-black">Você nem precisa fazer vestibular, utilize o diploma da sua 1ª Graduação e <strong>valide suas disciplinas!</strong></p>
                                </div>
                            </div>
                        </div>
                        <div class="collapse rounded-none collapse-arrow mb-3">
                            <input type="radio" class="group" name="my-accordion-1" /> 
                            <div class="collapse-title group-check:checked:text-[#00A6A5] bg-[#F4F4F4] text-black text-xl font-bold">
                                Transferência Graduação
                            </div>
                            <div class="collapse-content p-0">
                                <div class=" border border-[#ccc] my-1 p-3">
                                    <p class="py-1 px-3 rounded-full text-xs mb-3 text-white bg-[#00A6A5] inline-block">Graduação EAD e Presencial</p>
                                    <p class="text-lg text-black">Conclua o seu curso sem pagar nada pela transferência. <strong>Aproveite as disciplinas</strong> que já cursou. <strong>Vem com a gente!</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center mb-6">
                            <div>
                                <svg class="block mr-4" width="24px" height="24px" viewBox="0 0 0.72 0.72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m0.36 0.135 -0.3 0.15 0.3 0.15 0.3 -0.15z" stroke="#00a59a" stroke-width="0.06" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.57 0.33v0.15l-0.21 0.105L0.15 0.48v-0.15" stroke="#00a59a" stroke-width="0.06" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.66 0.42v0.12" stroke="#00a59a" stroke-width="0.06" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <h4 class="text-xl font-bold text-[#00a59a]">Técnico/Profissionalizante:</h4>
                        </div>
                        <div class="collapse rounded-none collapse-arrow mb-3">
                            <input type="radio" class="group" name="my-accordion-1" /> 
                            <div class="collapse-title group-check:checked:text-[#00A6A5] bg-[#F4F4F4] text-black text-xl font-bold">
                                Histórico
                            </div>
                            <div class="collapse-content p-0">
                                <div class=" border border-[#ccc] my-1 p-3">
                                    <p class="py-1 px-3 rounded-full text-xs mb-3 text-white bg-[#00A6A5] inline-block">Graduação EAD e Presencial</p>
                                    <p class="text-lg text-black">Utilize seu <strong>Histórico e Diploma/Certificado</strong> ou <strong>Atestado de Matrícula</strong> do Ensino Médio.</p>
                                </div>
                            </div>
                        </div>
                        <div class="collapse rounded-none collapse-arrow mb-3">
                            <input type="radio" class="group" name="my-accordion-1" /> 
                            <div class="collapse-title group-check:checked:text-[#00A6A5] bg-[#F4F4F4] text-black text-xl font-bold">
                                2º Curso Técnico ou Profissionalizante
                            </div>
                            <div class="collapse-content p-0">
                                <div class=" border border-[#ccc] my-1 p-3">
                                    <p class="py-1 px-3 rounded-full text-xs mb-3 text-white bg-[#00A6A5] inline-block">Técnico/Profissionalizante:</p>
                                    <p class="text-lg text-black">Se você <strong>já possui</strong> um curso técnico ou profissionalizante, ingresse e verifique a possibilidade de convalidar disciplinas.</p>
                                </div>
                            </div>
                        </div>
                        <div class="collapse rounded-none collapse-arrow mb-3">
                            <input type="radio" class="group" name="my-accordion-1" /> 
                            <div class="collapse-title group-check:checked:text-[#00A6A5] bg-[#F4F4F4] text-black text-xl font-bold">
                                Transferência Técnico
                            </div>
                            <div class="collapse-content p-0">
                                <div class=" border border-[#ccc] my-1 p-3">
                                    <p class="py-1 px-3 rounded-full text-xs mb-3 text-white bg-[#00A6A5] inline-block">Técnico/Profissionalizante:</p>
                                    <p class="text-lg text-black">Faça a sua transferência e convalide disciplinas de outra instituição.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormasDeIngresso;