"use client";
import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { SECTIONS } from "@/src/constants";
import { scrollToSection } from "@/src/lib/utils";

const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["CMS", "CRM", "RPA", "Automatizáció", "Analitika"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div id={SECTIONS.HERO} className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button onClick={() => scrollToSection(SECTIONS.FEATURES)} variant="secondary" size="sm" className="gap-4">
              Funkciók <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Mit tud? </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Integrált üzleti megoldásokat kínálunk egy platformon: CRM, CMS,
              RPA, analitika és integrációs lehetőségek segítségével
              automatizáljuk folyamataidat, növeljük a hatékonyságot, és valós
              idejű adatokat biztosítunk döntéseidhez.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={() => scrollToSection(SECTIONS.CONTACT_US)} size="lg" className="gap-4" variant="outline">
              Kérj visszahívást <PhoneCall className="w-4 h-4" />
            </Button>
            <Button onClick={() => scrollToSection(SECTIONS.CONTACT_US)} size="lg" className="gap-4">
              Regisztrálj <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
