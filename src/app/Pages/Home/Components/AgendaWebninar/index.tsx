import Image from "next/image";
import logoOndetah from "@/app/Pages/Home/Assets/ondetahLogo.svg"
import { LuCalendarPlus, LuLightbulb } from "react-icons/lu";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsDisplay, BsQuestionSquare } from "react-icons/bs";
import { RxStar } from "react-icons/rx";
import juliana from "@/app/Pages/Home/Assets/JulianaPhoto.png"
import alex from "@/app/Pages/Home/Assets/AlexPhoto.png"
import erick from "@/app/Pages/Home/Assets/erickPhoto.png"


export default function AgendaWebinar() {

    const Apresentadores = [
        {
            photo: alex,
            name: "Alex Coelho",
            cargo: "Head de Produto | Ondetah"
        },
        {
            photo: erick,
            name: "Erick Gimenes",
            cargo: "Tech Lead | Ondetah"
        },
        {
            photo: juliana,
            name: "Juliana Lopes",
            cargo: "Head de Growth"
        },


    ]

    const content = [
        {
            title: "Abertura e introdução",
            icon: FaRegCirclePlay,
            listContent: [
                {
                    text: "Boas-vindas com Juliana, Head of Growth da UX Group",
                },
                {
                    text: "Apresentação do produto.",
                },
            ]
        },
        {
            title: "Soluções do produto",
            icon: LuLightbulb,
            listContent: [
                {
                    text: "Comunicação e Avaliações: Criação de links de rastreamento, regras de avaliação e engajamento.",
                },
                {
                    text: "Gestão de Ocorrências e Transportadoras:  Controle e monitoramento do SLA de transportadoras",
                },
                {
                    text: "Análise de Performance e Predições:  Métricas de prazo, matriz de risco e ações preventivas",
                }
            ]
        },
        {
            title: "Demonstração ao vivo",
            icon: BsDisplay,
            listContent: [
                {
                    text: "Apresentação prática com demonstração das principais funcionalidades e ferramentas",
                }
            ]
        },
        {
            title: "Benefícios e resultados",
            icon: RxStar,
            listContent: [
                {
                    text: "Redução de custos com atendimento e aumento da satisfação e recompra",
                }
            ]
        },
        {
            title: "Perguntas e respostas",
            icon: BsQuestionSquare,
            listContent: [
                {
                    text: "Sessão de esclarecimento com o time de especialistas",
                }
            ]
        },
    ]

    return (
        <section id="agenda" className="w-full h-auto  bg-cover flex items-center justify-center bg-center bg-no-repeat bg-white pb-[80px] pt-[80px] ">
            <div className="w-[90%] lg:w-full max-w-[1200px] gap-10  h-full flex lg:flex-row flex-col items-start justify-between">
                <div className="lg:w-2/5 flex items-start justify-start gap-3 flex-col h-full">
                    <h1 className="text-4xl pb-5 font-bold text-textPrimaryColor">
                        Agenda do webinar:
                    </h1>
                    <div className="w-[250px] p-2 h-14 gap-2 flex items-center text-white text-2xl justify-center bg-black rounded-lg">
                        <p className="pt-1 font-extralight">Edição 1:</p>
                        <Image className="w-[45%]" src={logoOndetah} alt="Logo Ondetah" />
                    </div>
                    <p className="w-auto flex text-black items-center gap-2 font-medium h-10">
                        <LuCalendarPlus />
                        13/11/2024 - 17:00hrs
                    </p>
                    <h1 className="text-primaryColor text-4xl font-bold">
                        <span className="text-black">Webinar:</span>  Funcionalidades e soluções do produto.
                    </h1>
                    <p className="w-auto  flex text-black items-center gap-2 h-10">
                        Apresentado por:
                    </p>
                    <div className="flex flex-col lg:items-center w-auto gap-5 lg:gap-5 justify-start">
                        {
                            Apresentadores.map((i, key) => (
                                <div key={key} className="w-full flex gap-3 items-center h-auto">
                                    <div className="w-16 h-16 flex items-end justify-center rounded-full shadow-md bg-custom-linear">
                                        <Image width={1000} height={1000} quality={100} className="object-cover rounded-b-full" src={i.photo} alt="Apresentador(a)" />
                                    </div>
                                    <div className="w-auto flex flex-col h-full">
                                        <h2 className="text-sm font-bold text-black">
                                            {i.name}
                                        </h2>
                                        <p className="text-sm">
                                            {i.cargo}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button className="lg:w-3/5 w-full lg:flex hidden items-center justify-center mt-3 px-10 font-medium hover:scale-95 transition duration-300 bg-secondColor text-black ">
                        <Link className="flex w-full h-full justify-center items-center" href={"#formulario"}>Quero me inscrever</Link>
                    </button>
                </div>
                <div className="lg:w-3/5 flex gap-3 flex-col h-auto">
                    {
                        content.map((i, key) => (
                            <div key={key} className="p-6 border flex flex-col shadow-md gap-5 w-full h-auto  rounded-t-2xl">
                                <div className="h-10 pl-3 flex text-textPrimaryColor gap-3 items-center justify- w-[300px] rounded-full border-textPrimaryColor border">
                                    <i.icon />
                                    <h3 className="text-primaryColor text-xl font-bold">
                                        {i.title}
                                    </h3>
                                </div>
                                <ul className="w-full flex flex-col gap-3 ">
                                    {
                                        i.listContent.map((h, key) => (
                                            <li key={key} className="flex items-center">
                                                <TiArrowSortedDown className="-rotate-90 text-5xl lg:text-3xl" />
                                                <p className="text-sm">{h.text}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
                <button className="lg:w-1/4 w-full lg:hidden flex items-center justify-center px-10 font-medium hover:scale-95 transition duration-300 bg-secondColor text-black ">
                    <Link className="flex w-full h-full justify-center items-center" href={"#formulario"}>Quero me inscrever</Link>
                </button>
            </div>
        </section>
    )
}