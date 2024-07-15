import React from "react";
import dados from "../dataMembros";

interface Secretario {
  imagem: string;
  nome: string;
  cargo: string;
  mensagem: string;
}

const secretariosSec: Secretario[] = dados["sec"];

const Secretariado: React.FC = () => {
  return (
    <div className="pb-20 pt-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-3">Secretariado</h2>
      <div className="flex justify-center">
        <div className="space-y-10 max-w-[1100px] px-10">
          <hr className="border border-gray-300" />
          {secretariosSec.map((secretario, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center xl:items-start px-10 py-5 bg-white rounded-lg shadow-lg ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <img
                src={`/time/secretarios/${secretario.imagem}`}
                alt={secretario.nome}
                className="w-96 h-96 object-cover self-center"
              />
              <div
                className={`w-auto ${index % 2 === 0 ? "md:ml-4" : "md:mr-10"}`}
              >
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{secretario.nome}</h3>
                  <p className="text-gray-500">{secretario.cargo}</p>
                </div>
                <p className="my-4 sm:ml-1 text-gray-700 text-md sm:text-justify text-left">
                  {secretario.mensagem}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secretariado;
