import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Product />
    </>
  );
}
