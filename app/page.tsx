import Image from "next/image";
import Header from "./Components/UI/Header/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start 2xl:min-h-full xl:min-h-full lg:min-h-full md:min-h-full min-h-8 2xl:min-w-full xl:min-w-full lg:min-w-full md:min-w-full min-w-52 2xl:px-60 xl:px-20 lg:px-11 md:px-10 2xl:py-11 xl:py-11 lg:py-8 md:py-2  border-b-2 ms:px-3 ls:px-10 py-2  xs:px-1 rounded-b-3xl">
      <Header />
    </main>
  );
}
