import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
export interface Props {
    active_index: number;
    image?: ImageWidget;
}

export default function TopBar({
    active_index,
    image
}:Props) {
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
            { active_index === 2 && (
                <div className="flex justify-between">
                    <div className="flex">
                        <span className="text-lg lg:text-3xl step-bullet">2</span>
                        <div className="ml-4">
                            <span className="text-lg lg:text-3xl">Estamos quase lá!</span><br></br>
                            <span>Digite seus dados no formulário abaixo e garanta sua <strong>inscrição gratuita.</strong></span>
                        </div>
                    </div>
                    <div className="safe-badge hidden md:flex">
                        <i className="icon mr-4"></i>
                        <div>
                            <b>Site Seguro</b><br></br>
                            <i>Suas informações estão protegidas</i>
                        </div>
                    </div>
                </div>
            )}
            {active_index === 3 && (
                <section class="relative overflow-hidden px-[1rem]">
                    <div class="min-h-full min-w-full aspect-video absolute top-0 left-[50%] translate-x-[-50%] bg-[#1b1c1d]">
                        {image && (
                            <Image
                                class="block min-w-full h-full opacity-30 bg-center"
                                src={image || ""}
                            />
                        )}
                    </div>
                    <div class="absolute top-0 w-full h-full h-full flex container gap-[24px] relative px-10 py-[60px] md:py-[150px] md:px-[200px]">
                        <div class="text-center">
                            <p class="text-[#ffdd00] uppercase text-[27px]"><strong>Inscrição Realizada com Sucesso!</strong></p>
                            <p class="text-white text-lg my-6"><strong>Parabéns!</strong> Agora, a sua matrícula pode ser feita diretamente pelo nosso aplicativo Leo App:</p>
                            <div class="flex flex-col md:flex-row gap-8 justify-center">
                                <a href="" class="flex items-center gap-7 bg-black py-2 px-5 w-fit">
                                    <svg class="block" width="21px" height="21px" viewBox="0 0 0.84 0.84" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.788 0.428c0 -0.03 -0.002 -0.052 -0.008 -0.075H0.428v0.136h0.207c-0.004 0.034 -0.027 0.085 -0.077 0.119l-0.001 0.005 0.111 0.085 0.008 0.001c0.071 -0.064 0.112 -0.158 0.112 -0.27" fill="#4285F4"></path><path d="M0.428 0.787c0.101 0 0.186 -0.033 0.248 -0.089l-0.118 -0.09c-0.032 0.022 -0.074 0.037 -0.13 0.037A0.225 0.225 0 0 1 0.214 0.493l-0.004 0 -0.116 0.088 -0.002 0.004C0.154 0.705 0.281 0.787 0.428 0.787" fill="#34A853"></path><path d="M0.214 0.493A0.223 0.223 0 0 1 0.202 0.42c0 -0.025 0.005 -0.05 0.012 -0.073l0 -0.005L0.096 0.253l-0.004 0.002A0.362 0.362 0 0 0 0.052 0.42c0 0.059 0.015 0.115 0.04 0.165z" fill="#FBBC05"></path><path d="M0.428 0.195c0.07 0 0.118 0.03 0.145 0.055l0.106 -0.101C0.613 0.089 0.529 0.052 0.428 0.052 0.281 0.052 0.154 0.135 0.093 0.255l0.121 0.092c0.03 -0.089 0.115 -0.153 0.214 -0.153" fill="#EB4335"></path></svg>
                                    <span class="block w-[1px] h-full bg-[#505050]"></span>
                                    <div>
                                        <p class="text-xs text-white">Acesse:</p>
                                        <p class="text-md text-white">Google Play</p>
                                    </div>
                                </a>
                                <a href="" class="flex items-center gap-7 bg-black py-2 px-5 w-fit">
                                    <svg class="block" fill="#fff" width="24px" height="24px" viewBox="-0.105 -0.06 0.72 0.72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-apple"><path d="M0.409 0.319c-0.001 -0.076 0.062 -0.112 0.065 -0.114 -0.035 -0.052 -0.09 -0.059 -0.11 -0.059 -0.047 -0.005 -0.091 0.028 -0.115 0.028 -0.024 0 -0.06 -0.027 -0.099 -0.026C0.099 0.147 0.052 0.176 0.026 0.222c-0.053 0.092 -0.014 0.228 0.038 0.302 0.025 0.036 0.055 0.077 0.095 0.076 0.038 -0.002 0.052 -0.025 0.098 -0.025s0.059 0.025 0.099 0.024c0.041 -0.001 0.067 -0.037 0.092 -0.074 0.029 -0.042 0.041 -0.083 0.042 -0.085 -0.001 0 -0.08 -0.031 -0.081 -0.121zm-0.076 -0.223c0.021 -0.025 0.035 -0.061 0.031 -0.096C0.334 0.001 0.298 0.02 0.276 0.045c-0.019 0.022 -0.036 0.058 -0.032 0.093 0.034 0.003 0.068 -0.017 0.089 -0.042"></path></svg>
                                    <span class="block w-[1px] h-full bg-[#505050]"></span>
                                    <div>
                                        <p class="text-xs text-white">Acesse:</p>
                                        <p class="text-md text-white">Apple Store</p>
                                    </div>
                                </a>
                            </div>
                            <p class="text-white text-lg my-6">Assim que você instalar o nosso aplicativo, você não gasta mais seu pacote de dados para utilizar o Leo App. Além de realizar sua matricula, este é o aplicativo que você vai utilizar em seus estudos.</p>
                            <p class="text-white text-lg my-6">Caso você tenha alguma dificuldade, ou precise tirar alguma dúvida sobre a sua matrícula não hesite em entrar em contato conosco através do WhatsApp, <a href='#'>clicando aqui</a>.</p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

