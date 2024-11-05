
"use client"
import Header from "./Pages/Home/Header";
import { useMemo, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import WebnarHome from "./Pages/Home/Components/WebnarHome";
import PorqueParticipar from "./Pages/Home/Components/PorqueParticipar";
import Beneficios from "./Pages/Home/Components/Beneficios";
import AgendaWebinar from "./Pages/Home/Components/AgendaWebninar";
import { Cta } from "./Pages/Home/Components/Cta";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContactForm from "./Pages/Home/Components/ContactForm";
import Footer from "./Pages/Home/Components/footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const queryClient = useMemo(() => new QueryClient(), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const valuesInput = [
    {
      value: "Melhorar a experiência do cliente durante o processo de compra",
    },
    {
      value: "Reduzir os contatos no SAC",
    },
    {
      value: "Diminuir atrasos e problemas na entrega dos pedidos",
    },
    {
      value: "Antecipar e mitigar riscos operacionais",
    },
    {
      value: "Reduzir a pegada de carbono das operações logísticas",
    },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full flex flex-col items-center justify-center h-auto">
        <Header onScroll={scrolled} />
        <WebnarHome />
        <PorqueParticipar />
        <Beneficios />
        <AgendaWebinar />
        <Cta />
        <ContactForm nameForm="Webnair" page="Webnair-lp" content={valuesInput} />
        <Footer/>
      </div>
    </QueryClientProvider>
  );
}
