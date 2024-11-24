
import { Check, Minus } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { SECTIONS } from "@/src/constants";
import { TryItOut, ContactUsBtn } from "../ui/client-buttons";

const Pricing = () => (
  <div id={SECTIONS.PRICES} className="w-full py-20 lg:py-40">
    <div className="container mx-auto px-4">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge>Árak</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            Válaszd ki a neked megfelelőt!
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Fedezd fel platformunk CMS, CRM, RPA és analitikai megoldásait, hogy
            növeld vállalkozásod versenyképességét! Próbáld ki 14 napig ingyen!
          </p>
        </div>
        <div className="container overflow-auto">
          <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x pt-20 min-w-[540px]">
            <div className="col-span-3 lg:col-span-1"></div>
            <div className="px-3 py-1 md:px-6 md:py-4  gap-2 flex flex-col">
              <p className="text-2xl">Startup</p>
              <p className="text-sm text-muted-foreground">
                Indítsa el vállalkozását egyszerűen, hatékony eszközökkel és
                támogatással!
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl">3.000 Ft</span>
                <span className="text-sm text-muted-foreground"> / hónap</span>
              </p>
              <TryItOut variant="outline" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <p className="text-2xl">KKV</p>
              <p className="text-sm text-muted-foreground">
                Növelje a hatékonyságot testreszabott megoldásokkal és integrált
                funkciókkal!
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl">6.000 Ft</span>
                <span className="text-sm text-muted-foreground"> / hónap</span>
              </p>
              <TryItOut />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <p className="text-2xl">Prémium</p>
              <p className="text-sm text-muted-foreground">
                Maximalizálja potenciálját exkluzív funkciókkal és kivételes
                támogatással!
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl">8.000 Ft</span>
                <span className="text-sm text-muted-foreground"> / hónap</span>
              </p>
              <ContactUsBtn />
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1  py-4">
              <b>Funkciók</b>
            </div>
            <div></div>
            <div></div>
            <div></div>
            {/* New Line */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              CRM
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            {/* New Line */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              CMS
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            {/* New Line */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              RPA
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            {/* New Line */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              Személyek
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">2 személy</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">10 személy</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">25+ személy</p>
            </div>
            {/* New Line */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              Analitika
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            {/* New Line */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              Integrációs platform
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
