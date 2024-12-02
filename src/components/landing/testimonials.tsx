"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";

import { SECTIONS } from "@/src/constants";
import { useTranslations } from "next-intl";

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const t = useTranslations("testimonials");

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
    }, 4000);
  }, [api, current]);

  const testimonials = [
    {
      id: "anna",
      title: t.raw('items')[0].title,
      description:
      t.raw('items')[0].description,
      avatarImageUrl: "/testimonials/anna.jpg",
      name: t.raw('items')[0].name,
    },
    {
      id: "laszlo",
      title: t.raw('items')[1].title,
      description:
      t.raw('items')[1].description,
      avatarImageUrl: "/testimonials/laszlo.jpg",
      name: t.raw('items')[1].name,
    },
    {
      id: "eszter",
      title: t.raw('items')[2].title,
      description:
      t.raw('items')[2].description,
      avatarImageUrl: "/testimonials/eszter.jpg",
      name: t.raw('items')[2].name,
    },
    {
      id: "zoltan",
      title: t.raw('items')[3].title,
      description:
      t.raw('items')[3].description,
      avatarImageUrl: "/testimonials/zoltan.jpg",
      name: t.raw('items')[3].name,
    },
    {
      id: "kati",
      title: t.raw('items')[4].title,
      description:
      t.raw('items')[4].description,
      avatarImageUrl: "/testimonials/kati.jpg",
      name: t.raw('items')[4].name,
    },
  ];

  return (
    <div id={SECTIONS.TESTIMONIALS} className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Számos vállalkozás választott minket.
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1 hidden sm:block" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {testimonial.title}
                        </h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          {testimonial.description}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <Avatar className="h-6 w-6">
                          <AvatarImage className="object-cover" src={testimonial.avatarImageUrl} />
                          <AvatarFallback>T</AvatarFallback>
                        </Avatar>
                        <span>{testimonial.name}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
