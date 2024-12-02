"use client";

import { CalendarIcon, Check, MoveRight } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Calendar } from "@/src/components/ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { cn } from "@/src/lib/utils";
import { format, isBefore, startOfDay } from "date-fns";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { SECTIONS } from "@/src/constants";
import { toast } from "@/src/hooks/use-toast";
import { useTranslations } from "next-intl";

const ContactUs = () => {
  const t = useTranslations("contactUs"); // Load translations for this section
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [errors, setErrors] = useState({ lastName: "", firstName: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = { lastName: "", firstName: "" };
    let isValid = true;

    if (!lastName) {
      newErrors.lastName = t("lastNameRequired"); // Translated error message
      isValid = false;
    }
    if (!firstName) {
      newErrors.firstName = t("firstNameRequired"); // Translated error message
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setLastName("");
      setFirstName("");
      setDate(new Date());
      toast({
        title: t("successfulBooking"), // Translated toast message
        description: t("soonWillContact"), // Translated toast message
      });
    }
  };

  const disablePastDates = (date: Date) => {
    return isBefore(startOfDay(date), startOfDay(new Date()));
  };

  return (
    <div id={SECTIONS.CONTACT_US} className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>{t("contact")}</Badge> {/* Translated label */}
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  {t("increaseBusinessEfficiency")} {/* Translated heading */}
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  {t("integratedSolutions")} {/* Translated paragraph */}
                </p>
              </div>
            </div>
            {/* List of features */}
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>{t("simpleContentManagement")}</p> {/* Translated feature */}
                <p className="text-muted-foreground text-sm">
                  {t("cmsDescription")} {/* Translated description */}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>{t("customizableCRM")}</p> {/* Translated feature */}
                <p className="text-muted-foreground text-sm">
                  {t("crmDescription")} {/* Translated description */}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>{t("automatedProcesses")}</p> {/* Translated feature */}
                <p className="text-muted-foreground text-sm">
                  {t("rpaDescription")} {/* Translated description */}
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center">
            <form
              onSubmit={handleSubmit}
              className="rounded-md max-w-sm flex flex-col border p-8 gap-4 w-full"
            >
              <p>{t("bookAppointment")}</p> {/* Translated heading */}
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="date">{t("dateLabel")}</Label> {/* Translated label */}
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
                        <span>{t("selectDate")}</span>
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
                <Label htmlFor="lastname">{t("lastNameLabel")}</Label> {/* Translated label */}
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
                <Label htmlFor="firstname">{t("firstNameLabel")}</Label> {/* Translated label */}
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
                {t("bookNow")} <MoveRight className="w-4 h-4" /> {/* Translated button text */}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
