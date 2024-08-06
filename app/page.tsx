import Image from "next/image";
import Header from "./Components/UI/Header/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start min-h-full 2xl:px-[35rem] xl:px-32 py-11 border-b-2 rounded-b-3xl">
      <Header />
    </main>
  );
}
