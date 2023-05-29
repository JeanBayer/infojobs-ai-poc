import { CardPostulante } from "@/components";

export default function PostuladosCompany() {
  return (
    <main className="p-3">

      <section className="flex flex-wrap gap-4 justify-center ">
        {
          personas.map(({ id, name, rol, probabilidad }) => (
            <CardPostulante nombreEmpresa="globant" idOferta="1" idPostulante="1" key={id} name={name} probabilidad={probabilidad} rol={rol} />
          ))
        }
      </section>
    </main>
  );
}

const personas = [
  {
    id: "1",
    name: "Persona 1",
    probabilidad: 0.75,
    rol: "Rol 1"
  },
  {
    id: "2",
    name: "Persona 2",
    probabilidad: 0.5,
    rol: "Rol 2"
  }]