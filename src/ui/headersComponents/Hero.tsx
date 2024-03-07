/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XUFziOnEG5n
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export default function Component() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel>
        <CarouselContent className="h-[20rem] md:h-[30rem]">
          <CarouselItem>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                alt="Image"
                className="object-cover"
                height={225}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold tracking-tight">Beautiful Mountains</h3>
                  <p className="text-sm text-gray-500">Amazing description</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                alt="Image"
                className="object-cover"
                height={225}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold tracking-tight">Sunset on the Beach</h3>
                  <p className="text-sm text-gray-500">Amazing description</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                alt="Image"
                className="object-cover"
                height={225}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold tracking-tight">Lush Green Forest</h3>
                  <p className="text-sm text-gray-500">Amazing description</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

