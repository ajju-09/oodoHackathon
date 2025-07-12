"use client";
import React from "react";
import Image from "next/image";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const sampleProducts = [
  {
    image: "/images/redshirt.jpeg",
    title: "Red Cotton Shirt",
    category: "Tops",
    size: "M",
  },
  {
    image: "/images/jeans.jpg",
    title: "Slim Fit Jeans",
    category: "Bottoms",
    size: "L",
  },
  {
    image: "/images/blackhoodie.webp",
    title: "Black Hoodie",
    category: "Outerwear",
    size: "XL",
  },
  {
    image: "/images/t-shirt.jpeg",
    title: "T-Shirt",
    category: "Outerwear",
    size: "M",
  },
  {
    image: "/images/shoes.jpg",
    title: "Sneakers",
    category: "Footwear",
    size: "XL",
  },
  {
    image: "/images/bags.jpg",
    title: "Bags",
    category: "Accessories",
    size: "XL",
  },
];

const Product = () => {
  return (
    <section className="min-h-screen w-full px-4 py-10 flex flex-col items-center bg-[#121212] text-white">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>

      <Carousel className="w-full max-w-6xl">
        <CarouselContent className="-ml-2 md:-ml-4">
          {sampleProducts.map((product, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3"
            >
              <div className="p-2">
                <Card className="bg-[#1e1e1e] text-white rounded-xl overflow-hidden shadow hover:shadow-emerald-400/30 transition">
                  <div className="relative w-full h-52">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <CardContent className="p-4 space-y-1">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-sm text-gray-400">
                      {product.category} · {product.size}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Product;
