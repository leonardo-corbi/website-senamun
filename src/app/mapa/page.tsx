// src/app/campus/page.tsx
"use client";

import React from "react";
import HomepageHeader from "@/components/HomepageHeader";
import Image from "next/image";
import GoogleMapComponent from "./GoogleMap";
import { FaMapPin } from "react-icons/fa";

export default function Campus() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_MAPS_API;

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
          Google Maps - Senac Nações Unidas
        </h1>
        <p className="text-lg text-white">Observe abaixo</p>
      </section>
      <section className="bg-white">
        <GoogleMapComponent apiKey={googleMapsApiKey} />
        <div className="border-y-4 border-yellow-custom p-14">
          <p className="flex items-center gap-2">
            <FaMapPin />
            Universitário Senac Santo Amaro Av. Eng. Eusébio Stevaux, 823 -
            Campo Grande - São Paulo - SP, 04696-000 (Portaria 1)
          </p>
          <h1 className="mt-6 font-semibold">Mais informações:</h1>
          <div className="text-justify flex flex-col gap-3 mt-1">
            <p>
              Esta é a principal entrada da unidade, porém há a Portaria 2, que
              fica localizada na Rua Professor Campos de Oliveira, 588 - Jardim
              Anhanguera, São Paulo - SP, 04675-100.
            </p>
            <p>
              O Senac Nações Unidas está localizado no bairro Campo Grande, na
              zona Sul de São Paulo. Possui fácil acesso pelas principais vias
              da região, como as avenidas Marginal Pinheiros e Nações Unidas.
            </p>
            <p>
              Na frente do Senac (Portaria 1) passam 2 ônibus: Jd. Luso
              (546L-10) e Metrô Conceição (675P-10). A estação Jurubatuba-Senac
              fica apenas 1.1km de distância do Campus, é possível percorrer
              essa distância a pé.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
