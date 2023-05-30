import { BannerJob, BtnReload, HeaderLayout } from "@/components";

export default function OfertaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-3">
      <HeaderLayout />
      <BannerJob
        nombreEmpresa="globant"
        idOferta="1"
        name={oferta.puesto}
        description={oferta.descripcion}
      />
      <div className="flex justify-end">
        <BtnReload />
      </div>
      {children}
    </main>
  );
}

const oferta = {
  id: "1",
  idCompany: "ABC Company",
  puesto: "Desarrollador Frontend",
  descripcion:
    "Buscamos un desarrollador frontend con experiencia en HTML, CSS y JavaScript para unirse a nuestro equipo.",
  idioma: "Inglés",
  localidad: "Ciudad XYZ",
  modalidad: "Tiempo completo",
  postulados: [],
};