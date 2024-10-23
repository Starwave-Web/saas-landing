import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: "1",
    question: "Miért érdemes a platformunkat választani?",
    answer:
      "A platformunk integrált megoldásokat kínál, amelyek egyszerűsítik az üzleti folyamatokat.",
  },
  {
    id: "2",
    question: "Hogyan segít a CMS funkció a tartalomkezelésben?",
    answer:
      "A CMS lehetővé teszi a weboldal tartalmának egyszerű kezelését és frissítését.",
  },
  {
    id: "3",
    question: "Milyen előnyöket nyújt a CRM rendszer?",
    answer:
      "A CRM rendszer javítja az ügyfélkapcsolatokat és növeli az ügyfélelégedettséget.",
  },
  {
    id: "4",
    question: "Mire jó az RPA a munkafolyamatok automatizálásában?",
    answer: "Az RPA csökkenti az ismétlődő feladatok idejét és hibáit.",
  },
  {
    id: "5",
    question: "Hogyan integrálható a platform más rendszerekkel?",
    answer:
      "A nyílt API lehetővé teszi a zökkenőmentes integrációt más szoftverekkel.",
  },
  {
    id: "6",
    question: "Milyen analitikai lehetőségek állnak rendelkezésre?",
    answer: "A valós idejű analitika segít a megalapozott döntéshozatalban.",
  },
  {
    id: "7",
    question: "Milyen támogatást nyújtanak a felhasználóknak?",
    answer: "24/7 ügyfélszolgálatot és részletes dokumentációt kínálunk.",
  },
  {
    id: "8",
    question: "Mennyibe kerül a platform használata?",
    answer: "Rugalmas árazást kínálunk, különböző csomagokkal az igényekhez.",
  },
];

const FAQ = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Lépj szintet vállalkozásoddal!
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                Fedezd fel platformunk CMS, CRM, RPA és analitikai megoldásait,
                hogy növeld vállalkozásod versenyképességét! Próbáld ki 14 napig
                ingyen!
              </p>
            </div>
            <div className="">
              <Button className="gap-4" variant="outline">
                Kérdésed van? Foglalj hívást <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={"index-" + index}>
              <AccordionTrigger className="text-left">
                {question.question}
              </AccordionTrigger>
              <AccordionContent>
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);

export default FAQ;
