import { useClientData } from "@/app/Pages/Home/hooks/client";
import logoOndetah from "@/app/Pages/Home/Assets/ondetahLogo.svg"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import { ClientData, contactFormData } from "@/app/Pages/Home/interfaces/clientData";
import Image from "next/image";
import { LuCalendarPlus } from "react-icons/lu";

export default function ContactForm({

    inputAlternative,
    page,
    nameForm,
}: contactFormData) {
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        floating_first_name: "",
        floating_email: "",
        floating_phone: "",
        floating_company: "",
        floating_cargo: "",
        floating_message: "",
        floating_terms: "",
        conversion_identifier: nameForm,
        page_name: page,
    });

    const { mutate, isSuccess } = useClientData();
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;

        if (type === 'checkbox') {
            setFormData(prevFormData => {
                // Se for o checkbox dos termos, definir o valor conforme o estado `checked`
                if (name === 'floating_terms') {
                    return {
                        ...prevFormData,
                        [name]: checked ? value : "",
                    };
                }

                // Verifica se o campo é um checkbox para múltiplas seleções
                const currentSelections = prevFormData[name as keyof ClientData] ? prevFormData[name as keyof ClientData].split(',') : [];
                const updatedSelections = checked
                    ? [...currentSelections, value].filter((item, index, self) => self.indexOf(item) === index)
                    : currentSelections.filter(item => item !== value);

                return {
                    ...prevFormData,
                    [name as keyof ClientData]: updatedSelections.join(','),
                };
            });
        } else {
            setFormData({
                ...formData,
                [name as keyof ClientData]: value,
            });
        }
    };


    useEffect(() => {
        if (isSuccess) {
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);

            setFormData({
                floating_first_name: "",
                floating_email: "",
                floating_phone: "",
                floating_company: "",
                floating_cargo: "",
                floating_message: "",
                floating_terms: "",
                conversion_identifier: nameForm,
                page_name: page,
            });
        }
    }, [isSuccess]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Verifique se o checkbox de termos está marcado
        if (!formData.floating_terms) {
            alert("Você precisa aceitar os termos para enviar o formulário.");
            return;
        }


        

        // Se todas as validações forem passadas, envie os dados do formulário
        mutate(formData);
    };




    return (
        <>
            {/* <Script
        type="text/javascript"
        async
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/139aadf5-b7d4-4ce5-b117-ddb828aef384-loader.js"
      ></Script> */}
            <section id="formulario" className="bg-[#014C34] pb-[30px] pt-[80px] w-full">
                <div className="w-full md:w-full text-white gap-4 pb-5 flex text-center items-center justify-center flex-col">
                    <h1 className="w-[90%] text-4xl lg:text-center text-left font-bold md:w-full ">
                        Faça sua inscrição já e não fique de fora:
                    </h1>
                    <p className="lg:w-4/5 w-[90%] lg:text-center text-left md:w-full">
                        Não perca esta oportunidade de transformar a experiência logística da sua operação.
                    </p>
                    <div className="w-[90%] gap-3 lg:w-full flex flex-col py-5 justify-start lg:justify-center lg:items-center" >
                        <div className="w-[250px] p-2 h-14 gap-2 flex items-center text-white text-2xl justify-center bg-black rounded-lg">
                            <p className="pt-1 font-extralight">Edição 1:</p>
                            <Image className="w-[45%]" src={logoOndetah} alt="Logo Ondetah" />
                        </div>
                        <p className="w-auto flex text-white items-center gap-2 font-medium h-10">
                            <LuCalendarPlus color="#FFF" />
                            13/11/2024 - 17:00hrs
                        </p>
                        <h1 className="text-primaryColor lg:text-center text-left w-[full lg:w-2/5 text-4xl font-bold">
                            <span className="text-white">Webinar:</span>  Funcionalidades e soluções do produto.
                        </h1>
                    </div>
                </div>
                <form
                    id={nameForm}
                    name={nameForm}
                    className="max-w-md w-[90%] mx-auto"
                    onSubmit={handleSubmit}
                >
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="floating_first_name"
                            id="floating_first_name"
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            value={formData.floating_first_name}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nome*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            value={formData.floating_email}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            E-mail*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="tel"
                            name="floating_phone"
                            id="floating_phone"
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            value={formData.floating_phone}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Telefone*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="floating_company"
                            id="floating_company"
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            value={formData.floating_company}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="floating_company"
                            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Empresa* (Ex. UX Group)
                        </label>
                    </div>
                
                    <div className="relative z-0 w-full mb-5 group">
                        <select
                            name="floating_cargo"
                            id="floating_cargo"
                            className="block py-2.5 px-0 w-full text-sm text-[#bfbfbf] bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            value={formData.floating_cargo}
                            onChange={handleChange}
                            required
                        >
                            <option value="Cargo" className="text-white">
                                Cargo*
                            </option>
                            <option value="Proprietário/ Fundador" className="text-black ">
                                Proprietário/ Fundador
                            </option>
                            <option value="C-Level/ Diretor" className="text-black ">
                                C-Level/ Diretor
                            </option>
                            <option value="Gerente/Coordenador" className="text-black ">
                                Gerente/Coordenador
                            </option>
                            <option value="Especialista" className="text-black ">
                                Especialista
                            </option>
                            <option value="Analista" className="text-black ">
                                Analista
                            </option>
                            <option value="Consultor Externo" className="text-black ">
                                Consultor Externo
                            </option>
                            <option value="Outros" className="text-black ">
                                Outros
                            </option>
                        </select>
                    </div>
                    

                    {inputAlternative?.map((data) => (
                        <div key={data.id} className="relative z-0 w-full mb-5 group">
                            <input
                                type={data.type}
                                name={data.name}
                                id={data.id}
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                                placeholder={data.placeholder}
                                onChange={handleChange}
                                required={data.required}
                            />
                            <label
                                htmlFor={data.id}
                                className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                {data.text}
                            </label>
                        </div>
                    ))}
                    <div className="grid md:grid-cols-1 md:gap-6">

                        <input
                            type="hidden"
                            id="referencia"
                            name="referencia"
                            value={page}
                        />
                        <div className="flex items-center pb-10">
                            <input
                                id="floating_terms"
                                name="floating_terms"
                                type="checkbox"
                                value="Eu concordo em receber comunicações."
                                onChange={handleChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label
                                htmlFor="cf_terms"
                                className="ms-2 text-sm font-medium text-[#bfbfbf] focus:text-white"
                            >
                                Eu concordo em receber comunicações.*
                            </label>
                        </div>
                    </div>

                    {showSuccess && (
                        <motion.div
                            initial={{ left: -400, opacity: 0 }}
                            animate={{
                                left: 100,
                                opacity: 100,
                                transition: { duration: 0.5 },
                            }}
                            id="toast-simple"
                            className="fixed bottom-[80%] left-20  flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow "
                            role="alert"
                        >
                            <FaRegCheckCircle className="w-9 text-4xl text-[#009580] " />
                            <div className="ps-4 text-sm text-black font-normal">
                                <h1 className="text-base ">Obrigado pelo contato.</h1>
                                Em Breve nosso time comercial entrará em contato com você.
                            </div>
                        </motion.div>
                    )}
                    <button
                        type="submit"
                        className={`text-white md:w-full hover:font-semibold w-full bg-transparent border border-white transition-all hover:bg-white focus:ring-4 focus:outline-none hover:text-black focus:ring-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ${(!formData.floating_terms || formData.floating_email === "") ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={!formData.floating_terms || formData.floating_email === ""}
                    >
                        Enviar contato
                    </button>
                </form>
            </section>
        </>
    );
}
