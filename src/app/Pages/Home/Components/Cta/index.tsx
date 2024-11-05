import bannerCta from "@/app/Pages/Home/Assets/bannerCta.png"
import iconReturn from "@/app/Pages/Home/Assets/iconReturn.svg"
import Image from "next/image"
import Link from "next/link"

export function Cta() {
    return (
        <section style={{ backgroundImage: `url(${bannerCta.src})` }} className="w-full bg-cover flex items-center justify-center bg-center lg:bg-center bg-no-repeat bg-primary pt-[100px] pb-[100px] h-auto">
            <div className="w-[90%] lg:w-full max-w-[1200px] h-full lg:flex-row flex-col flex items-center justify-between">
                <div className="w-full flex items-start justify-start gap-3 flex-col h-full">
                    <Image src={iconReturn} alt="Icone return" />
                    <h1 className="text-4xl font-bold text-secondColor">
                        Inscreva-se agora:
                    </h1>
                    <p className="text-white font-medium">
                        Garanta a melhor experiência de entrega com o Ondetah. Participe do UX Update e otimize seus processos com uma solução completa.
                    </p>
                    <p className="text-white">
                        Não perca esta oportunidade de transformar a experiência logística da sua operação. Clique no botão abaixo para garantir sua vaga e receber o link da sala para o evento!
                    </p>
                    <button className="lg:w-1/4 w-full flex items-center justify-center mt-3 px-10 font-medium hover:scale-95 transition duration-300 bg-secondColor text-black ">
                        <Link className="flex w-full h-full justify-center items-center" href={"#formulario"}>Quero me inscrever</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}