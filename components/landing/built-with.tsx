"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const BuiltWith = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  const technologies = [
    { id: "nextjs", imageUrl: "/technologies/nextjs.webp" },
    { id: "react", imageUrl: "/technologies/react.webp" },
    { id: "strapi", imageUrl: "/technologies/strapi.png" },
    { id: "mongodb", imageUrl: "/technologies/mongodb.png" },
    { id: "mixpanel", imageUrl: "/technologies/mixpanel.webp" },
    { id: "nextjs", imageUrl: "/technologies/nextjs.webp" },
    { id: "react", imageUrl: "/technologies/react.webp" },
    { id: "strapi", imageUrl: "/technologies/strapi.png" },
    { id: "mongodb", imageUrl: "/technologies/mongodb.png" },
    { id: "mixpanel", imageUrl: "/technologies/mixpanel.webp" },
    { id: "nextjs", imageUrl: "/technologies/nextjs.webp" },
    { id: "react", imageUrl: "/technologies/react.webp" },
    { id: "strapi", imageUrl: "/technologies/strapi.png" },
    { id: "mongodb", imageUrl: "/technologies/mongodb.png" },
    { id: "mixpanel", imageUrl: "/technologies/mixpanel.webp" },
  ];

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row items-center">
          <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left">
            Használt technológiák
          </h3>
          <div className="relative w-full col-span-4">
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {technologies.map((technology, index) => (
                  <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                    <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                      <Image width={300} height={300}  src={technology.imageUrl} alt={technology.id}/>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltWith;
