import Link from "next/link";
import { Button } from "@/components/ui/button";

const data = [
  {
    title: "Alunos do Senac Nações Unidas",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScDePnH0yBN2iTlTzcf9_zTz8Rcau_qJE-qBlnum0sLcK6wtg/viewform?usp=sf_link",
  },
  {
    title: "Alunos Senac - Performance de Crises",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScp_5mYlkJWwe86ODAEN4mWAdzb0BVnVmp_yatuLN-M8knMrA/viewform",
  },
  {
    title: "Imprensa (Press) - Alunos Senac e Escolas Parceiras",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSe6uqj6cBaOW6M6KLUOKeX6PZ2cmwxzyX4RzGJnOhc7xGWZFg/closedform",
  },
  {
    title: "Delegação Independente (sem advisor)",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScyrIuouxnAtoXbj0pOqnHDx5REEXd4DQ9sw-F5PrOTKx7SLw/viewform",
  },
  {
    title: "Mesários / Chairs",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdunuufsDM9lesd_dPLLzAyJnEqs2_hkUOjaO-f-PXlMVzGNA/viewform",
  },
  {
    title: "Escolas Parceiras",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScCTQB7LTEJG_4Vfia0sb4pBto7dnyG94jPTiTdeS6HE7I9ug/viewform",
  },
  {
    title: "Ex-alunos do Senac Nações Unidas",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdoOSoL7Gt5lV-cxxCkEpuV8akp5C9aUdghRDVPvSCWKNRR9Q/viewform",
  },
];

export default function Component() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Participe do Evento
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                🚨 AS INSCRIÇÕES PARA O SENAMUN JÁ ESTÃO ABERTAS!!! 🚨
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 h-full">
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
          {data.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex flex-col items-start justify-between gap-4 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <div className="">
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <Button variant="link" className="border">
                Inscrever-se
              </Button>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
