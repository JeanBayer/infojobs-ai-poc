"use client";
import { useAuthContext } from "@/context/AuthContext";
import { CardCandidato, Loading } from "@/components";
import { useEffect, useMemo, useState } from "react";
import { getCandidatos } from "@/firebase/firestore/getData";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const oferta = useMemo(
    () => company?.ofertas?.find((oferta: any) => oferta?.id === idOferta),
    [company, idOferta]
  );

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
        {candidatos?.map((candidato: any) => (
          <CardCandidato
            key={candidato.info.id}
            company={company}
            oferta={oferta}
            candidato={candidato}
          />
        ))}
      </section>
      <ToastContainer />
    </main>
  );
}
