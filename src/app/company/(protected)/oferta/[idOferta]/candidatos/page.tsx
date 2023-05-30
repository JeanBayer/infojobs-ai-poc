import { CardCandidato } from "@/components";

export default function CandidatosCompany() {
  console.log("candidatos");
  return (
    <main className="p-3">
      <section className="flex flex-wrap justify-center gap-4 ">
        {personas.map(({ id, name, rol, probabilidad }) => (
          <CardCandidato
            key={id}
            name={name}
            probabilidad={probabilidad}
            rol={rol}
          />
        ))}
      </section>
    </main>
  );
}

const personas = [
  {
    id: "1",
    name: "Persona 1",
    probabilidad: 0.75,
    rol: "Rol 1",
  },
  {
    id: "2",
    name: "Persona 2",
    probabilidad: 0.5,
    rol: "Rol 2",
  },
  {
    id: "3",
    name: "Persona 3",
    probabilidad: 0.9,
    rol: "Rol 3",
  },
  {
    name: "Persona 4",
    probabilidad: 0.25,
    rol: "Rol 4",
  },
  {
    id: "4",
    name: "Persona 5",
    probabilidad: 0.6,
    rol: "Rol 5",
  },
  {
    id: "5",
    name: "Persona 6",
    probabilidad: 0.8,
    rol: "Rol 6",
  },
];
