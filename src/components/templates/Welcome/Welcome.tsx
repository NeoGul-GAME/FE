import neogul from "@/assets/images/neogul-background-removed.webp";
import Image from "@/components/atoms/Image";
import Logo from "@/components/atoms/Logo";
import Buttons from "@/components/templates/Welcome/Buttons";

export default function Welcome() {
    return (
        <div className="h-full grid grid-rows-[70svh,_30svh]">
            <div className="pt-[20svh] flex justify-center items-end">
                <div className="absolute w-[40vh] h-[70svh] pt-[25svh] flex justify-center items-start">
                    <Logo className="relative bottom-[5rem]" />
                </div>
                <Image
                    className="h-full animate-bounce-rotate relative -z-10"
                    src={neogul}
                    alt="Neogul"
                />
            </div>

            <div className="flex justify-center">
                <Welcome.Buttons />
            </div>
        </div>
    );
}

Welcome.Buttons = Buttons;
