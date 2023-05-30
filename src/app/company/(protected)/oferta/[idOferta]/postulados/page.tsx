"use client";
import { CardPostulante } from "@/components";
import { useAuthContext } from "@/context/AuthContext";

export default function PostuladosCompany({
  params,
}: {
  params: {
    idOferta: string;
  };
}) {
  const { company } = useAuthContext();
  const { idOferta } = params;

  const oferta: any = company?.ofertas?.find(
    (oferta: any) => oferta.id === idOferta
  );
  console.log("postulados");
  return (
    <main className="p-3">
      <section className="flex flex-wrap justify-center gap-4 ">
        {oferta?.postulados?.map(
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
