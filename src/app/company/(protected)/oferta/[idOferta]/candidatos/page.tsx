"use client";
import { useAuthContext } from "@/context/AuthContext";
import { CardCandidato, Loading } from "@/components";
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
  const [loading, setLoading] = useState(true);
  const { company } = useAuthContext();
  const { idOferta } = params;

  useEffect(() => {
    if (!company || !company?.uid) return;
    const traerCandidatos = async () => {
      setLoading(true);
      const { result } = await getCandidatos(company?.uid, idOferta);
      setCandidatos(result);
      setLoading(false);
    };
    traerCandidatos();
  }, [company, idOferta]);

  return (
    <main className="p-3">
      <section className="flex flex-wrap justify-center gap-4 ">
        {loading && (
          <>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </>
        )}
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
