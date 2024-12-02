"use client";

import { SECTIONS } from "@/src/constants";
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export const Stats = () => {
  const t = useTranslations("stats");

  const stats = [
    {
      icon: <MoveUpRight className="w-4 h-4 mb-10 text-primary" />,
      value: t("monthlyActiveUsers.value"),
      change: t("monthlyActiveUsers.change"),
      description: t("monthlyActiveUsers.description"),
    },
    {
      icon: <MoveUpRight className="w-4 h-4 mb-10 text-primary" />,
      value: t("dailyActiveUsers.value"),
      change: t("dailyActiveUsers.change"),
      description: t("dailyActiveUsers.description"),
    },
    {
      icon: <MoveUpRight className="w-4 h-4 mb-10 text-success" />,
      value: t("averageRevenueGrowth.value"),
      change: t("averageRevenueGrowth.change"),
      description: t("averageRevenueGrowth.description"),
    },
    {
      icon: <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />,
      value: t("userAcquisitionCost.value"),
      change: t("userAcquisitionCost.change"),
      description: t("userAcquisitionCost.description"),
    },
  ];

  return (
    <div id={SECTIONS.STATS} className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex gap-0 flex-col justify-between p-6 border rounded-md"
            >
              {stat.icon}
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                {stat.value}
                <span className="text-muted-foreground text-sm tracking-normal">
                  {stat.change}
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
