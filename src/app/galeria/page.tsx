import React from "react";
import "./EdicoesAnteriores.css";

export default function EdicoesAnteriores() {
  // Lista de imagens com os nomes dos arquivos locais e os anos correspondentes
  const fotos = [
    { url: "foto1.JPG", ano: 2022 },
    { url: "foto2.JPG", ano: 2022 },
    { url: "foto3.JPG", ano: 2022 },
    { url: "foto4.JPG", ano: 2022 },
    { url: "foto5.JPG", ano: 2022 },
    { url: "foto6.JPG", ano: 2022 },
    { url: "foto7.JPG", ano: 2022 },
    { url: "foto9.JPG", ano: 2022 },
    { url: "foto10.JPG", ano: 2022 },
    { url: "foto11.JPG", ano: 2022 },
    { url: "foto12.JPG", ano: 2022 },
    { url: "foto13.JPG", ano: 2022 },
    { url: "foto14.JPG", ano: 2022 },
    { url: "foto15.JPG", ano: 2022 },
    { url: "foto16.JPG", ano: 2022 },
    { url: "foto17.JPG", ano: 2022 },
    { url: "foto18.JPG", ano: 2023 },
    { url: "foto19.JPG", ano: 2023 },
    { url: "foto20.JPG", ano: 2023 },
    { url: "foto21.JPG", ano: 2023 },
  ];

  return (
    <div className="edicoes-container">
      <h1 className="text-xl lg:text-2xl font-semibold">
        Galeria de Fotos - Edições Passadas
      </h1>
      <hr className="mx-10 my-2 border" />
      <div className="fotos-container">
        {fotos.map((foto, index) => (
          <div key={index} className="foto-item">
            <img src={`/edicoes/${foto.url}`} alt={`Edição ${foto.ano}`} />
            <div className="foto-legenda">{`Edição ${foto.ano}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
