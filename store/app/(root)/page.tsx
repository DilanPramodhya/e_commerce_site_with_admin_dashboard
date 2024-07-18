import Collections from "@/components/Collections";
import Products from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/banner/banner08.jpeg"
        // src="/banner/banner5.webp"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      />
      <Collections />
      <Products />
    </>
  );
}
