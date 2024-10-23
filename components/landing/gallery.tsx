import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Gallery = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Gallery</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Fedezze Fel Platformunkat!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Próbálja ki most, és tapasztalja meg, hogyan növelheti
              vállalkozása hatékonyságát!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <Image src="" alt="" />
          </div>
          <div className="bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col">
            <Image src="" alt="" />
          </div>

          <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
            <Image src="" alt="" />
          </div>
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <Image src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
