
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
import Script from "next/script";

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


  // <!-- Hotjar Tracking Code for Edição 1: Webinar Ondetah -->
  <Script>
    {` (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5197840,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
  </Script>

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
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
