import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SECTIONS } from "@/constants";

const Features = () => (
  <div id={SECTIONS.FEATURES} className="w-full pt-20 lg:pt-40">
    <div className="container mx-auto px-4">
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <div>
          <Badge>Funkciók</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Innovatív megoldások
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            További információért foglalj egy demo-t!
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Teljes körű integráció</p>
                <p className="text-muted-foreground text-sm">
                Zökkenőmentes adatáramlást biztosítunk különböző rendszerek között egyetlen platformon keresztül.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Automatizált folyamatok</p>
                <p className="text-muted-foreground text-sm">
                RPA megoldásaink egyszerűsítik az ismétlődő feladatokat, időt és erőforrást megtakarítva.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Valós idejű analitika</p>
                <p className="text-muted-foreground text-sm">
                Döntéseidhez azonnali betekintést kapsz adataidba, dinamikus és vizuális riportokkal.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Testreszabható CRM</p>
                <p className="text-muted-foreground text-sm">
                Személyre szabható ügyfélkapcsolat-kezelést kínálunk, amely a vállalkozásod egyedi igényeire épül.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Egyszerű tartalomkezelés</p>
                <p className="text-muted-foreground text-sm">
                Intuitív CMS megoldásunk lehetővé teszi a tartalmak gyors létrehozását és publikálását.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Adatvezérelt döntéshozatal</p>
                <p className="text-muted-foreground text-sm">
                  Hatékony analitikai eszközeinkkel könnyedén nyomon követheted üzleti teljesítményed fejlődését.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features