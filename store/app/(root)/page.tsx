import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/banner/banner08.jpeg"
        // src="/banner/banner5.webp"
        alt="banner"
        width={1000}
        height={500}
        className="w-screen"
      />
    </>
  );
}
