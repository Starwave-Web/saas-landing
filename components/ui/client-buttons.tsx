"use client";

import { SECTIONS } from "@/constants";
import { scrollToSection } from "@/lib/utils";
import { PhoneCall, MoveRight } from "lucide-react";
import React from "react";
import { Button, ButtonProps } from "./button";

const TryItOut = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
      className="gap-4 mt-8"
    >
      Próbáld ki <MoveRight className="w-4 h-4" />
    </Button>
  );
};

const ContactUsBtn = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
      variant="outline"
      className="gap-4 mt-8"
    >
      Kapcsolatfelvétel <PhoneCall className="w-4 h-4" />
    </Button>
  );
};

const AskForCallback = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
      className="gap-4"
      variant="outline"
    >
      Kérj visszahívást <PhoneCall className="w-4 h-4" />
    </Button>
  );
};

const Register = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
      className="gap-4"
    >
      Regisztrálj <MoveRight className="w-4 h-4" />
    </Button>
  );
};

const FAQBtn = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
      className="gap-4"
      variant="outline"
    >
      Kérdésed van? Foglalj hívást <PhoneCall className="w-4 h-4" />
    </Button>
  );
};
export { TryItOut, ContactUsBtn, AskForCallback, Register, FAQBtn };
