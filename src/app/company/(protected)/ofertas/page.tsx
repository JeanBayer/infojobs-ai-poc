"use client";

import { CardJob, HeaderLayout } from "@/components";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";

export default function OfertasCompany() {
  const { company } = useAuthContext();

  return (
    <main className="p-3">
      <HeaderLayout nameCompany={company?.nombre} />
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
        {company?.ofertas?.length <= 0 && (
          <div className="card w-96 text-primary-content m-8 shadow-xl bg-primary  bg-base-10 mx-auto">
            <div className="card-body">
              <h2 className="card-title">No hay ofertas</h2>
              <p>
                te invitamos a que crees las ofertas que necesites y nosotros
                nos encargaremos de darte los mejores candidatos
              </p>
              <div className="card-actions justify-end">
                <Link href={"/company/oferta/create"} className="btn">
                  Crear Oferta
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
