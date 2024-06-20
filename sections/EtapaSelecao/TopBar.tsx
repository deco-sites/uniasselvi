import { useSignal } from "@preact/signals";

export interface Props {
    active_index: number;

}

export default function TopBar({active_index}:Props) {
    
    const mostrarForm = useSignal<boolean>(false);

    const css = `
        .bar{
            background-color:#ededed;
            padding: 16px 14px 12px 64px;
            box-shadow: 0 0 0 1px #c2c2c2;
            position:relative;
        }
        .bar-active{
            background-color:
        }
        .bar-completed{
            background-color:#acddda;
            box-shadow: 0 0 0 1px #00a59a;
        }
        .bar-completed strong::before{
            content: '';
            position: absolute;
            top: -7%;
            right: -7%;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: 90%;
            background-position: 50%;
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjEgMTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIxIDE4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjt9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMi4yLDcuNGMyLDEuNyw1LDQuNCw1LDQuNHM2LjgtOCwxMy4zLTExLjhMMjEsMS4zQzE4LjcsMi44LDExLjYsMTAuOSw4LjgsMThjMCwwLTcuNC03LjItOC44LTguOUwyLjIsNy40TDIuMiw3LjRMMi4yLDcuNHoiLz48L3N2Zz4=);
        }
        .bar strong {
            display: block;
            position: absolute;
            top: 50%;
            left: 14px;
            margin-top: -14px;
            padding-top: 8px;
            width: 28px;
            height: 28px;
            color: #fff;
            background: #939393;
            border-radius: 50%;
            text-align: center;
            font-size: 14px;
            line-height: 1em;
        }
        .bar-completed strong{
            background:#00a59a;
            color:#00a59a;
        }
        .bar-active strong{
            background:#00a59a;
        }
        .step-bullet {
            display:flex;
            align-items:center;
            justify-content:center;
            aspect-ratio: 1 / 1;
            height: 64px;
            background: #00a59a;
            color: #fff;
            border-radius: 50%;
            text-align: center;
            margin: 0;
            font-weight: 700;
        }
        .safe-badge{
            align-items:center;
        }
        .safe-badge .icon {
            margin-top: -14px;
            display: block;
            width: 28px;
            height: 28px;
            background-size: 100%;
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjggMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6IzFBMTkxOTt9PC9zdHlsZT48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUuNCwzLjZjLTMsMi42LTguNyw5LjYtMTEuMSwxNS44YzAsMC03LjQtNy4yLTguOC04LjlsMi4yLTEuN2MyLDEuNyw1LDQuNCw1LDQuNHM1LjYtNi41LDExLjQtMTAuNkMyMS44LDAuOCwxOC44LDAsMTQsMEM2LjMsMCwzLDIuMiwwLDYuN0MwLDE2LjYsMTQsMjgsMTQsMjhzMTQtOS45LDE0LTIxLjNDMjcuMiw1LjUsMjYuMyw0LjQsMjUuNCwzLjZ6Ii8+PC9nPjwvc3ZnPg==);
        }
        
        @media (max-width: 576px) {
            .step-bullet {
                height: 32px;
            }
            .container {
                padding-right: 15px;
                padding-left: 15px;
            }
            .bar{
                background:none;
                border:none;
                outline:none;
                box-shadow:none;
                border-top:1px solid #000;
            }
            .bar strong{
                left: 50%;
                transform: translate(-50%, -50%);
            }
            
        }
    `;
    return(
        
        <div class="container mt-10 mb-10">
            <style>
                    {css}
            </style>

            {/* Step 1 */}
            <div class="text-center">
                <p class="text-3xl font-base text-black">Agora falta pouco para concluir sua inscrição em <span class="text-[#00a59a] font-bold">[Marketing]</span> na UNIASSELVI.</p>
                <p class="text-xl font-base text-black mt-[40px]">Selecione sua <strong>forma de ingresso</strong> e preencha as informações abaixo para dar o próximo grande passo na sua carreira:</p>
                <div class="flex justify-center flex-wrap gap-[15px] my-10">
                    <div onClick={() => {mostrarForm.value = true}} class="flex-[0_0_190px] bg-[#ededed] grid gap-[15px] grid-rows-[auto_1fr_auto] justify-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42"><path fill="#3b3c3a" fill-rule="evenodd" d="M1097.18,6298.38a1.655,1.655,0,1,0,0-3.31h-4.72a1.655,1.655,0,1,0,0,3.31h4.72Zm-4.72,7.74h4.72a1.66,1.66,0,1,0,0-3.32h-4.72A1.66,1.66,0,0,0,1092.46,6306.12Zm-4.05-12.05-0.82-.82a0.726,0.726,0,0,0-.99-0.03l-3.39,3-1.57-1.24a0.729,0.729,0,0,0-.95.05l-0.82.81a0.739,0.739,0,0,0-.04,1l2.86,3.32a0.717,0.717,0,0,0,1.02.06,0.17,0.17,0,0,0,.06-0.06l4.66-5.09h0A0.728,0.728,0,0,0,1088.41,6294.07Zm0,8.05-0.82-.81a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.72,0.72,0,0,0-.96.06l-0.82.82a0.735,0.735,0,0,0-.03.98l2.87,3.32a0.729,0.729,0,0,0,1.03.06l0.06-.06,4.64-5.09h0A0.741,0.741,0,0,0,1088.41,6302.12Zm-0.82,7.25a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.729,0.729,0,0,0-.95.05l-0.82.82a0.737,0.737,0,0,0-.04.99l2.87,3.32a0.738,0.738,0,0,0,1.03.06l0.06-.06,4.64-5.1h0a0.729,0.729,0,0,0-.02-1Zm-9.86,13.55h13.7v-2.27a4.488,4.488,0,0,1,.31-1.58h-14.01a0.881,0.881,0,0,1-.89-0.87h0v-27.45a0.89,0.89,0,0,1,.87-0.9h23.06a0.88,0.88,0,0,1,.85.9v11.4l2.04-3.47a4.514,4.514,0,0,1,1.81-1.71v-6.22a4.737,4.737,0,0,0-4.7-4.75h-23.04a4.733,4.733,0,0,0-4.73,4.73v27.48A4.722,4.722,0,0,0,1077.73,6322.92Zm14.73-9.07h2.28l1.95-3.32h-4.23A1.66,1.66,0,1,0,1092.46,6313.85Zm16.23-14.14a5.136,5.136,0,0,0-1.4.19l-0.14.04a1.058,1.058,0,0,0-.52.46l-11.62,19.73a1.222,1.222,0,0,0-.14.56l-0.05,6.24a1.1,1.1,0,0,0,1.12,1.07,1.068,1.068,0,0,0,.25-0.03l0.14-.05,0.12-.06,5.39-3.13a1.025,1.025,0,0,0,.4-0.4l11.61-19.72a1.1,1.1,0,0,0,.12-0.83A5.474,5.474,0,0,0,1108.69,6299.71Z" transform="translate(-1073 -6286)"/></svg>
                        <div>
                            <h3 class="text-lg font-bold mb-2">Vestibular</h3>
                            <p class="text-sm leading-5">Ingresse na graduação realizando uma <b>prova simples</b> (Vestibular On-line).</p>
                        </div>
                        <button class="bg-[#ffef98] rounded-md shadow-[0_6px_8px_0_rgba(73,73,73,.36)] text-lg font-semibold w-full py-3 px-5">Continuar</button>
                    </div>
                    <div class="flex-[0_0_190px] bg-[#ededed] grid gap-[15px] grid-rows-[auto_1fr_auto] justify-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42"><path fill="#3b3c3a" fill-rule="evenodd" d="M1097.18,6298.38a1.655,1.655,0,1,0,0-3.31h-4.72a1.655,1.655,0,1,0,0,3.31h4.72Zm-4.72,7.74h4.72a1.66,1.66,0,1,0,0-3.32h-4.72A1.66,1.66,0,0,0,1092.46,6306.12Zm-4.05-12.05-0.82-.82a0.726,0.726,0,0,0-.99-0.03l-3.39,3-1.57-1.24a0.729,0.729,0,0,0-.95.05l-0.82.81a0.739,0.739,0,0,0-.04,1l2.86,3.32a0.717,0.717,0,0,0,1.02.06,0.17,0.17,0,0,0,.06-0.06l4.66-5.09h0A0.728,0.728,0,0,0,1088.41,6294.07Zm0,8.05-0.82-.81a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.72,0.72,0,0,0-.96.06l-0.82.82a0.735,0.735,0,0,0-.03.98l2.87,3.32a0.729,0.729,0,0,0,1.03.06l0.06-.06,4.64-5.09h0A0.741,0.741,0,0,0,1088.41,6302.12Zm-0.82,7.25a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.729,0.729,0,0,0-.95.05l-0.82.82a0.737,0.737,0,0,0-.04.99l2.87,3.32a0.738,0.738,0,0,0,1.03.06l0.06-.06,4.64-5.1h0a0.729,0.729,0,0,0-.02-1Zm-9.86,13.55h13.7v-2.27a4.488,4.488,0,0,1,.31-1.58h-14.01a0.881,0.881,0,0,1-.89-0.87h0v-27.45a0.89,0.89,0,0,1,.87-0.9h23.06a0.88,0.88,0,0,1,.85.9v11.4l2.04-3.47a4.514,4.514,0,0,1,1.81-1.71v-6.22a4.737,4.737,0,0,0-4.7-4.75h-23.04a4.733,4.733,0,0,0-4.73,4.73v27.48A4.722,4.722,0,0,0,1077.73,6322.92Zm14.73-9.07h2.28l1.95-3.32h-4.23A1.66,1.66,0,1,0,1092.46,6313.85Zm16.23-14.14a5.136,5.136,0,0,0-1.4.19l-0.14.04a1.058,1.058,0,0,0-.52.46l-11.62,19.73a1.222,1.222,0,0,0-.14.56l-0.05,6.24a1.1,1.1,0,0,0,1.12,1.07,1.068,1.068,0,0,0,.25-0.03l0.14-.05,0.12-.06,5.39-3.13a1.025,1.025,0,0,0,.4-0.4l11.61-19.72a1.1,1.1,0,0,0,.12-0.83A5.474,5.474,0,0,0,1108.69,6299.71Z" transform="translate(-1073 -6286)"/></svg>
                        <div>
                            <h3 class="text-lg font-bold mb-2">ENEM</h3>
                            <p class="text-sm leading-5">Se você fez o ENEM, <strong>utilize sua nota</strong> e ingresse sem realizar a prova.</p>
                        </div>
                        <button class="bg-[#ffef98] rounded-md shadow-[0_6px_8px_0_rgba(73,73,73,.36)] text-lg font-semibold w-full py-3 px-5">Continuar</button>
                    </div>
                    <div class="flex-[0_0_190px] bg-[#ededed] grid gap-[15px] grid-rows-[auto_1fr_auto] justify-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42"><path fill="#3b3c3a" fill-rule="evenodd" d="M1097.18,6298.38a1.655,1.655,0,1,0,0-3.31h-4.72a1.655,1.655,0,1,0,0,3.31h4.72Zm-4.72,7.74h4.72a1.66,1.66,0,1,0,0-3.32h-4.72A1.66,1.66,0,0,0,1092.46,6306.12Zm-4.05-12.05-0.82-.82a0.726,0.726,0,0,0-.99-0.03l-3.39,3-1.57-1.24a0.729,0.729,0,0,0-.95.05l-0.82.81a0.739,0.739,0,0,0-.04,1l2.86,3.32a0.717,0.717,0,0,0,1.02.06,0.17,0.17,0,0,0,.06-0.06l4.66-5.09h0A0.728,0.728,0,0,0,1088.41,6294.07Zm0,8.05-0.82-.81a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.72,0.72,0,0,0-.96.06l-0.82.82a0.735,0.735,0,0,0-.03.98l2.87,3.32a0.729,0.729,0,0,0,1.03.06l0.06-.06,4.64-5.09h0A0.741,0.741,0,0,0,1088.41,6302.12Zm-0.82,7.25a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.729,0.729,0,0,0-.95.05l-0.82.82a0.737,0.737,0,0,0-.04.99l2.87,3.32a0.738,0.738,0,0,0,1.03.06l0.06-.06,4.64-5.1h0a0.729,0.729,0,0,0-.02-1Zm-9.86,13.55h13.7v-2.27a4.488,4.488,0,0,1,.31-1.58h-14.01a0.881,0.881,0,0,1-.89-0.87h0v-27.45a0.89,0.89,0,0,1,.87-0.9h23.06a0.88,0.88,0,0,1,.85.9v11.4l2.04-3.47a4.514,4.514,0,0,1,1.81-1.71v-6.22a4.737,4.737,0,0,0-4.7-4.75h-23.04a4.733,4.733,0,0,0-4.73,4.73v27.48A4.722,4.722,0,0,0,1077.73,6322.92Zm14.73-9.07h2.28l1.95-3.32h-4.23A1.66,1.66,0,1,0,1092.46,6313.85Zm16.23-14.14a5.136,5.136,0,0,0-1.4.19l-0.14.04a1.058,1.058,0,0,0-.52.46l-11.62,19.73a1.222,1.222,0,0,0-.14.56l-0.05,6.24a1.1,1.1,0,0,0,1.12,1.07,1.068,1.068,0,0,0,.25-0.03l0.14-.05,0.12-.06,5.39-3.13a1.025,1.025,0,0,0,.4-0.4l11.61-19.72a1.1,1.1,0,0,0,.12-0.83A5.474,5.474,0,0,0,1108.69,6299.71Z" transform="translate(-1073 -6286)"/></svg>
                        <div>
                            <h3 class="text-lg font-bold mb-2">ENCCEJA</h3>
                            <p class="text-sm leading-5">Se você fez o ENCCEJA, <strong>utilize sua nota</strong> e ingresse realizando uma <b>prova simples</b> (Vestibular On-line).</p>
                        </div>
                        <button class="bg-[#ffef98] rounded-md shadow-[0_6px_8px_0_rgba(73,73,73,.36)] text-lg font-semibold w-full py-3 px-5">Continuar</button>
                    </div>
                    <div class="flex-[0_0_190px] bg-[#ededed] grid gap-[15px] grid-rows-[auto_1fr_auto] justify-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="#3b3c3a" fill-rule="evenodd" d="M1303,6298.01a8,8,0,0,0-8,7.99,7.885,7.885,0,0,0,2.01,5.24V6324l6.01-4,5.99,4v-12.76A7.955,7.955,0,0,0,1303,6298.01Zm2.01,17.99h-4v-2.28a7.726,7.726,0,0,0,2,.28,7.927,7.927,0,0,0,2.01-.28V6316h-0.01Zm-2.01-6a4,4,0,1,1,4-4A4,4,0,0,1,1303,6310Zm0-26v12h0a9.96,9.96,0,0,1,8,15.96V6318h24v-34h-32Zm28,24h-13.99v-4H1331v4Zm0-8h-13.99v-4H1331v4Zm0-8h-24v-4h24v4Z" transform="translate(-1295 -6284)"/></svg>
                        <div>
                            <h3 class="text-lg font-bold mb-2">2° Graduação</h3>
                            <p class="text-sm leading-5">Se você <strong>já possui</strong> uma graduação, ingresse sem realizar a prova.</p>
                        </div>
                        <button class="bg-[#ffef98] rounded-md shadow-[0_6px_8px_0_rgba(73,73,73,.36)] text-lg font-semibold w-full py-3 px-5">Continuar</button>
                    </div>
                    <div class="flex-[0_0_190px] bg-[#ededed] grid gap-[15px] grid-rows-[auto_1fr_auto] justify-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="49" viewBox="0 0 35 49"><path fill="#3b3c3a" fill-rule="evenodd" d="M1548.05,6327.54c-0.8-.81-1.82-1.83-2.25-2.28l-0.78-.83,2.27-2.22c1.25-1.23,2.25-2.25,2.23-2.27s-5.11-.05-11.29-0.05H1527v-6.3h11.23c6.18,0,11.26-.02,11.29-0.04s-0.98-1.05-2.23-2.28l-2.27-2.22,1.17-1.2c0.65-.65,1.67-1.67,2.27-2.26l1.1-1.07,6.19,6.06c4.08,4,6.18,6.11,6.18,6.19s-2.09,2.19-6.17,6.18c-3.39,3.33-6.18,6.05-6.2,6.05s-0.7-.66-1.51-1.46h0Zm-14.81-29.1c-4.07-3.99-6.17-6.09-6.17-6.18s2.11-2.2,6.18-6.2l6.19-6.06,1.1,1.07c0.6,0.59,1.62,1.61,2.27,2.27l1.17,1.19-2.27,2.23c-1.25,1.22-2.25,2.24-2.23,2.27s5.11,0.05,11.29.05H1562v6.29h-11.23c-6.18,0-11.26.02-11.29,0.05s0.98,1.05,2.23,2.27l2.27,2.23-0.78.82c-0.93.98-3.7,3.74-3.76,3.74-0.02,0-2.81-2.72-6.2-6.04h0Z" transform="translate(-1527 -6280)"/></svg>
                        <div>
                            <h3 class="text-lg font-bold mb-2">Transferência</h3>
                            <p class="text-sm leading-5">Faça a sua transferência e convalide disciplinas de outra instituição.</p>
                        </div>
                        <button class="bg-[#ffef98] rounded-md shadow-[0_6px_8px_0_rgba(73,73,73,.36)] text-lg font-semibold w-full py-3 px-5">Continuar</button>
                    </div>
                </div>
            </div>

            <div class="flex justify-between ">
                <div class="flex">
                    <span class="text-lg lg:text-3xl step-bullet">1</span>
                    <div class="ml-4">
                        <span class="text-xl lg:text-4xl font-base">Preencha seus dados</span><br></br>
                        <span>Para começar, precisamos de algumas informações básicas.</span>
                    </div>
                </div>
                <div class="safe-badge hidden md:flex">
                    <i class="icon mr-4"></i>
                    <div>
                        <b>Site Seguro</b><br></br>
                        <i>Suas informações estão protegidas</i>
                    </div>
                </div>
                <hr />
            </div>



            <div class="grid grid-cols-3 mb-8">
                <div class={`bar ${active_index > 1 ? 'bar-completed' : ''} ${active_index == 1 ? 'bar-active' : ''}`}>
                    <strong>
                    1
                    </strong>
                    <span class="hidden md:block">Dados do candidato</span>
                </div>
                <div class={`bar ${active_index > 2 ? 'bar-completed' : ''} ${active_index == 2 ? 'bar-active' : ''}`}>
                    <strong>
                    2
                    </strong>
                    <span class="hidden md:block">Dados complementares</span>
                </div>
                <div class={`bar ${active_index == 3 ? 'bar-active' : ''}`}>
                    <strong>
                    3
                    </strong>
                    <span class="hidden md:block">Confirmação de inscrição</span>
                </div>

            </div>
            <div class="flex justify-between ">
                <div class="flex">
                    <span class="text-lg lg:text-3xl step-bullet">2</span>
                    <div class="ml-4">
                        <span class="text-lg lg:text-3xl ">Estamos quase lá!</span><br></br>
                        <span>Digite seus dados no formulário abaixo e garanta sua <strong> inscrição gratuita.</strong></span>
                    </div>
                </div>
                <div class="safe-badge hidden md:flex">
                    <i class="icon mr-4"></i>
                    <div>
                        <b>Site Seguro</b><br></br>
                        <i>Suas informações estão protegidas</i>
                    </div>
                </div>
            </div>
        </div>
    );
}

