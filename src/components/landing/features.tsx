"use client";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/src/components/ui/badge";
import { SECTIONS } from "@/src/constants";

const Features = () => {
  const t = useTranslations("features");

  return (
    <div id={SECTIONS.FEATURES} className="w-full pt-20 lg:pt-40">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>{t("badge")}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              {t("headline")}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              {t("subheadline")}
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-start lg:grid-cols-3 gap-10">
              {[
                {
                  title: t("fullIntegrationTitle"),
                  description: t("fullIntegrationDescription"),
                },
                {
                  title: t("automatedProcessesTitle"),
                  description: t("automatedProcessesDescription"),
                },
                {
                  title: t("realTimeAnalyticsTitle"),
                  description: t("realTimeAnalyticsDescription"),
                },
                {
                  title: t("customizableCrmTitle"),
                  description: t("customizableCrmDescription"),
                },
                {
                  title: t("easyContentManagementTitle"),
                  description: t("easyContentManagementDescription"),
                },
                {
                  title: t("dataDrivenDecisionMakingTitle"),
                  description: t("dataDrivenDecisionMakingDescription"),
                },
              ].map(({ title, description }, index) => (
                <div key={index} className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{title}</p>
                    <p className="text-muted-foreground text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
