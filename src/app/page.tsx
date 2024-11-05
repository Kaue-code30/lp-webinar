
"use client"
import Header from "./Pages/Home/Header";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import WebnarHome from "./Pages/Home/Components/WebnarHome";
import PorqueParticipar from "./Pages/Home/Components/PorqueParticipar";
import Beneficios from "./Pages/Home/Components/Beneficios";
import AgendaWebinar from "./Pages/Home/Components/AgendaWebninar";
import { Cta } from "./Pages/Home/Components/Cta";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });
  return (
    <div className="w-full flex flex-col items-center justify-center h-auto">
      <Header onScroll={scrolled}/>
      <WebnarHome/>
      <PorqueParticipar/>
      <Beneficios/>
      <AgendaWebinar/>
      <Cta/>
    </div>
  );
}
