import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CTA = () => (
  <div className="w-full py-20 lg:py-40 bg-muted">
    <div className="container mx-auto px-4">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div>
          <Badge>Vágj bele!</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Automatizáld vállalkozásod most!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Csökkentsd adminisztrációs terheid, növeld bevételeidet és hozd ki a
            legtöbbet üzleti adataidból integrált platformunkkal! Próbáld ki
            most ingyen!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="gap-4" variant="outline">
            Kérj visszahívást <PhoneCall className="w-4 h-4" />
          </Button>
          <Button className="gap-4">
            Regisztrálj <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default CTA;
