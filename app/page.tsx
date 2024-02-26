import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import imgcomp from "../public/img_micro2.jpg";
import imgcomp2 from "../public/imgmicro.jpg";
import imgcomp3 from "../public/imgrelais.jpg";
import FloatinButton from "./component/FloatinButton";
import ComboBox from "./component/ComboBox";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-lg mt-10 ml-5 mr-5">
        <ComboBox />
      </div>
      <Tabs defaultValue="account" className="w-auto ml-5 mr-5 mt-10">
        <TabsList>
          <TabsTrigger value="account">VIDEO</TabsTrigger>
          <TabsTrigger value="password">DOC</TabsTrigger>
        </TabsList>
        <TabsContent value="account">{divVideo()}</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

      <FloatinButton />
      <div className="flex w-full max-w-sm items-center space-x-2 mx-auto  mt-9 mb-11">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </main>
  );

  function divVideo() {
    const youtubIdVideo = [
      "JYwxHunsNnY?si=BPmAbjtqiHVlaF48",
      "0jOq8yw87N8?si=6XlXjQrE9f1q5N-r",
      "SZNSUW8LOWc?si=crOsPcWfytSNSyqj",
      "_SevnTXIFv0?si=msMp3mW2Zxl1TzZz",
      "wCXqkPi6myA?si=qJ1PUTz7foHzBLeu",
    ];
    const img = [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
    ];
    const imgCaroussel = [
      {
        id: "1",
        img: imgcomp,
      },
      {
        id: "2",
        img: imgcomp2,
      },
      {
        id: "3",
        img: imgcomp3,
      },
    ];
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {youtubIdVideo.map((videoId) => (
            <Card>
              <CardHeader>
                <iframe
                  key={videoId}
                  width="mx-auto"
                  height="mx-auto"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>

              <CardFooter>
                <Button>Read</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Carousel className="mx-auto max-w-sm mt-9">
          <CarouselContent>
            {imgCaroussel.map((imageCaroussel1) => (
              <CarouselItem>
                <Image
                  key={imageCaroussel1.id}
                  src={imageCaroussel1.img}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mx-auto max-w-sm mb-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </>
    );
  }
}
