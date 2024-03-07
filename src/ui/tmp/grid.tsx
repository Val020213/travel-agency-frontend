import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6">
      <div className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
        <Link className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4" href="#">
          <Button size="sm" variant="outline">
            View
          </Button>
        </Link>
        <Image
          alt="Beach"
          className="object-cover w-full h-60"
          height={600}
          src="/placeholder.svg"
          style={{
            aspectRatio: "800/600",
            objectFit: "cover",
          }}
          width={800}
        />
        <div className="grid gap-2 p-4 dark:bg-gray-950">
          <h3 className="font-semibold text-xl">Tropical Paradise</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Relax on white sandy beaches</p>
          <h4 className="font-semibold text-lg">$999.99</h4>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
        <Link className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4" href="#">
          <Button size="sm" variant="outline">
            View
          </Button>
        </Link>
        <Image
          alt="Mountains"
          className="object-cover w-full h-60"
          height={600}
          src="/placeholder.svg"
          style={{
            aspectRatio: "800/600",
            objectFit: "cover",
          }}
          width={800}
        />
        <div className="grid gap-2 p-4 dark:bg-gray-950">
          <h3 className="font-semibold text-xl">Alpine Adventure</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Hike through stunning mountain trails</p>
          <h4 className="font-semibold text-lg">$799.99</h4>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
        <Link className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4" href="#">
          <Button size="sm" variant="outline">
            View
          </Button>
        </Link>
        <Image
          alt="City"
          className="object-cover w-full h-60"
          height={600}
          src="/placeholder.svg"
          style={{
            aspectRatio: "800/600",
            objectFit: "cover",
          }}
          width={800}
        />
        <div className="grid gap-2 p-4 dark:bg-gray-950">
          <h3 className="font-semibold text-xl">Urban Escape</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Experience the vibrant culture of the city</p>
          <h4 className="font-semibold text-lg">$649.99</h4>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
        <Link className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4" href="#">
          <Button size="sm" variant="outline">
            View
          </Button>
        </Link>
        <Image
          alt="Countryside"
          className="object-cover w-full h-60"
          height={600}
          src="/placeholder.svg"
          style={{
            aspectRatio: "800/600",
            objectFit: "cover",
          }}
          width={800}
        />
        <div className="grid gap-2 p-4 dark:bg-gray-950">
          <h3 className="font-semibold text-xl">Rural Retreat</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Unwind in tranquil countryside surroundings</p>
          <h4 className="font-semibold text-lg">$499.99</h4>
        </div>
      </div>
    </section>
  )
}

