import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative h-[80vh] max-h-[800px]">
          <div className="absolute inset-0 bg-black/50 z-10 ">
            <Image
              src={"/hero-bg.jpg"}
              alt="hero background"
              fill
              className="object-cover"
            />
            <div className="container relative z-20 h-full flex flex-col justify-center items-start text-white mx-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Authentic Flavors, <br />
                <span className="text-green-400">Exceptional</span> Dinning
              </h1>
              <p className="text-xl mb-8 max-w-2xl">
                Experience the finest culinary creations made with
                locally-sourced ingredients and passion
              </p>
              <div className="flex gap-4">
                <Button size={"lg"} asChild>
                  <Link href={"/menu"}>
                    View menu <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="text-black border-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href={"/reservation"}>
                    Make Reservation <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Section */}
      </main>
    </div>
  );
}
