"use client";

import { CardJob, HeaderLayout } from "@/components";
import { useAuthContext } from "@/context/AuthContext";

export default function OfertasCompany() {
  const { company } = useAuthContext();
  console.log(company);
  return (
    <main className="p-3">
      <HeaderLayout />
      <section>
        {company?.ofertas?.map(({ id, puesto, descripcion }) => (
          <CardJob key={id} name={puesto} description={descripcion} id={id} />
        ))}
      </section>
    </main>
  );
}
