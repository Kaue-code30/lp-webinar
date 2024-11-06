import Image from "next/image";
import logoBranco from "@/app/Pages/Home/Assets/logoUpdateBranco.svg";
import Link from "next/link";
import poweredUX from "@/app/Pages/Home/Assets/powered-by-ux.svg";

export default function Footer() {
    const jsonList = [
        {
            index: 0,
            nameLink: "Porque participar?",
            link: "#porque-participar"
        },
        {
            index: 1,
            nameLink: "Benefícios de participar",
            link: "#beneficios"
        },
        {
            index: 2,
            nameLink: "Agenda do webnair",
            link: "#agenda"
        },
    ]

    return (
        <footer className="w-full bg-cover lg:pt-0 pt-10 flex items-center flex-col justify-center bg-center bg-no-repeat bg-[#014C34] h-auto    ">
            <div className="w-[90%] lg:w-full  max-w-[1200px] lg:pb-0 pb-7 gap-5 lg:gap-10 h-full flex text-white flex-col lg:flex-row lg:items-center justify-between">
                <Image className="w-36" width={100} height={100} alt="" src={logoBranco} />
                <div className="w-auto lg:flex-row flex-col flex items-center justify-end h-auto lg:h-[150px]">
                    <ul className={`lg:flex lg:items-center flex lg:flex-row flex-col w-full justify-end gap-5`}>
                        {jsonList.map((i, key) => (
                            <li key={key} className="hover:scale-95 transition">
                                <Link className={`${i.index === 3 ? "border rounded-lg" : ""} lg:px-3 lg:p-2`} href={i.link}>{i.nameLink}</Link>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
            <div className="w-full flex items-center lg:justify-center bg-[#014C34] flex-col h-[150px] lg:h-20 border-t border-t-white lg:flex-row gap-5 justify-between text-textSecondColor ">
                <div className="w-[90%]  lg:w-full  max-w-[1200px] gap-5 lg:gap-10 h-full flex text-white flex-col lg:flex-row lg:items-center items-start lg:justify-between justify-center">
                    <Link target="_blank" href={"https://uxgroup.com.br/politica-de-privacidade"}>Politica de Privacidade</Link>
                    <Link target="_blank" href={"https://uxgroup.com.br/"}><Image className="w-32 flex " width={1000} quality={100} height={1000} alt="" src={poweredUX} /></Link>

                </div>
            </div>
        </footer>
    )
}