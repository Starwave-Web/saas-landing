import { Orbit } from "lucide-react";
import Link from "next/link";
// import { Footer } from "react-day-picker";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Kezdőlap",
      href: "/",
      description: "",
    },
    {
      title: "Platform",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Funkciók",
          href: "/reports",
        },
        {
          title: "Statisztikák",
          href: "/statistics",
        },
        {
          title: "Technológiák",
          href: "/dashboards",
        },
        {
          title: "Árak",
          href: "/recordings",
        },
      ],
    },
    {
      title: "Cég",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Rólunk",
          href: "/about",
        },
        {
          title: "Visszajelzések",
          href: "/fundraising",
        },
        {
          title: "FAQ",
          href: "/investors",
        },
        {
          title: "Kapcsolatfelvétel",
          href: "/contact",
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
                <Orbit className="dark:text-white h-10 w-10" />
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
                <Link href="/">Felhasználási feltételek</Link>
                <Link href="/">Adatkezelési nyilatkozat</Link>
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
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
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
