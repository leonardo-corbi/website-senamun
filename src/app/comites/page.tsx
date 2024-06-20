import Image from "next/image";
import Link from "next/link";
import HomepageHeader from "@/components/HomepageHeader";

export default function ComitesPage() {
  const headerHeight = 80;

  return (
    <div>
      <HomepageHeader pageTitle="Comitês" pageSubtitle="Descubra os temas" />
      <section className="bg-blue-custom h-auto xl:h-screen flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-center items-stretch xl:px-32 py-12 xl:py-32">
          {/* Card 1 */}
          <div className="flex flex-col p-8 border-2 rounded-2xl shadow-md mx-4 mb-8 md:mb-0 md:flex-grow">
            <h1 className="lg:text-5xl text-3xl text-yellow-custom font-semibold">
              Comitês SenaMUN 2024
            </h1>
            <p className="text-white lg:text-xl text-lg mb-4 font-medium text-nowrap">
              em Português
            </p>
            <ul className="list-disc list-inside mb-4 text-white lg:text-xl text-lg flex-grow">
              <li>Direitos Humanos (2)</li>
              <li>Conselho de Segurança</li>
              <li>OMC</li>
              <li>UNESCO</li>
              <li>OIT</li>
              <li>ECOSOC</li>
              <li>OEA</li>
              <li>CMA</li>
              <li>Especial</li>
            </ul>
            <Link
              href="/comites/ptbr"
              className="py-2 px-4 rounded-2xl border-2 border-yellow-custom text-white hover:bg-yellow-custom hover:text-lg duration-300 text-center block"
            >
              Saiba mais
            </Link>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col p-8 border-2 rounded-2xl shadow-md mx-4 md:flex-grow">
            <h1 className="lg:text-5xl text-3xl text-yellow-custom font-semibold">
              Comitês SenaMUN 2024
            </h1>
            <p className="text-white lg:text-xl text-lg mb-4 font-medium text-nowrap ">
              em Inglês
            </p>
            <ul className="list-disc list-inside mb-4 text-white lg:text-xl text-lg flex-grow">
              <li>SC</li>
              <li>HSC</li>
              <li>Special</li>
            </ul>
            <Link
              href="/comites/en"
              className="py-2 px-4 rounded-2xl border-2 border-yellow-custom text-white hover:bg-yellow-custom hover:text-lg duration-300 text-center block"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
