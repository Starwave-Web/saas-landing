"use client";

import { CalendarIcon, Check, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, isBefore, startOfDay } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SECTIONS } from "@/constants";
import { toast } from "@/hooks/use-toast";

const ContactUs = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [errors, setErrors] = useState({ lastName: "", firstName: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors = { lastName: "", firstName: "" };
    let isValid = true;

    if (!lastName) {
      newErrors.lastName = "Vezetéknév megadása kötelező";
      isValid = false;
    }
    if (!firstName) {
      newErrors.firstName = "Keresztnév megadása kötelező";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setLastName("");
      setFirstName("");
      setDate(new Date());
      toast({
        title: "Sikeres időpont foglalás!",
        description: "Hamarosan keresni fogunk!",
      });
    }
  };

  const disablePastDates = (date: Date) => {
    return isBefore(startOfDay(date), startOfDay(new Date()))
  }

  return (
    <div id={SECTIONS.CONTACT_US} className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Kapcsolat</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Növeld üzleti hatékonyságod!
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Integrált megoldásaink segítségével automatizálhatod
                  folyamataidat, növelheted ügyfélmegtartásod és valós idejű
                  adatokat használhatsz fel döntéshozatalhoz. Kezdj most!
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Egyszerű tartalomkezelés</p>
                <p className="text-muted-foreground text-sm">
                  Intuitív CMS megoldásunk lehetővé teszi a tartalmak gyors
                  létrehozását és publikálását.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Testreszabható CRM</p>
                <p className="text-muted-foreground text-sm">
                  Személyre szabható ügyfélkapcsolat-kezelést kínálunk, amely a
                  vállalkozásod egyedi igényeire épül.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Automatizált folyamatok</p>
                <p className="text-muted-foreground text-sm">
                  RPA megoldásaink egyszerűsítik az ismétlődő feladatokat, időt
                  és erőforrást megtakarítva.
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center">
            <form
              onSubmit={handleSubmit}
              className="rounded-md max-w-sm flex flex-col border p-8 gap-4 w-full"
            >
              <p>Foglalj időpontot</p>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="date">Dátum</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-full max-w-sm justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "PPP")
                      ) : (
                        <span>Válassz egy dátumot</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={disablePastDates}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="lastname">Vezetéknév</Label>
                <Input 
                  id="lastname" 
                  type="text" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  aria-invalid={errors.lastName ? "true" : "false"}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="firstname">Keresztnév</Label>
                <Input 
                  id="firstname" 
                  type="text" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>

              <Button type="submit" className="gap-4 w-full">
                Foglalás <MoveRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;