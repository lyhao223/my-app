import Image from "next/image";
import Header from "./Components/UI/Header/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start min-h-screen px-60 py-20">
      <Header />
    </main>
  );
}
