interface Props {
    gridColsDesk: number;
    gridColsMobile: number;
    titleSection?: string;
    subTitleSection?: string;
  }
  
  function UniversoDeOpcoes({
    gridColsDesk = 1,
    gridColsMobile = 1,
    titleSection = "Made with",
    subTitleSection = "Made with",
  }: Props) {
    return (
        <section class="bg-base py-8">
            <div class="container px-[1rem]">
                {/* <h2 class="text-3xl font-bold text-primary mb-4">Um universo de opções para sua evolução</h2> */}
                <h2 class="text-3xl font-bold text-primary mb-4">{titleSection}</h2>
                <p class="text-md font-base text-primary mb-8">{subTitleSection}</p>
                <div class={`grid grid-cols-${gridColsMobile} md:grid-cols-${gridColsDesk} gap-8`}>
                    <a href="/graduacao" class="bg-secondary flex items-center gap-4 p-4">
                        <div class="flex-[0_0_53px] h-[53px] rounded-full bg-[#FFDD00] flex justify-center items-center">
                            <svg width="23px" height="23px" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" points="368 350.643 256 413.643 144 350.643 144 284.081 112 266.303 112 369.357 256 450.357 400 369.357 400 266.303 368 284.081 368 350.643" class="ci-primary" d="M16.531 15.751 11.5 18.582l-5.031 -2.83v-2.99l-1.438 -0.799v4.63L11.5 20.23l6.469 -3.639v-4.63l-1.438 0.799z"></path><path fill="#000000" d="M11.5 2.065 1.438 7.283v1.246L11.5 14.118l8.625 -4.792v3.971h1.438V7.283Zm7.188 6.416 -1.438 0.798 -5.75 3.196 -5.75 -3.195 -1.438 -0.798 -0.996 -0.553L11.5 3.685l8.183 4.244Z" class="ci-primary"></path></svg>
                        </div>
                        <div class="flex-1">
                            <p class="text-[13px] text-primary">Graduação</p>
                            <p class="text-[13px] text-primary">A partir de <strong class="text-[14px]">R$ 99,00 mensais</strong></p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="20px" viewBox="0 0 320 512"><path stroke="#000000" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </div>
                    </a>

                    <a href="#" class="bg-secondary flex items-center gap-4 p-4">
                        <div class="flex-[0_0_53px] h-[53px] rounded-full bg-[#00A6A5] flex justify-center items-center">
                            <svg fill="#000000" width="23px" height="23px" viewBox="0 0 0.69 0.69" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M0.201 0.288h0.058a0.029 0.029 0 0 0 0 -0.058H0.201a0.029 0.029 0 0 0 0 0.058m0.403 -0.173h-0.23V0.086a0.029 0.029 0 0 0 -0.058 0v0.029h-0.23a0.029 0.029 0 0 0 -0.029 0.029v0.288a0.086 0.086 0 0 0 0.086 0.086h0.132l-0.066 0.066a0.029 0.029 0 0 0 0 0.041 0.029 0.029 0 0 0 0.041 0l0.066 -0.066v0.046a0.029 0.029 0 0 0 0.058 0v-0.046l0.066 0.066a0.029 0.029 0 0 0 0.041 0 0.029 0.029 0 0 0 0 -0.041l-0.066 -0.066h0.132a0.086 0.086 0 0 0 0.086 -0.086V0.144a0.029 0.029 0 0 0 -0.029 -0.029m-0.029 0.316a0.029 0.029 0 0 1 -0.029 0.029H0.144a0.029 0.029 0 0 1 -0.029 -0.029V0.173h0.46ZM0.201 0.403h0.173a0.029 0.029 0 0 0 0 -0.058H0.201a0.029 0.029 0 0 0 0 0.058"></path></svg>
                        </div>
                        <div class="flex-1">
                            <p class="text-[13px] text-primary">Pós-Graduação</p>
                            <p class="text-[13px] text-primary">A partir de <strong class="text-[14px]">R$ 71,91 mensais</strong></p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="20px" viewBox="0 0 320 512"><path stroke="#000000" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </div>
                    </a>

                    <a href="#" class="bg-secondary flex items-center gap-4 p-4">
                        <div class="flex-[0_0_53px] h-[53px] rounded-full bg-[#CDCDCE] flex justify-center items-center">
                            <svg fill="#000000" width="23px" height="23px" viewBox="0 0 0.69 0.69" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M0.259 0.431a0.029 0.029 0 1 0 0.029 0.029 0.029 0.029 0 0 0 -0.029 -0.029m-0.201 -0.029a0.029 0.029 0 0 0 -0.029 0.029v0.058a0.029 0.029 0 0 0 0.058 0v-0.058a0.029 0.029 0 0 0 -0.029 -0.029m0.575 0a0.029 0.029 0 0 0 -0.029 0.029v0.058a0.029 0.029 0 0 0 0.058 0v-0.058a0.029 0.029 0 0 0 -0.029 -0.029m-0.144 -0.201h-0.115V0.164A0.058 0.058 0 0 0 0.403 0.115a0.058 0.058 0 0 0 -0.115 0 0.058 0.058 0 0 0 0.029 0.049V0.201H0.201a0.086 0.086 0 0 0 -0.086 0.086v0.259a0.086 0.086 0 0 0 0.086 0.086h0.288a0.086 0.086 0 0 0 0.086 -0.086v-0.259a0.086 0.086 0 0 0 -0.086 -0.086m-0.094 0.058 -0.014 0.058h-0.07l-0.014 -0.058ZM0.518 0.546a0.029 0.029 0 0 1 -0.029 0.029H0.201a0.029 0.029 0 0 1 -0.029 -0.029v-0.259a0.029 0.029 0 0 1 0.029 -0.029h0.035L0.259 0.352a0.029 0.029 0 0 0 0.029 0.022h0.115a0.029 0.029 0 0 0 0.029 -0.022L0.454 0.259H0.489a0.029 0.029 0 0 1 0.029 0.029Zm-0.086 -0.115a0.029 0.029 0 1 0 0.029 0.029 0.029 0.029 0 0 0 -0.029 -0.029"></path></svg>
                        </div>
                        <div class="flex-1">
                            <p class="text-[13px] text-primary">Técnicos / Profissionalizantes</p>
                            <p class="text-[13px] text-primary">A partir de <strong class="text-[14px]">R$ 98,18 mensais</strong></p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="20px" viewBox="0 0 320 512"><path stroke="#000000" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </div>
                    </a>

                    <a href="#" class="bg-secondary flex items-center gap-4 p-4">
                        <div class="flex-[0_0_53px] h-[53px] rounded-full bg-[#FCAF17] flex justify-center items-center">
                            <svg fill="#000000" width="23px" height="23px" viewBox="0 0 0.69 0.69" xmlns="http://www.w3.org/2000/svg"><path d="M0.271 0.374h0.07a0.029 0.029 0 0 0 0.02 -0.008l0.103 -0.103a0.029 0.029 0 0 0 0 -0.041l-0.07 -0.069a0.029 0.029 0 0 0 -0.041 0L0.25 0.256a0.029 0.029 0 0 0 -0.009 0.02v0.069a0.029 0.029 0 0 0 0.029 0.029m0.029 -0.086 0.074 -0.074 0.029 0.029 -0.074 0.074h-0.029Zm0.304 0.115h-0.029V0.115h0.029a0.029 0.029 0 0 0 0 -0.058H0.086a0.029 0.029 0 0 0 0 0.058h0.029v0.288H0.086a0.029 0.029 0 0 0 0 0.058h0.23v0.033L0.185 0.579a0.029 0.029 0 0 0 0.016 0.053 0.027 0.027 0 0 0 0.016 -0.005l0.099 -0.066v0.042a0.029 0.029 0 0 0 0.058 0v-0.042l0.099 0.066a0.027 0.027 0 0 0 0.016 0.005 0.029 0.029 0 0 0 0.016 -0.053l-0.131 -0.086V0.46h0.23a0.029 0.029 0 0 0 0 -0.058m-0.086 0H0.173V0.115h0.345Z"></path></svg>
                        </div>
                        <div class="flex-1">
                            <p class="text-[13px] text-primary">Cursos Livres</p>
                            <p class="text-[13px] text-primary"><strong class="text-[14px]">Gratuitos</strong> e a partir de <strong class="text-[14px]">R$ 40,00 mensais</strong></p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="20px" viewBox="0 0 320 512"><path stroke="#000000" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default UniversoDeOpcoes;