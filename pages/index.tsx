import Head from "next/head";
import { Footer } from "../components/Footer";
import { SimpleMath } from "../components/games/SimpleMath";
import { Meta } from "../components/Meta";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-red-100">
      <Meta title="Games" />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <SimpleMath />
      </main>

      <Footer />
    </div>
  );
}
