import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { getImages } from "@/lib/getImages";

export default function Galeria() {
  const years = ["2023", "2022"];

  return (
    <div className="container mx-auto py-12 md:px-0 px-2">
      <div className="mb-3">
        <h1 className="text-3xl font-semibold">Galeria de Fotos</h1>
        <p className="text-lg font-normal text-gray-500">
          Todos direitos reservados - ©
        </p>
      </div>
      <Tabs defaultValue="2023" className="mb-8">
        <TabsList className="flex justify-center gap-4 mb-6">
          {years.map((year) => (
            <TabsTrigger key={year} value={year}>
              {year}
            </TabsTrigger>
          ))}
        </TabsList>
        {years.map((year) => {
          const images = getImages(year);
          return (
            <TabsContent key={year} value={year}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((src, index) => (
                  <div key={index} className="relative group">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img
                          src={src}
                          alt={`Photo ${index + 1}`}
                          width="300"
                          height="300"
                          className="w-full h-auto rounded-lg object-cover transition-opacity group-hover:opacity-80 cursor-pointer"
                          style={{ aspectRatio: "300/300", objectFit: "cover" }}
                        />
                      </DialogTrigger>
                      <DialogContent className="p-0 flex items-center justify-center max-w-screen-lg max-h-screen-lg">
                        <img
                          src={src}
                          alt={`Photo ${index + 1}`}
                          className="w-auto h-auto max-w-full max-h-full object-contain"
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
