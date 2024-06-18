
export interface Props {
    active_index: number;

}

export default function TopBar({active_index}:Props) {
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

