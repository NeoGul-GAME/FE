import neogul from "@/assets/images/neogul-background-removed.webp";
import Image from "@/components/atoms/Image";
import Logo from "@/components/atoms/Logo";
import Buttons from "@/components/templates/Welcome/Buttons";

export default function Welcome() {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div>
                <div className="fixed w-[40vh] h-[40vh] flex justify-center items-start">
                    <Logo className="relative bottom-[3rem]" />
                </div>
                <Image
                    className="max-h-[40vh] animate-bounce-rotate relative -z-10"
                    src={neogul}
                    alt="Neogul"
                />
            </div>

            <Welcome.Buttons className="mt-10 sm:mt-0" />
        </div>
    );
}

Welcome.Buttons = Buttons;
