import { SECTIONS } from "@/constants";
import { MoveDownLeft, MoveUpRight } from "lucide-react";

export const Stats = () => (
  <div id={SECTIONS.STATS}  className="w-full py-20 lg:py-40">
    <div className="container mx-auto px-4">
      <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            5.000
            <span className="text-muted-foreground text-sm tracking-normal">
              +20.1%
            </span>
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            havi aktív felhasználó
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            2.105
            <span className="text-muted-foreground text-sm tracking-normal">
              +5%
            </span>
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            napi aktív felhasználó
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-success" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            923.520 Ft
            <span className="text-muted-foreground text-sm tracking-normal">
              +40%
            </span>
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            átlagos bevételnövekedés ügyfeleinknél
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveDownLeft className="w-4 h-4 mb-10 text-desructive" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            3000 Ft
            <span className="text-muted-foreground text-sm tracking-normal">
              -20%
            </span>
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            felhasználónkénti megszerzési költség
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Stats;
