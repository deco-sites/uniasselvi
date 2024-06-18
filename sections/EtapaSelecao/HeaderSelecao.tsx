import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    back_href?: string;
    image?: ImageWidget;
}

export default function Section({image, back_href}: Props){
    const styles = {
        header: {
          backgroundColor: "#ffdb1b"
        }
    };
    return (
        <div class="py-3 px-3 md:py-5" style={styles.header}>
            <div class="container">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-3 flex items-center">
                    {image && (
                    <Image
                        src={image || ""}
                        width={120}
                    />
                    )}
                    </div>
                    <div class="col-span-5 flex items-center text-lg lg:text-4xl font-bold">VESTIBULAR 2024</div>
                    <div class="col-span-4 flex items-center justify-end font-bold text-lg lg:text-xl">
                        <a class="invisible md:visible" target="_blank" href={back_href}>Voltar aos cursos</a>
                        <a class="visible md:invisible" target="_blank" href={back_href}>Voltar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}