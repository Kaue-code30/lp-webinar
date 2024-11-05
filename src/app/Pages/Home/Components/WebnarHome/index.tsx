import Image from "next/image";
import logoOndetah from "@/app/Pages/Home/Assets/ondetahLogo.svg"
import alexBanner from "@/app/Pages/Home/Assets/alexBanner.png"
import { LuCalendarPlus } from "react-icons/lu";
import Link from "next/link";
import bannerHero from "@/app/Pages/Home/Assets/Bg-hero.png"

export default function WebnarHome() {

    

    return (
        <section style={{ backgroundImage: `url(${bannerHero.src})` }} className="w-full h-auto lg:h-[90vh] bg-cover flex items-center justify-center bg-center bg-no-repeat bg-custom-linear  pt-[100px] ">
            <div className="w-[90%] lg:w-full max-w-[1200px] gap-10  h-full flex lg:flex-row flex-col items-center justify-between">
                <div className="lg:w-1/2 flex gap-3 flex-col h-auto">
                    <div className="w-[250px] p-2 h-14 gap-2 flex items-center text-white text-2xl justify-center bg-black rounded-lg">
                        <p className="pt-1 font-extralight">Edição 1:</p>
                        <Image className="w-[45%]" src={logoOndetah} alt="Logo Ondetah" />
                    </div>
                    <p className="w-auto flex text-white items-center gap-2 font-medium h-10">
                        <LuCalendarPlus color="#FFF" />
                        13/11/2024 - 17:00hrs
                    </p>
                    <h1 className="text-primaryColor text-4xl font-bold">
                        <span className="text-white">Webinar:</span>  Funcionalidades e soluções do produto.
                    </h1>
                    <p className="text-white">
                    Garanta o uso correto e completo do Ondetah, inserindo suas novas funcionalidades na rotina operacional da sua equipe. Neste treinamento, oferecemos um guia completo do produto e estratégias de implementação.
                    </p>
                    <div className="w-auto flex lg:flex-row flex-col  items-center justify-start gap-4 h-auto lg:h-12">
                        <button className="lg:w-auto w-full px-10 font-medium hover:scale-95 transition duration-300 bg-secondColor text-black ">
                            <Link className="flex w-full h-full justify-center items-center" href={"#formulario"}>Quero me inscrever</Link>
                        </button>
                        <button className="lg:w-auto w-full px-10 font-medium hover:scale-95 transition duration-300 bg-[#1E1E1E] text-white ">
                            <Link className="flex w-full h-full justify-center items-center" href={"#porque-participar"}>Saiba mais</Link>
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-full  flex justify-end items-end relative ">
                    <Image className="object-cover" width={1000} height={1000} quality={100} src={alexBanner.src} alt="Foto Do Alex, Head do Ondetah Homem Branco, de Cabelo Branco com uma camiseta preta" />
                </div>
            </div>
        </section>
    )
}