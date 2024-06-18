import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    back_href?: string;
    image?: ImageWidget;
}

export default function Section({image, back_href}: Props){
    const styles = {
        header: {
          backgroundColor: "#000"
        }
    };
    return (
        <div class="py-3 px-3 md:py-5" style={styles.header}>
            <div class="container">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-3 hidden md:block">
                    {image && (
                    <Image class="block"
                        src={image || ""}
                        width={65}
                    />
                    )}
                    <br/>
                    <div class="mt-2 text-white ml-3">2024</div>
                    </div>
                    <div class="col-span-12 md:col-span-9 text-center md:text-right text-white">
                      <span class="font-bold">Restam poucas vagas para o curso de Enfermagem nesse polo.</span><br/>
                      <span>Não perca a oportunidade de dar mais um passo em direção ao seu futuro: <span  class="font-bold">garanta seu lugar na próxima turma.</span> </span>
                      
                    </div>

                </div>
            </div>
        </div>
    );
}