import porqueParticipar from "@/app/Pages/Home/Assets/porqueParticipar.png"
import Image from "next/image";
import Link from "next/link";

export default function PorqueParticipar() {
    return (
        <section id="porque-participar" className="w-full h-auto  bg-cover flex items-center justify-center bg-center bg-no-repeat bg-white pb-[80px] pt-[80px] ">
            <div className="w-[90%] lg:w-full max-w-[1200px] gap-10  h-full flex lg:flex-row flex-col items-center justify-between">
                <div className="w-full lg:w-1/2 h-full  flex justify-end items-end relative ">
                    <Image className="object-cover" width={1000} height={1000} quality={100} src={porqueParticipar.src} alt="Foto Do Alex, Head do Ondetah Homem Branco, de Cabelo Branco com uma camiseta preta" />
                </div>
                <div className="lg:w-1/2 flex gap-3 flex-col h-auto">
                    <h1 className="text-textPrimaryColor text-4xl font-bold">
                        Por que participar?
                    </h1>
                    <p className="text-black">
                        O UX Update é uma série de webinars criada para capacitar nossos clientes e usuários nos produtos do UX Group. Essa é sua oportunidade de conhecer, explorar e aproveitar ao máximo o Ondetah, a plataforma líder em gestão de entregas.
                    </p>
                    <p className="text-black font-medium">
                        Neste primeiro episódio, nosso Head do Produto, Alex Coelho, compartilhará práticas fundamentais, abordará desafios comuns e guiará um treinamento com casos práticos.
                    </p>
                    <button className="lg:w-1/2 w-full px-10 font-medium hover:scale-95 transition duration-300 bg-secondColor text-black ">
                    <Link className="flex w-full h-full justify-center items-center" href={"#formulario"}>Quero me inscrever</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}