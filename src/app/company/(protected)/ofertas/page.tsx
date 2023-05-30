"use client";

import { CardJob, HeaderLayout } from "@/components";
import { useAuthContext } from "@/context/AuthContext";

export default function OfertasCompany() {
  const { company } = useAuthContext();

  return (
    <main className="p-3">
      <HeaderLayout />
      <section>
        {company?.ofertas?.map(
          ({
            id,
            puesto,
            descripcion,
          }: {
            id: string;
            puesto: string;
            descripcion: string;
          }) => (
            <CardJob key={id} name={puesto} description={descripcion} id={id} />
          )
        )}
      </section>
      <section>
        {
          company?.ofertas?.length <= 0 && (<p>No hay ofertas</p>)
        }
      </section>
    </main>
  );
}
