import { CardJob } from "@/components";
import HeaderLayout from "@/components/HeaderLayout/HeaderLayout";

export default function OfertasCompany() {
  return (
    <main className="p-3">
      <HeaderLayout />
      <section>
        {
          offers.map(({ id, puesto, descripcion }) => (
            <CardJob key={id} name={puesto} description={descripcion} />
          ))
        }
      </section>
    </main>
  );
}

const offers = [
  {
    id: "1",
    idCompany: "ABC Company",
    puesto: "Desarrollador Frontend",
    descripcion: "Buscamos un desarrollador frontend con experiencia en HTML, CSS y JavaScript para unirse a nuestro equipo.",
    idioma: "Inglés",
    localidad: "Ciudad XYZ",
    modalidad: "Tiempo completo",
    postulados: []
  },
  {
    id: "2",
    idCompany: "XYZ Company",
    puesto: "Analista de Datos",
    descripcion: "Estamos en búsqueda de un analista de datos con conocimientos en SQL y Python para trabajar en proyectos de análisis de datos.",
    idioma: "Inglés, Español",
    localidad: "Ciudad ABC",
    modalidad: "Remoto",
    postulados: []
  },
  {
    id: "3",
    idCompany: "123 Company",
    puesto: "Diseñador Gráfico",
    descripcion: "Se requiere un diseñador gráfico creativo y talentoso para desarrollar diseños impactantes para nuestros clientes.",
    idioma: "Español",
    localidad: "Ciudad XYZ",
    modalidad: "Tiempo parcial",
    postulados: []
  },
  {
    id: "4",
    idCompany: "XYZ Company",
    puesto: "Ingeniero de Software",
    descripcion: "Estamos buscando un ingeniero de software con experiencia en Java y conocimientos de bases de datos para unirse a nuestro equipo de desarrollo.",
    idioma: "Inglés",
    localidad: "Ciudad ABC",
    modalidad: "Tiempo completo",
    postulados: []
  },
  {
    id: "5",
    idCompany: "789 Company",
    puesto: "Asistente Administrativo",
    descripcion: "Se solicita un asistente administrativo con habilidades organizativas y conocimientos de paquetes de Office.",
    idioma: "Español",
    localidad: "Ciudad XYZ",
    modalidad: "Remoto",
    postulados: []
  }
];

