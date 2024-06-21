import { asset, Head } from "$fresh/runtime.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    image?: ImageWidget;
    /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
    text_1?: string;
    text_2?: string;
  }

function Navbar({
    image ="",
    text_1 = "Made with",
    text_2 = "Made with",
  }: Props) {
    return (
    <nav class="fixed z-50 bg-white w-full shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.05),_0px_1px_10px_0px_rgba(0,_0,_0,_0.05),_0px_4px_5px_0px_rgba(0,_0,_0,_0.08)]">
        <div class="container px-[1rem]">
            <div class="drawer">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
                <div class="drawer-content flex flex-col">
                    <div class="w-full navbar p-0">
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div> 
                        <div class="flex-1 px-2 mx-2">
                            {/* <img src="/logo-horizontal_desk.png" width="130px" alt="" /> */}
                            {image && (
                                <Image
                                    width={130}
                                    src={image || ""}
                                    // alt={alt || ""}
                                    // height={height || 54}
                                    // width={width || 220}
                                />
                            )}
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal p-0">
                                <li>
                                    <div class="dropdown dropdown-hover p-0 bg-transparent rounded-md ">
                                        <div tabindex="0" role="button" class="btn text-xl font-bold text-black hover:text-white bg-transparent border-0 shadow-none m-1">Institucional</div>
                                        <ul tabindex="0" class="dropdown-content z-[1] menu p-0 shadow-[0_2px_5px_0_rgba(0,_0,_0,_.16),_0_2px_10px_0_rgba(0,_0,_0,_.12)] bg-white rounded-[3px] min-w-52 top-full ml-1">
                                            <li><a class="text-lg text-black font-semibold py-3 px-5">Item 1</a></li>
                                            <li><a class="text-lg text-black font-semibold py-3 px-5">Item 2</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown dropdown-hover p-0 bg-transparent rounded-md ">
                                        <div tabindex="0" role="button" class="btn text-xl font-bold text-black hover:text-white bg-transparent border-0 shadow-none m-1">Graduação</div>
                                        <ul tabindex="0" class="dropdown-content z-[1] menu p-0 shadow-[0_2px_5px_0_rgba(0,_0,_0,_.16),_0_2px_10px_0_rgba(0,_0,_0,_.12)] bg-white rounded-[3px] min-w-52 top-full ml-1">
                                            <li><a href="/graduacao" class="text-lg text-black font-semibold py-3 px-5">Nossos Cursos</a></li>
                                            <li><a class="text-lg text-black font-semibold py-3 px-5">Item 2</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown dropdown-hover p-0 bg-transparent rounded-md ">
                                        <div tabindex="0" role="button" class="btn text-xl font-bold text-black hover:text-white bg-transparent border-0 shadow-none m-1">Pós-graduação</div>
                                        <ul tabindex="0" class="dropdown-content z-[1] menu p-0 shadow-[0_2px_5px_0_rgba(0,_0,_0,_.16),_0_2px_10px_0_rgba(0,_0,_0,_.12)] bg-white rounded-[3px] min-w-52 top-full ml-1">
                                            <li><a class="text-lg text-black font-semibold py-3 px-5">Item 1</a></li>
                                            <li><a class="text-lg text-black font-semibold py-3 px-5">Item 2</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown dropdown-hover p-0 bg-transparent rounded-md ">
                                        <div tabindex="0" role="button" class="btn text-xl font-bold text-black hover:text-white bg-transparent border-0 shadow-none m-1">Técnicos e Profissionalizantes</div>
                                        <ul tabindex="0" class="dropdown-content z-[1] menu p-0 shadow-[0_2px_5px_0_rgba(0,_0,_0,_.16),_0_2px_10px_0_rgba(0,_0,_0,_.12)] bg-white rounded-[3px] min-w-52 top-full ml-1">
                                            <li><a class="text-lg text-black font-semibold py-3 px-5">Item 1</a></li>
                                            <li><a class="text-lg text-black font-semibold py-3 px-5">Item 2</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown dropdown-hover p-0 bg-transparent rounded-md ">
                                        <div tabindex="0" role="button" class="btn text-xl font-bold text-black hover:text-white bg-transparent border-0 shadow-none m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px"  viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" stroke="#000000"/></svg>
                                        </div>
                                        <ul tabindex="0" class="dropdown-content z-[1] menu p-0 shadow-[0_2px_5px_0_rgba(0,_0,_0,_.16),_0_2px_10px_0_rgba(0,_0,_0,_.12)] bg-white rounded-[3px] min-w-52 top-full ml-1">
                                            <li><a class="text-lg text-black font-semibold py-3 px-5">Item 1</a></li>
                                            <li><a class="text-lg text-black font-semibold py-3 px-5">Item 2</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> 
                    <div class="drawer-side">
                        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
                        <ul class="menu p-4 w-80 min-h-full bg-base-200">
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;