"use client";

import { SECTIONS } from "@/src/constants";
import { scrollToSection } from "@/src/lib/utils";
import { PhoneCall, MoveRight } from "lucide-react";
import React from "react";
import { Button, ButtonProps } from "./button";
import { useTranslations } from "next-intl";

const TryItOut = (props: ButtonProps) => {
  const t = useTranslations('buttons');
  return (
    <Button
      {...props}
      onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
      className="gap-4 mt-8"
    >
      {t('tryItOut')} <MoveRight className="w-4 h-4" />
    </Button>
  );
};

const ContactUsBtn = (props: ButtonProps) => {
  const t = useTranslations('buttons');
  return (
    <Button
      {...props}
      onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
      variant="outline"
      className="gap-4 mt-8"
    >
      {t('contactUs')} <PhoneCall className="w-4 h-4" />
    </Button>
  );
};

const AskForCallback = (props: ButtonProps) => {
  const t = useTranslations('buttons');
  return (
    <Button
      {...props}
      onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
      className="gap-4"
      variant="outline"
    >
      {t('askForCallback')} <PhoneCall className="w-4 h-4" />
    </Button>
  );
};

const Register = (props: ButtonProps) => {
  const t = useTranslations('buttons');
  return (
    <Button
      {...props}
      onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
      className="gap-4"
    >
      {t('register')} <MoveRight className="w-4 h-4" />
    </Button>
  );
};

const FAQBtn = (props: ButtonProps) => {
  const t = useTranslations('buttons');
  return (
    <Button
      {...props}
      onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
      className="gap-4"
      variant="outline"
    >
      {t('faq')} <PhoneCall className="w-4 h-4" />
    </Button>
  );
};

export { TryItOut, ContactUsBtn, AskForCallback, Register, FAQBtn };
