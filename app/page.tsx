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
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const textContent = ["text1", "text2", "text3", "text4", "text5", "text6"];
  const textCard = [
    {
      id: "1",
      desc: "what s SQL",
    },
    {
      id: "2",
      desc: "what s SQL",
    },
    {
      id: "3",
      desc: "what s SQL",
    },
    {
      id: "4",
      desc: "what s SQL",
    },
    {
      id: "5",
      desc: "what s SQL",
    },
    {
      id: "6",
      desc: "what s SQL",
    },
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
    <main>
      <div className="bg-emerald-50">
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="text-center font-bold     text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <span className="text-blue-500">Update</span> Your skill in tech
          </p>
          <p className="text-center text-md md:text-xl lg:text-2xl xl:text-2xl font-semibold mt-5">
            save time with AI optimized engine search video & increase your
            concentration
          </p>
          <p className="mx-auto max-w-lg text-center  text-md md:text-xl lg:text-xl xl:text-2xl mt-5 font-semibold">
            Text/video/AI assistant
          </p>
          <p className="mx-auto max-w-lg text-center   text-md md:text-xl lg:text-xl xl:text-2xl mt-5 font-semibold ">
            New High quality contents every month and recent video update within
            9 month
          </p>
          <p className="mx-auto max-w-lg text-center   text-md md:text-xl lg:text-xl xl:text-2xl  mt-5 font-semibold">
            world of IT/tech knowlege
          </p>
          <p className="mx-auto max-w-lg text-center   text-md md:text-xl lg:text-xl xl:text-2xl  mt-5  font-semibold">
            more than <span className="text-red-500">1500 student </span>are
            already menbers
          </p>
        </div>
        <div className="flex justify-center mt-8 ml-15 mr-15 ">
          <Button
            asChild
            size="lg"
            className="mb-10 bg-emerald-700 hover:bg-emerald-800"
          >
            <Link href="pages/signup">Get started</Link>
          </Button>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-auto w-full max-w-sm"
        >
          <CarouselContent>
            {textContent.map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <br />
        <div className="flex justify-center ml-5 mr-5">
          <div className="flex space-x-4 ">
            <ComboBox />
          </div>
        </div>
        <br />
      </div>

      <div className=" flex justify-center">
        <Tabs defaultValue="account" className="w-auto ml-1 mr-1 mt-7">
          <TabsList>
            <TabsTrigger value="account">VIDEO</TabsTrigger>
            <TabsTrigger value="password">DOC</TabsTrigger>
          </TabsList>
          <TabsContent value="account">{divVideo()}</TabsContent>
          <TabsContent
            value="password"
            className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {divCardText()}
          </TabsContent>
        </Tabs>
      </div>

      <FloatinButton />

      <div className="mx-auto max-w-sm mt-9 ">
        <p className="text-3xl font-semibold mt-10 text-center">
          For who is this?
        </p>
        <ul className="text-lg font-thin text-center">
          <li>student</li>
          <li>self learner</li>
          <li> etc</li>
          <li>etc</li>
          <li>etc</li>
        </ul>
      </div>
      <Card className="mx-auto max-w-sm mt-9">
        <p className="text-3xl font-semibold mt-10 text-center text-emerald-700">
          Pricing
        </p>
        <p className=" font-thin text-md text-center text-fuchsia-700">
          8$/month
        </p>
        <Separator className="my-4" />
        <ul className="text-lg font-thin text-center">
          <li>*unlimided access</li>
          <li>*AI tools</li>
          <li> *take note</li>
          <li>etc</li>
          <li>etc</li>
        </ul>
        <div className="flex justify-center">
          <Button asChild className="bg-emerald-700">
            <Link href="/pages/signup">Get access</Link>
          </Button>
        </div>
        <br />
      </Card>

      <Carousel className="mx-auto max-w-sm mt-9">
        <CarouselContent>
          {imgCaroussel.map((imageCaroussel1) => (
            <CarouselItem key={imageCaroussel1.id}>
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

      <div className="mx-auto max-w-sm mb-10 ">
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
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <br />
      <br />
      <br />
      <div className="flex w-full max-w-sm items-center space-x-2 mx-auto  mt-9 mb-11">
        <Input type="email" placeholder="Email" />
        <Button type="submit" className="bg-emerald-700 hover:bg-emerald-800">
          Subscribe
        </Button>
      </div>
      <br />
      <Separator className="my-4" />
      <div className="container mx-auto px-4">
        <footer className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm lg:order-2">
            &copy; 2024 Mon Entreprise. Tous droits réservés.
          </p>
          <div className="flex lg:order-1 lg:justify-center lg:mt-0 mt-4">
            <Link href="/pages/signup" className="text-sm hover:text-gray-400">
              sign up
            </Link>
            <Link
              href="/pages/login"
              className="text-sm hover:text-gray-400 ml-4"
            >
              login
            </Link>
            <Link href="#" className="text-sm hover:text-gray-400 ml-4">
              pricing
            </Link>
            <Link href="#" className="text-sm hover:text-gray-400 ml-4">
              term & condition
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );

  function divCardText() {
    return textCard.map((txt) => (
      <Card key={txt.id} className="ml-1 mr-1">
        <CardDescription>{txt.desc}</CardDescription>
        <CardFooter>
          <Button className="bg-emerald-700">Learn more</Button>
        </CardFooter>
      </Card>
    ));
  }

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

    return (
      <>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {youtubIdVideo.map((videoId) => (
            <Card key={videoId}>
              <CardHeader>
                <iframe
                  key={videoId}
                  width="mx-auto"
                  height="mx-auto"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <CardDescription>Card Description</CardDescription>
              </CardHeader>

              <CardFooter>
                <Button className="text-white bg-emerald-700 hover:bg-emerald-800">
                  Read
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </>
    );
  }
}
