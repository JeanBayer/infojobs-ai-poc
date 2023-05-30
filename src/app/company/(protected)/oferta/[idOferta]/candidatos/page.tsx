"use client";
import { useAuthContext } from "@/context/AuthContext";
import { CardCandidato } from "@/components";
import { useEffect, useState } from "react";
import { getCandidatos } from "@/firebase/firestore/getData";

export default function CandidatosCompany({
  params,
}: {
  params: {
    idOferta: string;
  };
}) {
  const [candidatos, setCandidatos] = useState<any>([]);

  useEffect(() => {
    const traerCandidatos = async () => {
      const { result } = await getCandidatos();
      console.log(result);
      setCandidatos(result);
    };
    traerCandidatos();
  }, []);

  const { company } = useAuthContext();
  const { idOferta } = params;

  return (
    <main className="p-3">
      <section className="flex flex-wrap justify-center gap-4 ">
        {candidatos?.map(
          ({
            info,
            probabilidad,
            experience,
          }: {
            info: any;
            probabilidad: any;
            experience: any;
          }) => (
            <CardCandidato
              key={info.id}
              name={info.name}
              probabilidad={probabilidad}
              rol={experience[0].job}
              company={company}
              idOferta={idOferta}
              id={info.id}
            />
          )
        )}
      </section>
    </main>
  );
}
