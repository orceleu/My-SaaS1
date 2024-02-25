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

import imgcomp from "../public/img_micro2.jpg";
import imgcomp2 from "../public/imgmicro.jpg";
import imgcomp3 from "../public/imgrelais.jpg";
import FloatinButton from "./component/FloatinButton";

export default function Home() {
  return (
    <main>
      <div className="ml-5 mr-5 mt-10">
        <h2>hello</h2>

        <Card className="mx-auto max-w-sm mb-10">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">Card Content</p>
          </CardContent>
          <CardFooter>
            <p className="text-xl text-muted-foreground">Card Footer</p>
            <Select>
              <SelectTrigger className="w-[180px] ml-11">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <div>
            <Image
              layout="fixed"
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              width={500}
              height={400}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>

        <Carousel className="mx-auto max-w-sm mt-9">
          <CarouselContent>
            <CarouselItem>
              <Image
                src={imgcomp}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={imgcomp2}
                alt="Description de mon image"
                width={500}
                height={500}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={imgcomp3}
                alt="Description de mon image"
                width={500}
                height={500}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
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
      <FloatinButton />
      <div className="flex w-full max-w-sm items-center space-x-2 mx-auto  mt-9 mb-11">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </main>
  );
}
