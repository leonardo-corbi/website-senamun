import React from "react";
import dados from "../dataMembros";

type Membro = {
  nome: string;
  cargo: string;
  posicao: string;
  imagem: string;
};

type Dados = {
  [key: string]: Membro[];
};

const Crises: React.FC = () => {
  const secretariosSec = dados["ddcr"];

  return (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center my-14 underline">
        Diretoria de Crises
      </h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {secretariosSec.map((secretario, index) => (
          <div
            key={index}
            className={`overflow-hidden flex flex-col items-center ${
              shouldExpandToNextRow(index, secretariosSec.length)
                ? "col-span-1 xl:col-span-3"
                : ""
            }`}
          >
            <img
              src={`/time/crises/${secretario.imagem}`}
              className="border-4 border-blue-custom rounded-md"
              alt={secretario.nome}
              width={260}
              height={260}
            />
            <div className="p-4 text-center text-nowrap">
              <h3 className="text-xl font-semibold mb-1">{secretario.nome}</h3>
              <p className="text-lg">{secretario.cargo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to determine if the current item should span multiple columns
const shouldExpandToNextRow = (index: number, totalItems: number) => {
  return index === totalItems - 1 && totalItems % 3 !== 0;
};

export default Crises;
