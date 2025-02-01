import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
import { BeakerIcon as Bear } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Bear className="h-8 w-8" />
              <span className="text-xl font-bold">bearztock</span>
            </Link>
            <div className="space-x-4">
              <Link
                href="/shop"
                className="transition-colors hover:text-gray-300"
              >
                Shop
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-gray-300"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
                Streetwear for the Bold
              </h1>
              <p className="text-xl text-gray-400">
                Unleash your inner beast with our premium streetwear collection.
                Made for those who dare to stand out.
              </p>
              <Button size="lg" className="px-8 text-lg">
                Explore Collection
              </Button>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/Home/3.jpeg"
                alt="Bearztock Collection"
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="h-auto w-full justify-start rounded-none border-b border-white/10 p-0">
              <TabsTrigger
                value="about"
                className="rounded-none border-b-2 border-transparent px-8 py-4 data-[state=active]:border-white data-[state=active]:bg-transparent"
              >
                About Us
              </TabsTrigger>
              <TabsTrigger
                value="mission"
                className="rounded-none border-b-2 border-transparent px-8 py-4 data-[state=active]:border-white data-[state=active]:bg-transparent"
              >
                Our Mission
              </TabsTrigger>
              <TabsTrigger
                value="sustainability"
                className="rounded-none border-b-2 border-transparent px-8 py-4 data-[state=active]:border-white data-[state=active]:bg-transparent"
              >
                Sustainability
              </TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-8">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">The Bearztock Story</h2>
                  <p className="text-gray-400">
                    Born from the streets and raised in the urban jungle,
                    Bearztock represents the fierce spirit of modern fashion. We
                    create clothing that empowers individuals to express their
                    unique style while maintaining the highest standards of
                    quality and design.
                  </p>
                </div>
                <div className="relative h-[300px]">
                  <Image
                    src="/Home/4.jpeg"
                    alt="About Bearztock"
                    fill
                    className="rounded-lg object-cover"
                    style={{ objectPosition: "top center" }}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="mission" className="mt-8">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-400">
                    We&apos;re on a mission to redefine streetwear by combining
                    bold designs with sustainable practices. Every piece we
                    create is a statement of authenticity, designed to inspire
                    confidence and creativity in our community.
                  </p>
                </div>
                <div className="relative h-[300px]">
                  <Image
                    src="/Home/1.jpeg"
                    alt="Bearztock Mission"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sustainability" className="mt-8">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Sustainable Fashion</h2>
                  <p className="text-gray-400">
                    Sustainability isn&apos;t just a buzzword for us—it&apos;s a
                    commitment. From sourcing eco-friendly materials to
                    implementing ethical manufacturing processes, we&apos;re
                    dedicated to creating fashion that looks good and does good.
                  </p>
                </div>
                <div className="relative h-[300px]">
                  <Image
                    src="/Home/2.jpeg"
                    alt="Bearztock Sustainability"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center space-x-2">
              <Bear className="h-6 w-6" />
              <span className="font-bold">bearztock</span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} bearztock. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
