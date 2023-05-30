"use client";
import { useAuthContext } from "@/context/AuthContext";
import { CardPostulante } from "@/components";
import { useEffect, useState } from "react";
import { getPostulados } from "@/firebase/firestore/getData";
import { useSelectedLayoutSegment } from "next/navigation";

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

  useEffect(() => {
    const handlePostulados = async () => {
      const { result } = await getPostulados(company.uid, idOferta);
      console.log({ data: result });
      setPostulados(result);
    };
    handlePostulados();
  }, []);

  return (
    <main className="p-3">
      <section className="flex flex-wrap justify-center gap-4 ">
        {postulados?.map(
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
        )}
      </section>
    </main>
  );
}
