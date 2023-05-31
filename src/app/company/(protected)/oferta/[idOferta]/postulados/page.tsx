"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { CardPostulante } from "@/components";
import { getPostulados } from "@/firebase/firestore/getData";

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
        {loading ? (
          <div>loading</div>
        ) : postulados.length > 0 ? (
          postulados?.map(
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
        ) : (
          <div className="flex flex-col gap-2">
            <h2 className="text-xl text-center text-gray-500">
              No hay postulados
            </h2>
            <p className="text-sm text-center text-gray-500">
              te invitamos a seleccionar los candidatos que mas te interesen y
              aparecerán aquí
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
