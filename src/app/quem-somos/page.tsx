import Image from "next/image";
import quemSomos from "./dataQuemSomos";

// Componente funcional QuemSomosPage que representa a página "Quem nós somos?"
export default function QuemSomosPage() {
  return (
    // Div que contém a estrutura da página, ocupando a altura total da tela em telas extra grandes (xl) e ajustando automaticamente em outras resoluções
    <div className="min-h-screen xl:flex block border-y-4 border-yellow-custom">
      {/* Div flexível que ocupa metade da largura total, onde a imagem é renderizada */}
      <div className="flex-1">
        {/* Componente Image que exibe a imagem "foto2.jpg" com largura de 700 pixels e altura de 750 pixels, utilizando a classe para ajustar a proporção e cobrir o espaço disponível */}
        <Image
          src={"/quem-somos/foto.jpg"}
          alt="Foto da Simulação"
          width={700}
          height={750}
          className="object-cover h-full w-full"
        />
      </div>
      {/* Div flexível que ocupa a outra metade da largura total, responsável por exibir o conteúdo textual */}
      <div className="flex-1 xl:px-20 px-10 py-10 tracking-widest flex flex-col gap-5">
        {/* Título principal da página, centralizado, com estilo personalizado para telas extra grandes (xl) */}
        <h1 className="text-center xl:text-5xl text-3xl text-yellow-custom font-semibold border-b-2 border-yellow-custom pb-3">
          Quem nós somos?
        </h1>
        {/* Parágrafo de texto justificado, com tamanhos de fonte variáveis para diferentes resoluções, espaçamento entre letras ajustado e estilo de fonte leve */}
        <p className="sm:text-justify text-left text-lg xl:text-2xl lg:text-2xl leading-8 font-light sm:px-3">
          {quemSomos}
        </p>
      </div>
    </div>
  );
}
