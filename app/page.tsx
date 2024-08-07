import Image from "next/image";
import Header from "./Components/UI/Header/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start min-h-full 2xl:min-w-full xl:min-w-full lg:min-w-full 2xl:px-[35rem] xl:px-20 lg:px-11 2xl:py-11 xl:py-11 lg:py-8 md:py-2 md:px-2 border-b-2 rounded-b-3xl">
      <Header />
    </main>
  );
}
