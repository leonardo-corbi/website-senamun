"use client";

import Image from "next/image";
import resources from "./dataRecursos";
import HomepageHeader from "@/components/HomepageHeader";

export default function Recursos() {
  const headerHeight = 80;

  const ResourceCard = ({ title, description, link, ativado }: any) => (
    <div
      onClick={() => {
        if (ativado) {
          window.location.href = link;
        } else {
          alert("Em construção.");
        }
      }}
      className={`border-yellow-custom border-2 p-8 rounded-xl text-center duration-500 ${
        ativado
          ? "hover:scale-105 hover:blur-sm cursor-pointer"
          : "cursor-not-allowed opacity-50"
      }`}
    >
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h5>
      <p className="font-normal text-yellow-custom">{description}</p>
    </div>
  );

  return (
    <div>
      <HomepageHeader pageTitle="Recursos" pageSubtitle="Documentos e salas" />
      <div className="bg-blue-custom h-screen flex flex-col justify-center border-y-8 border-yellow-custom">
        <div className="text-center text-yellow-custom px-2">
          <h1 className="font-bold text-4xl">Encontre os recursos desejados</h1>
          <p className="text-white text-lg mt-1">Consulte abaixo</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4 mt-10">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
