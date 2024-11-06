import Image from "next/image";
import Link from "next/link";
import bag from "@/app/Pages/Home/Assets/icons/bagShop.svg"
import smile from "@/app/Pages/Home/Assets/icons/smile.svg"
import phone from "@/app/Pages/Home/Assets/icons/phone.svg"

export default function Beneficios() {

    const content = [
        {
            title: "Redução de custos e SAC:",
            text: "Automatize notificações e avaliações para otimizar a operação e reduzir o volume de reclamações.",
            icon: phone
        },
        {
            title: "Aumento da satisfação do cliente:",
            text: "Ofereça transparência e proatividade na comunicação de entregas e atrasos.",
            icon: smile
        },
        {
            title: "Melhoria na taxa de recompra:",
            text: "Melhore a experiência do cliente com uma gestão de entrega eficiente e aumente a recompra.",
            icon: bag
        },
    ]

    return (
        <section id="beneficios" className="w-full h-auto  bg-cover flex items-center justify-center bg-center bg-no-repeat bg-thirdColor pb-[80px] pt-[80px] ">
            <div className="w-[90%] lg:w-full max-w-[1200px] gap-10  h-full flex lg:flex-row flex-col items-center justify-between">

                <div className="w-full items-center justify-center flex gap-10 flex-col h-auto">
                    <h1 className="text-white text-center text-4xl font-bold">
                        Benefícios de participar:
                    </h1>
                    <div className="w-full h-auto lg:gap-10 gap-5 justify-evenly items-center flex lg:flex-row flex-col">
                        {
                            content.map((i,key) => (
                                <div key={key} className="h-[270px] flex items-center lg:items-start justify-center  flex-col gap-3 lg:w-[300px]">
                                    <Image src={i.icon} alt="Icones representativos"/>
                                    <h1 className="text-[26px] font-bold lg:text-start text-center text-primaryColor">
                                        {i.title}
                                    </h1>
                                    <p className="text-white lg:text-start text-center font-extralight">
                                        {i.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <button className="lg:w-1/4 w-full px-10 font-medium hover:scale-95 transition duration-300 bg-secondColor text-black ">
                    <Link className="flex w-full h-full justify-center items-center" href={"#formulario"}>Quero me inscrever</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}