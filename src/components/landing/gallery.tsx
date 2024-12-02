
import Image from "next/image";
import Image1 from "@/src/assets/gallery/image1.png"
import Image2 from "@/src/assets/gallery/image2.png"
import Image3 from "@/src/assets/gallery/image3.png"
import Image4 from "@/src/assets/gallery/image4.png"


export const Gallery = () => (
  <div className="w-full pb-20 lg:pb-40">
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-2 lg:p-4 aspect-square lg:aspect-auto flex justify-between flex-col">
            <Image className="object-cover h-full rounded-md" src={Image1} alt="img1" />
          </div>
          <div className="bg-muted rounded-md  aspect-square p-2 lg:p-4 flex justify-between flex-col">
            <Image className="object-cover rounded-md" src={Image3} alt="img3" />
          </div>

          <div className="bg-muted rounded-md aspect-square p-2 lg:p-4 flex justify-between flex-col">
            <Image className="object-cover rounded-md" src={Image4} alt="img2" />
          </div>
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-2 lg:p-4 aspect-square lg:aspect-auto flex justify-between flex-col">
            <Image className="object-cover h-full rounded-md" src={Image2} alt="img4" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
