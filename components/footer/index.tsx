"use client";
import { SECTIONS } from "@/constants";
import { scrollToSection } from "@/lib/utils";
import { Orbit } from "lucide-react";
import Link from "next/link";

export const Footer = () => {

  const felhasznalasi_felt = "/legal/felhasznalasi_felt.pdf";
  const adatkezelesi_nyil = "/legal/adatkezelesi_nyil.pdf";

  const navigationItems = [
    {
      title: "Kezdőlap",
      sectionName: SECTIONS.HERO,
      description: "",
    },
    {
      title: "Platform",
      description: "Probáld ki szolgáltatásunk, foglalj telefonos időpontot.",
      items: [
        {
          title: "Funkciók",
          sectionName: SECTIONS.FEATURES,
        },
        {
          title: "Statisztikák",
          sectionName: SECTIONS.STATS,
        },
        {
          title: "Technológiák",
          sectionName: SECTIONS.TECHNOLOGIES,
        },
        {
          title: "Árak",
          sectionName: SECTIONS.PRICES,
        },
      ],
    },
    {
      title: "Cég",
      description: "További információért, foglalj telefonos időpontot.",
      items: [
        {
          title: "Visszajelzések",
          sectionName: SECTIONS.TESTIMONIALS,
        },
        {
          title: "FAQ",
          sectionName: SECTIONS.FAQ,
        },
        {
          title: "Kapcsolatfelvétel",
          sectionName: SECTIONS.CONTACT_US,
        },
      ],
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center px-4">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <div className="flex items-center gap-2">
                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                  OrbitOps
                </h2>
                <Orbit className=" h-10 w-10" />
              </div>

              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Integrált üzleti megoldásokat kínálunk egy platformon: CRM, CMS,
                RPA, analitika és integrációs lehetőségek segítségével
                automatizáljuk folyamataidat, növeljük a hatékonyságot, és valós
                idejű adatokat biztosítunk döntéseidhez.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>2440</p>
                <p>Százhalombatta</p>
                <p>Tél utca 41.</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link target="_blank" href={felhasznalasi_felt}>
                  Felhasználási feltételek
                </Link>
                <Link target="_blank" href={adatkezelesi_nyil}>
                  Adatkezelési nyilatkozat
                </Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.sectionName ? (
                    <p
                      onClick={() => scrollToSection(item.sectionName)}
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <span className="text-xl">{item.title}</span>
                    </p>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <p
                        key={subItem.title}
                        onClick={() => scrollToSection(subItem.sectionName)}
                        className="flex justify-between items-center cursor-pointer"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </p>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
