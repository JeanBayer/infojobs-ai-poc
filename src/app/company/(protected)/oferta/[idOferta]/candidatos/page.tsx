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
    name: "John Doe",
    probabilidad: 80,
    rol: "Frontend Developer with React"
  },
  {
    id: "2",
    name: "Jane Smith",
    probabilidad: 95,
    rol: "Frontend Developer"
  },
  {
    id: "3",
    name: "Michael Johnson",
    probabilidad: 70,
    rol: "Full Stack Developer"
  },
  {
    id: "4",
    name: "Emily Davis",
    probabilidad: 60,
    rol: "Software Engineer"
  }
];
