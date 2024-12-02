"use client";

import { Badge } from "@/src/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

import { SECTIONS } from "@/src/constants";
import { FAQBtn } from "../ui/client-buttons";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("faq"); // Load translations for the FAQ section

  const questions = [
    {
      id: "1",
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      id: "2",
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      id: "3",
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      id: "4",
      question: t("question4"),
      answer: t("answer4"),
    },
    {
      id: "5",
      question: t("question5"),
      answer: t("answer5"),
    },
    {
      id: "6",
      question: t("question6"),
      answer: t("answer6"),
    },
    {
      id: "7",
      question: t("question7"),
      answer: t("answer7"),
    },
    {
      id: "8",
      question: t("question8"),
      answer: t("answer8"),
    },
  ];

  return (
    <div id={SECTIONS.FAQ} className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">{t("faq")}</Badge> {/* Translated label */}
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  {t("heading")} {/* Translated heading */}
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  {t("description")} {/* Translated description */}
                </p>
              </div>
              <div>
                <FAQBtn />
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {questions.map((question, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger className="text-left">
                  {question.question}
                </AccordionTrigger>
                <AccordionContent>{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
