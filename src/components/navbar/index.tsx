"use client";

import { Button } from "@/src/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu";
import { Menu, MoveRight, Orbit, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../common/toggle-theme";
import { scrollToSection } from "@/src/lib/utils";
import { SECTIONS } from "@/src/constants";

const Navbar = () => {
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

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.sectionName ? (
                    <>
                      <NavigationMenuLink
                        onClick={() => scrollToSection(item.sectionName)}
                      >
                        <Button variant="ghost">{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button onClick={() => scrollToSection(SECTIONS.CONTACT_US)} size="sm" className="mt-10">
                              Foglalj egy időpontot
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-start">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                onClick={() =>
                                  scrollToSection(subItem.sectionName)
                                }
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div onClick={() => scrollToSection(SECTIONS.HERO)} className="flex gap-1 lg:justify-center cursor-pointer">
          <p className="font-semibold">OrbitOps</p>
          <Orbit className=" dark:text-white" />
        </div>
        <div className="flex justify-end w-full gap-4">
          <ModeToggle />
          <Button onClick={() => scrollToSection(SECTIONS.CONTACT_US)} variant="ghost" className="hidden md:inline">
            Foglalj egy demo-t
          </Button>
          <div className="border-r hidden md:inline">
            <Button onClick={() => scrollToSection(SECTIONS.CONTACT_US)}>Kapcsolatfelvétel</Button>
          </div>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8 px-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.sectionName ? (
                      <div
                        onClick={() => scrollToSection(item.sectionName)}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </div>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <div
                          key={subItem.title}
                          onClick={() => scrollToSection(subItem.sectionName)}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
