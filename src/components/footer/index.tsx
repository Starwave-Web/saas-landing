"use client";
import { SECTIONS } from "@/src/constants";
import { scrollToSection } from "@/src/lib/utils";
import { Orbit } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('footer');
  const felhasznalasiFelt = "/legal/felhasznalasi_felt.pdf";
  const adatkezelesiNyil = "/legal/adatkezelesi_nyil.pdf";

  const navigationItems = [
    {
      title: t('navigation.home'),
      sectionName: SECTIONS.HERO,
      description: "",
    },
    {
      title: t('navigation.platform.title'),
      description: t('navigation.platform.description'),
      items: [
        {
          title: t('navigation.platform.items.features'),
          sectionName: SECTIONS.FEATURES,
        },
        {
          title: t('navigation.platform.items.statistics'),
          sectionName: SECTIONS.STATS,
        },
        {
          title: t('navigation.platform.items.technologies'),
          sectionName: SECTIONS.TECHNOLOGIES,
        },
        {
          title: t('navigation.platform.items.prices'),
          sectionName: SECTIONS.PRICES,
        },
      ],
    },
    {
      title: t('navigation.company.title'),
      description: t('navigation.company.description'),
      items: [
        {
          title: t('navigation.company.items.testimonials'),
          sectionName: SECTIONS.TESTIMONIALS,
        },
        {
          title: t('navigation.company.items.faq'),
          sectionName: SECTIONS.FAQ,
        },
        {
          title: t('navigation.company.items.contact'),
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
                  {t('companyName')}
                </h2>
                <Orbit className="h-10 w-10" />
              </div>

              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                {t('companyDescription')}
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>2440</p>
                <p>Százhalombatta</p>
                <p>Tél utca 41.</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link target="_blank" href={felhasznalasiFelt}>
                  {t('links.termsOfUse')}
                </Link>
                <Link target="_blank" href={adatkezelesiNyil}>
                  {t('links.privacyPolicy')}
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
