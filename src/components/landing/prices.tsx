import { Check, Minus } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { SECTIONS } from "@/src/constants";
import { TryItOut, ContactUsBtn } from "../ui/client-buttons";
import { useTranslations } from "next-intl";

const Pricing = () => {
  const t = useTranslations('pricing');

  return (
    <div id={SECTIONS.PRICES} className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>{t('badge')}</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              {t('chooseTheRightOne')}
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              {t('description')}
            </p>
          </div>
          <div className="container overflow-auto">
            <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x pt-20 min-w-[540px]">
              <div className="col-span-3 lg:col-span-1"></div>
              <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
                <p className="text-2xl">{t('startup.title')}</p>
                <p className="text-sm text-muted-foreground">
                  {t('startup.description')}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                  <span className="text-4xl">{t('startup.price')}</span>
                  <span className="text-sm text-muted-foreground"> {t('startup.period')}</span>
                </p>
                <TryItOut variant="outline" />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
                <p className="text-2xl">{t('kkv.title')}</p>
                <p className="text-sm text-muted-foreground">
                  {t('kkv.description')}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                  <span className="text-4xl">{t('kkv.price')}</span>
                  <span className="text-sm text-muted-foreground"> {t('kkv.period')}</span>
                </p>
                <TryItOut />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
                <p className="text-2xl">{t('premium.title')}</p>
                <p className="text-sm text-muted-foreground">
                  {t('premium.description')}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                  <span className="text-4xl">{t('premium.price')}</span>
                  <span className="text-sm text-muted-foreground"> {t('premium.period')}</span>
                </p>
                <ContactUsBtn />
              </div>
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <b>{t('features')}</b>
              </div>
              <div></div>
              <div></div>
              <div></div>
              {/* New Line */}
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                {t('crm')}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              {/* New Line */}
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                {t('cms')}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Minus className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              {/* New Line */}
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                {t('rpa')}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Minus className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              {/* New Line */}
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                {t('people')}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <p className="text-muted-foreground text-sm">2 {t('people')}</p>
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <p className="text-muted-foreground text-sm">10 {t('people')}</p>
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <p className="text-muted-foreground text-sm">25+ {t('people')}</p>
              </div>
              {/* New Line */}
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                {t('analytics')}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Minus className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              {/* New Line */}
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                {t('integrationPlatform')}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Minus className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
