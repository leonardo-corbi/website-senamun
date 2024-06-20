"use client";

import HomepageHeader from "@/components/HomepageHeader";
import Image from "next/image";

export default function Campus() {
  const headerHeight = 80;

  return (
    <div>
      <HomepageHeader pageTitle="Mapa" pageSubtitle="Se localize melhor" />
      <section className="bg-blue-custom h-40 w-full text-center flex flex-col justify-center">
        <h1 className="text-4xl text-yellow-custom font-semibold">
          Mapa do Campus
        </h1>
        <p className="text-lg text-white">Observe abaixo</p>
      </section>
      <section className="bg-white flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/mapa/campus.jpg"
            alt="Mapa Senamun"
            className="mt-10"
            width={1600}
            height={800}
            priority
          />
          <a
            href="/mapa/campus.jpg"
            download="campus.jpg"
            className="mb-10 bg-yellow-custom text-white py-2 px-4 rounded"
          >
            Baixar Imagem
          </a>
        </div>
      </section>
      <section className="bg-blue-custom h-40 w-full text-center flex flex-col justify-center">
        <h1 className="text-4xl text-yellow-custom font-semibold">
          Mapa do Acadêmico 1 - Segundo Andar
        </h1>
        <p className="text-lg text-white">Observe abaixo</p>
      </section>
      <section className="bg-white flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/mapa/salas.jpg"
            alt="Mapa Senamun"
            className="mt-10"
            width={1000}
            height={800}
            priority
          />
          <a
            href="/mapa/salas.jpg"
            download="salas.jpg"
            className="mb-10 bg-yellow-custom text-white py-2 px-4 rounded"
          >
            Baixar Imagem
          </a>
        </div>
      </section>
    </div>
  );
}
