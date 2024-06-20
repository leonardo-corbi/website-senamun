"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dados from "../dataComites";
import HomepageHeader from "@/components/HomepageHeader";

const blurBackground = "backdrop-blur-md";

interface Committee {
  tema: string;
  comite: string;
  modalidade: string;
  classroom: string;
  idioma: string;
  imagem: string | null;
}

export default function ComitesEnglish() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Committee | null>(null);
  const [committees, setCommittees] = useState<Committee[]>([]);

  useEffect(() => {
    const filteredData = dados.filter(
      (committee: Committee) => committee.idioma === "en"
    );
    setCommittees(filteredData);
  }, []);

  const openModal = (item: Committee) => {
    setModalData(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <HomepageHeader pageTitle="Comitês-" pageSubtitle="Em inglês" />
      <div className="flex flex-col justify-center bg-gray-100 min-h-fit">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 md:p-6 lg:p-10 justify-center">
          {committees.map((committee, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl h-auto">
              <div className="flex justify-center items-center h-44 w-full overflow-hidden">
                <div className="relative w-full h-full flex justify-center items-center">
                  <Image
                    src={
                      committee.imagem
                        ? `/comites/en/${committee.imagem}`
                        : "/logo-senamun.svg"
                    }
                    alt="Imagem do Comite"
                    layout="responsive"
                    width={1000} // largura da imagem original
                    height={500} // altura da imagem original
                    className="object-contain"
                  />
                </div>
              </div>
              <hr />
              <div className="px-4 py-3 flex flex-col md:h-[230px] h-auto">
                <h2 className="font-bold text-xl">{committee.tema}</h2>
                <p className="text-lg">{committee.comite}</p>
                <p className="text-lg">{committee.modalidade}</p>
                <div className="mt-auto">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => openModal(committee)}
                  >
                    Ver Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && modalData && (
        <div
          className={`fixed z-10 inset-0 overflow-y-auto ${
            isOpen ? blurBackground : ""
          }`}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div
              className={`${
                isOpen
                  ? "opacity-100 transition-opacity duration-200"
                  : "opacity-0 transition-opacity duration-300"
              } inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      {modalData.tema}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {modalData.comite}
                      </p>
                      <p className="text-sm text-gray-500">
                        {modalData.modalidade}
                      </p>
                      <button
                        onClick={() => {
                          window.open(modalData.classroom, "_blank");
                        }}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Link para o Classroom
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
