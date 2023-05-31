"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { CardPostulante, Loading } from "@/components";
import { getPostulados } from "@/firebase/firestore/getData";
import Link from "next/link";

export default function PostuladosCompany({
  params,
}: {
  params: {
    idOferta: string;
  };
}) {
  const { company } = useAuthContext();
  const { idOferta } = params;

  const [postulados, setPostulados] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!company || !company?.uid) return;
    const handlePostulados = async () => {
      setLoading(true);
      const { result } = await getPostulados(company.uid, idOferta);
      setPostulados(result);
      setLoading(false);
    };
    handlePostulados();
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
        {postulados.length > 0
          ? postulados?.map(
              ({
                postulado,
                probabilidad,
              }: {
                postulado: any;
                probabilidad: number;
              }) => (
                <CardPostulante
                  idOferta={idOferta}
                  idPostulante={postulado?.info?.id}
                  key={postulado?.info?.id}
                  name={postulado?.info?.name}
                  probabilidad={probabilidad}
                  rol={"Software Engineer"}
                />
              )
            )
          : !loading && (
              <div className="card w-96 text-primary-content m-8 shadow-xl bg-primary  bg-base-10 mx-auto">
                <div className="card-body">
                  <h2 className="card-title">No hay postulados</h2>
                  <p>
                    te invitamos a que añadas los candidatos que tienen más
                    probabilidad de ser contratados según nuestra IA
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      href={`/company/oferta/${idOferta}/candidatos`}
                      className="btn"
                    >
                      Ver Candidatos
                    </Link>
                  </div>
                </div>
              </div>
            )}
      </section>
    </main>
  );
}
