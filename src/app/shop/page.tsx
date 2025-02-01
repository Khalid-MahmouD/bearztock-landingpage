import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
import { BeakerIcon as Bear, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock product data
const products = {
  sweatshirts: [
    {
      id: 1,
      name: "Classic Bear Hoodie",
      price: 89.99,
      image: "/Home/1.jpeg",
      category: "sweatshirts",
    },
    {
      id: 2,
      name: "Urban Beast Crewneck",
      price: 79.99,
      image: "/Home/1.jpeg",
      category: "sweatshirts",
    },
    {
      id: 3,
      name: "Street Culture Zip-up",
      price: 94.99,
      image: "/Home/1.jpeg",
      category: "sweatshirts",
    },
    {
      id: 4,
      name: "Graffiti Art Hoodie",
      price: 99.99,
      image: "/Home/1.jpeg",
      category: "sweatshirts",
    },
  ],
  basics: [
    {
      id: 5,
      name: "Essential Bear Tee",
      price: 39.99,
      image: "/Home/1.jpeg",
      category: "basics",
    },
    {
      id: 6,
      name: "Urban Basic Long Sleeve",
      price: 49.99,
      image: "/Home/1.jpeg",
      category: "basics",
    },
    {
      id: 7,
      name: "Minimalist Logo Tee",
      price: 34.99,
      image: "/Home/1.jpeg",
      category: "basics",
    },
    {
      id: 8,
      name: "Street Basic Tank",
      price: 29.99,
      image: "/Home/1.jpeg",
      category: "basics",
    },
  ],
};

function ProductCard({
  product,
}: {
  product: (typeof products.sweatshirts)[0];
}) {
  return (
    <div className="group relative">
      <div className="mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-xl bg-zinc-900">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={600}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
          <h3 className="text-xl font-semibold text-white">{product.name}</h3>
          <p className="mt-2 text-lg font-medium text-gray-300">
            ${product.price}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <Button
          className="w-full bg-white py-6 text-lg text-black transition-colors duration-300 hover:bg-gray-200 hover:text-black"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default function ShopPage() {
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
              <Link href="/" className="transition-colors hover:text-gray-300">
                Home
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

      {/* Shop Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold">Shop Collection</h1>
              <p className="text-gray-400">
                Explore our latest collection of premium streetwear
              </p>
            </div>

            <Tabs defaultValue="sweatshirts" className="w-full">
              <TabsList className="mb-12 h-auto w-full justify-center rounded-none border-b border-white/10 p-0">
                <TabsTrigger
                  value="sweatshirts"
                  className="rounded-none border-b-2 border-transparent px-8 py-4 data-[state=active]:border-white data-[state=active]:bg-transparent"
                >
                  Sweatshirts
                </TabsTrigger>
                <TabsTrigger
                  value="basics"
                  className="rounded-none border-b-2 border-transparent px-8 py-4 data-[state=active]:border-white data-[state=active]:bg-transparent"
                >
                  Basics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="sweatshirts" className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                  {products.sweatshirts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="basics" className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                  {products.basics.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
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
