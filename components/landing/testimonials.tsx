"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Anna from "@/assets/testimonials/anna.jpg";
import Eszter from "@/assets/testimonials/eszter.jpg";
import Kati from "@/assets/testimonials/kati.jpg";
import Laszlo from "@/assets/testimonials/laszlo.jpg";
import Zoltan from "@/assets/testimonials/zoltan.jpg";
import { SECTIONS } from "@/constants";

const Testimonials = () => {
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
    }, 4000);
  }, [api, current]);

  const testimonials = [
    {
      id: "anna",
      title: "Egyszerű integráció, hatalmas lehetőségek",
      description:
        "A platformunk rendszereit pár nap alatt integráltuk. Nagyon könnyű használni.",
      avatarImageUrl: "/testimonials/anna.jpg",
      name: "Kovács Anna",
    },
    {
      id: "laszlo",
      title: "Gyorsan reagál az igényeinkre",
      description:
        "Az analitika segítségével azonnali betekintést kapunk a működésünk javításához.",
      avatarImageUrl: "/testimonials/laszlo.jpg",
      name: "Tóth László",
    },
    {
      id: "eszter",
      title: "Automatizált folyamatok, időmegtakarítás",
      description:
        "Az RPA megoldásokkal rengeteg adminisztrációs munkát spóroltunk meg.",
      avatarImageUrl: "/testimonials/eszter.jpg",
      name: "Nagy Eszter",
    },
    {
      id: "zoltan",
      title: "CRM, ami tényleg testreszabható",
      description:
        "Könnyedén testreszabtuk a CRM-et, hogy tökéletesen illeszkedjen az üzleti folyamatainkhoz.",
      avatarImageUrl: "/testimonials/zoltan.jpg",
      name: "Szabó Zoltán",
    },
    {
      id: "kati",
      title: "Hatékony tartalomkezelés",
      description:
        "A CMS rendszer intuitív, könnyű vele tartalmakat publikálni több csatornán.",
      avatarImageUrl: "/testimonials/kati.jpg",
      name: "Varga Katalin",
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
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
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
