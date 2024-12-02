import { Badge } from "@/src/components/ui/badge";
import { AskForCallback, Register } from "../ui/client-buttons";
import { useTranslations } from "next-intl";

const CTA = () => {
  const t = useTranslations('cta');

  return (
    <div className="w-full py-20 lg:py-40 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-center py-14 gap-4 items-center">
          <div>
            <Badge>{t('badge')}</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              {t('heading')}
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              {t('description')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <AskForCallback />
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
