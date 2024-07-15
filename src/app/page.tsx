"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { LiaCalendarMinusSolid } from "react-icons/lia";
import { MdLeaderboard } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import Card from "@/components/Card";

export default function Home() {
  const headerHeight = 80; // Altura do cabeçalho, usada para calcular o minHeight do section.

  // Função para lidar com o clique para scroll suave até o elemento com id "video".
  const handleClickScroll = () => {
    const element = document.getElementById("video");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* Seção principal */}
      <section
        className="flex items-center xl:justify-between xl:px-32 md:px-32 px-12 justify-center text-nowrap"
        style={{ minHeight: `calc(100vh - ${headerHeight}px)` }} // Calcula a altura mínima da seção
      >
        {/* Conteúdo à esquerda */}
        <div className="text-light-blue-custom font-semibold text-center xl:text-left xl:text-4xl md:text-3xl sm:text-2xl text-xl">
          <div className="flex xl:hidden justify-center">
            {/* Logo (visível em dispositivos menores) */}
            <Image
              className="mb-5 md:mb-2"
              src={"/logo-senamun.svg"}
              alt="Logo Senamun"
              width={350}
              height={350}
            />
          </div>
          <h1 className="text-yellow-custom xl:text-8xl md:text-7xl sm:text-6xl text-5xl">
            SenaMUN III
          </h1>
          <p>Conferência Modelo ONU</p>
          <p className="mb-5">Senac Nações Unidas</p>
          {/* Botões de ação */}
          <div className="flex items-center sm:gap-4 gap-3 xl:justify-normal justify-center xl:scale-100 md:scale-100">
            {/* Link para "Saiba Mais" */}
            <Link
              href="/quem-somos "
              className="text-xl font-medium text-center xl:px-12 xl:py-4 md:px-8 md:py-3 sm:px-4 sm:py-3 px-2 py-3 border-4 border-light-blue-custom rounded-2xl hover:text-white hover:bg-light-blue-custom duration-300"
            >
              Saiba Mais
            </Link>
            {/* Botão para assistir ao vídeo */}
            <button
              className="flex font-normal text-lg items-center gap-1 underline hover:scale-105 duration-300"
              onClick={handleClickScroll}
            >
              <FaPlayCircle /> Assista ao vídeo
            </button>
          </div>
        </div>
        {/* Imagem à direita (visível em telas grandes) */}
        <div className="xl:block hidden ml-auto">
          <Image
            src={"/logo-senamun.svg"}
            alt="Logo Senamun"
            width={550}
            height={550}
          />
        </div>
      </section>
      {/* Seção da Carta do Secretariado */}
      <section className="bg-blue-custom py-20 2xl:px-96 xl:px-48 lg:px-40 md:px-32 flex flex-col justify-center h-auto">
        <div className="">
          {/* Título da Carta do Secretariado */}
          <h1 className="text-white text-3xl xl:text-5xl font-semibold tracking-widest text-center py-5 border-y-4 border-yellow-custom mx-12 ">
            Carta do Secretariado
          </h1>
          {/* Texto da Carta do Secretariado */}
          <p className="text-white text-md px-2 mt-8 text-justify mx-12 leading-7">
            Sejam muito bem-vindos à terceira edição do SenaMUN! Sou a Gabriella
            Ribeiro, é um imensurável prazer poder ser a Secretária Geral deste
            ano! Com entusiasmo, informo que nossa conferência acontecerá nos
            dias 31 de outubro e 01 de novembro de 2024.
            <br />
            Acredito firmemente que o conhecimento é uma das principais formas
            de transformar o nosso entorno, ampliando nossos horizontes e
            abrindo nossas mentes para novas perspectivas. Desse modo, as
            simulações da ONU representam uma excelente oportunidade de aprender
            tópicos novos, desenvolver diversas habilidades e conhecer novas
            pessoas.
            <br />
            <br />
            Este ano, o SenaMUN terá 13 comitês, sendo eles 10 em português e 3
            em inglês, cada um contará com um time de mesários comprometidos a
            proporcionar a melhor experiência possível. Teremos alguns tópicos
            inovadores e fora dos padrões tradicionais, abordando desde as
            equipes da Fórmula 1, princesas da Disney, jogadores de futebol, até
            discussão sobre medidas contra o narcotráfico internacional,
            reparação histórica no Haiti e militarização do Ártico. Dentro de um
            comitê, seja ele Conselho de Segurança ou Especial,
            independentemente em qual você estiver e a delegação que irá
            representar — mesmo sendo pequena ou extremamente neutra, todos os
            delegados são importantes! Vale destacar também que todos terão a
            oportunidade de brilhar e mostrar o que sabem do assunto.
            <br />
            <br />
            O secretariado e todas as diretorias estão empenhados em organizar a
            conferência da melhor forma. Criando um ambiente onde suas
            capacidades, como negociação, oratória e pesquisas aprofundadas,
            possam ser demonstradas e aprimoradas durante todo o debate.
            <br />
            <br />
            Para quaisquer dúvidas, anseios, preocupações sobre o SenaMUN, não
            hesite em nos enviar um e-mail: senacmun@gmail.com. Nos acompanhe
            pelo Instagram: @senamun_
            <br />
            <br />
            Espero encontrá-los em breve aqui! Gabriella Ribeiro
          </p>
        </div>
      </section>

      {/* Seção de Vídeo e Detalhes do Evento */}
      <section
        className="xl:h-screen h-screen xl:px-20 lg:px-16 md:px-12 sm:px-12 px-4 flex flex-col justify-center py-5"
        id="video"
      >
        <div className="flex xl:justify-between justify-center">
          {/* Conteúdo da seção de Vídeo e Detalhes */}
          <section className="flex flex-col justify-between gap-10">
            {/* Título e tema da conferência */}
            <div className="xl:text-4xl lg:text-4xl md:text-3xl text-2xl">
              <h1 className="text-yellow-custom font-semibold xl:text-left text-center">
                Tema da Conferência:
              </h1>
              <div className="text-light-blue-custom flex-col">
                <h2 className=" font-medium xl:text-left lg:text-left text-center">
                  “O mundo é o que se vê de onde se está”
                </h2>
                <p className="text-end text-xl font-light xl:pr-4 lg:pr-4 md:pr-10">
                  -Milton Santos
                </p>
              </div>
            </div>
            {/* Vídeo para dispositivos menores */}
            <div className="flex justify-center my-4 xl:my-0">
              <video
                width="600"
                height="300"
                controls
                className="xl:hidden block border-4 rounded-xl border-yellow-custom"
              >
                {/* <source src="/teste.mp4" type="video/mp4" /> */}
                Seu navegador não suporta o Video Player
              </video>
            </div>
            {/* Lista de detalhes do evento */}
            <div>
              <ul className="flex flex-col gap-6 xl:text-xl lg:text-xl md:text-xl sm:text-md text-sm">
                {/* Item de data do evento */}
                <li className="flex gap-3 items-center">
                  <FaRegCalendarAlt className="text-3xl text-yellow-custom items-center" />{" "}
                  31 de outubro à 01 de novembro
                </li>
                {/* Item de horário do evento */}
                <li className="flex gap-3 items-center">
                  <FaRegClock className="text-4xl text-yellow-custom items-center" />{" "}
                  Das 00:00 até 00:00
                </li>
                {/* Item de localização do evento */}
                <li className="flex gap-3 items-center">
                  <FiMapPin className="text-4xl text-yellow-custom items-center mt-3" />{" "}
                  31 Centro Universitário Senac - Santo Amaro <br />
                  Av. Eng. Eusébio Stevaux 823, São Paulo, SP, 04696-000
                </li>
              </ul>
            </div>
          </section>
          {/* Vídeo para dispositivos maiores */}
          <section>
            <video
              width="800"
              height="240"
              controls
              className="xl:block hidden border-4 rounded-xl border-yellow-custom ml-2"
            >
              <source src="/video-inicio.mp4" type="video/mp4" />
              Seu navegador não suporta o Video Player
            </video>
          </section>
        </div>
      </section>
      {/* Seção de Detalhes Adicionais */}
      <section className="container mx-auto">
        {/* Linha decorativa */}
        <hr className="border-yellow-custom py-2" />
        <div className="text-center mt-10 tracking-wider">
          {/* Título para mais detalhes importantes */}
          <h1 className="text-yellow-custom font-medium xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-xl">
            Para mais detalhes importantes
          </h1>
          {/* Descrição para consulta */}
          <p className="xl:text-xl lg:text-xl md:text-xl sm:text-xl text-lg text-light-blue-custom">
            Consulte o que deseja saber
          </p>
        </div>
        {/* Grid de Cards de Informações */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center mx-6 my-12">
          {/* Card de Comitês */}
          <Card
            title="Comitês"
            href="/comites"
            icon={<BiWorld />}
            subtitle="Descubra os temas"
          />
          {/* Card de Equipe */}
          <Card
            title="Equipe"
            href="/equipe"
            icon={<FaPeopleGroup />}
            subtitle="Conheça nosso time"
          />
          {/* Card de Cronograma */}
          <Card
            title="Cronograma"
            href="/cronograma"
            icon={<LiaCalendarMinusSolid />}
            subtitle="Veja nosso planejamento"
          />
          {/* Card de Recursos */}
          <Card
            title="Recursos"
            href="/recursos"
            icon={<MdLeaderboard />}
            subtitle="Documentos"
          />
          {/* Card de Mapa */}
          <Card
            title="Mapa"
            href="/mapa"
            icon={<FaMapMarkedAlt />}
            subtitle="Se localize melhor"
          />
          {/* Card de Contato */}
          <Card
            title="Contato"
            href="/contato"
            icon={<HiOutlineSpeakerphone />}
            subtitle="Nos contate"
          />
        </div>
      </section>
    </main>
  );
}
