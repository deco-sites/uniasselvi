import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image?: ImageWidget;
  alt?: string;
}

function LeuApp({
  image = "",
  alt = "",
}: Props) {
  return (
    <section class="bg-[linear-gradient(157deg,_rgba(244,244,244,1)_0%,_rgba(244,244,244,1)_77%,_rgba(254,223,17,1)_77%,_rgba(255,221,0,1)_100%)]">
      <div class="container px-[1rem] py-10">
        {/* <div class="flex flex-col md:flex-row items-center gap-8"> */}
        <div class="grid md:grid-cols-3 md:row-span-6 w-full md:gap-x-8">
          <h2 class="md:col-start-1 md:col-span-2 md:order-1 text-xl md:lg:text-3xl lg:text-5xl text-black font-bold text-center md:text-left mb-6">
            Leo App
          </h2>
          <p class="md:col-start-1 md:col-span-2 md:order-2 text-lg text-black font-semibold text-center md:text-left mb-6">
            Uma nova forma de aprender!
          </p>
          <div class="md:col-start-3 md:row-start-1 md:row-span-6 md:order-7 mb-6 md:mb-0 flex justify-center">
            {image && (
              <Image
                class="block w-full max-w-[267px] md:max-w-full"
                src={image || ""}
                alt={alt || ""}
              />
            )}
          </div>
          <p class="md:col-start-1 md:col-span-2 md:order-4 text-md text-black font-base text-center md:text-left">
            Muito mais benefícios no Leo App:
          </p>

          <div class="md:col-start-1 md:col-span-2 md:order-5 flex gap-3 md:gap-8 my-10 overflow-x-auto md:overflow-x-visible">
            <div class="min-w-[175px] md:min-w-0 md:flex-1 border border-black rounded-lg p-2 md:p-5">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.667 10.667a7.333 7.333 0 1 1 11.461 6.063 12.007 12.007 0 0 1 7.867 10.907 1 1 0 0 1 -2 0.06 10 10 0 0 0 -19.991 0 1 1 0 0 1 -1.999 -0.059 12.007 12.007 0 0 1 7.867 -10.908A7.333 7.333 0 0 1 4.667 10.667M12 5.333a5.333 5.333 0 1 0 0 10.667 5.333 5.333 0 0 0 0 -10.667"
                >
                </path>
                <path d="M23.053 10.667q-0.295 0 -0.579 0.04a1 1 0 1 1 -0.283 -1.979 6.04 6.04 0 0 1 4.507 10.796 8.92 8.92 0 0 1 5.275 8.143 1 1 0 0 1 -2 0 6.92 6.92 0 0 0 -4.928 -6.629l-0.712 -0.213v-2.235l0.547 -0.279A4.04 4.04 0 0 0 23.053 10.667">
                </path>
              </svg>
              <p class="text-sm md:text-lg text-black mt-2">
                Atendimento humano focado no que é melhor para você!
              </p>
            </div>
            <div class="min-w-[175px] md:min-w-0 md:flex-1 border border-black rounded-lg p-2 md:p-5">
              <svg
                fill="#000000"
                width="32px"
                height="32px"
                viewBox="0 0 0.96 0.96"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.232 0.602a0.02 0.02 0 0 1 0.016 0.002 0.26 0.26 0 1 0 -0.091 -0.091 0.02 0.02 0 0 1 0.002 0.016l-0.029 0.102zm0.436 -0.309a0.3 0.3 0 0 1 0.175 0.433l0.037 0.129a0.02 0.02 0 0 1 -0.025 0.025l-0.129 -0.037a0.3 0.3 0 0 1 -0.433 -0.175 0.3 0.3 0 0 1 -0.058 -0.025l-0.129 0.037a0.02 0.02 0 0 1 -0.025 -0.025l0.037 -0.129a0.3 0.3 0 1 1 0.55 -0.233m0.01 0.046Q0.68 0.359 0.68 0.38a0.3 0.3 0 0 1 -0.341 0.297 0.26 0.26 0 0 0 0.374 0.126 0.02 0.02 0 0 1 0.016 -0.002l0.102 0.029 -0.029 -0.102a0.02 0.02 0 0 1 0.002 -0.016A0.26 0.26 0 0 0 0.677 0.339">
                </path>
              </svg>
              <p class="text-sm md:text-lg text-black mt-2">
                Tire dúvidas com seus tutores online e sem burocracia.
              </p>
            </div>
            <div class="min-w-[175px] md:min-w-0 md:flex-1 border border-black rounded-lg p-2 md:p-5">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 40.96 40.96"
                class="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M28.16 30.72V10.24H5.12v20.48zm2.56 -16.64 7.68 -3.84v20.48l-7.68 -3.84v5.12a1.28 1.28 0 0 1 -1.28 1.28H3.84a1.28 1.28 0 0 1 -1.28 -1.28V8.96a1.28 1.28 0 0 1 1.28 -1.28h25.6a1.28 1.28 0 0 1 1.28 1.28zm0 2.862v7.076l5.12 2.56V14.382zM7.68 12.8h7.68v2.56H7.68z"
                >
                </path>
              </svg>
              <p class="text-sm md:text-lg text-black mt-2">
                Acesse a biblioteca virtual e sua grade curricular.
              </p>
            </div>
          </div>

          <p class="md:col-start-1 md:col-span-2 md:order-6 text-lg text-black font-semibold text-center md:text-left mb-6">
            Experiência fluida e você não paga pelos dados usados nele!
          </p>

          <div class="md:col-start-1 md:col-span-2 md:order-7 flex justify-center md:justify-start gap-2 md:gap-8">
            <a
              href=""
              class="flex items-center gap-4 md:gap-7 bg-black py-2 px-2 md:px-5 w-fit md:w-[211px] rounded"
            >
              <svg
                class="block"
                width="21px"
                height="21px"
                viewBox="0 0 0.84 0.84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.788 0.428c0 -0.03 -0.002 -0.052 -0.008 -0.075H0.428v0.136h0.207c-0.004 0.034 -0.027 0.085 -0.077 0.119l-0.001 0.005 0.111 0.085 0.008 0.001c0.071 -0.064 0.112 -0.158 0.112 -0.27"
                  fill="#4285F4"
                >
                </path>
                <path
                  d="M0.428 0.787c0.101 0 0.186 -0.033 0.248 -0.089l-0.118 -0.09c-0.032 0.022 -0.074 0.037 -0.13 0.037A0.225 0.225 0 0 1 0.214 0.493l-0.004 0 -0.116 0.088 -0.002 0.004C0.154 0.705 0.281 0.787 0.428 0.787"
                  fill="#34A853"
                >
                </path>
                <path
                  d="M0.214 0.493A0.223 0.223 0 0 1 0.202 0.42c0 -0.025 0.005 -0.05 0.012 -0.073l0 -0.005L0.096 0.253l-0.004 0.002A0.362 0.362 0 0 0 0.052 0.42c0 0.059 0.015 0.115 0.04 0.165z"
                  fill="#FBBC05"
                >
                </path>
                <path
                  d="M0.428 0.195c0.07 0 0.118 0.03 0.145 0.055l0.106 -0.101C0.613 0.089 0.529 0.052 0.428 0.052 0.281 0.052 0.154 0.135 0.093 0.255l0.121 0.092c0.03 -0.089 0.115 -0.153 0.214 -0.153"
                  fill="#EB4335"
                >
                </path>
              </svg>
              <span class="block w-[1px] h-full bg-[#505050]"></span>
              <div>
                <p class="text-xs text-white">Acesse:</p>
                <p class="text-md text-white">Google Play</p>
              </div>
            </a>
            <a
              href=""
              class="flex items-center gap-4 md:gap-7 bg-black py-2 px-2 md:px-5 w-fit md:w-[211px] rounded"
            >
              <svg
                class="block"
                fill="#fff"
                width="24px"
                height="24px"
                viewBox="-0.105 -0.06 0.72 0.72"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                class="jam jam-apple"
              >
                <path d="M0.409 0.319c-0.001 -0.076 0.062 -0.112 0.065 -0.114 -0.035 -0.052 -0.09 -0.059 -0.11 -0.059 -0.047 -0.005 -0.091 0.028 -0.115 0.028 -0.024 0 -0.06 -0.027 -0.099 -0.026C0.099 0.147 0.052 0.176 0.026 0.222c-0.053 0.092 -0.014 0.228 0.038 0.302 0.025 0.036 0.055 0.077 0.095 0.076 0.038 -0.002 0.052 -0.025 0.098 -0.025s0.059 0.025 0.099 0.024c0.041 -0.001 0.067 -0.037 0.092 -0.074 0.029 -0.042 0.041 -0.083 0.042 -0.085 -0.001 0 -0.08 -0.031 -0.081 -0.121zm-0.076 -0.223c0.021 -0.025 0.035 -0.061 0.031 -0.096C0.334 0.001 0.298 0.02 0.276 0.045c-0.019 0.022 -0.036 0.058 -0.032 0.093 0.034 0.003 0.068 -0.017 0.089 -0.042">
                </path>
              </svg>
              <span class="block w-[1px] h-full bg-[#505050]"></span>
              <div>
                <p class="text-xs text-white">Acesse:</p>
                <p class="text-md text-white">Apple Store</p>
              </div>
            </a>
          </div>
        </div>
        {
          /* <div class="order-3 md:order- flex-[1_1_auto] w-full md:w-[30%]">
                        {image && (
                            <Image
                                class="block w-full"
                                src={image || ""}
                                alt={alt || ""}
                            />
                        )}
                    </div> */
        }
        {/* </div> */}
      </div>
    </section>
  );
}

export default LeuApp;
