"use client";

import { BannerJob, BtnReload, HeaderLayout } from "@/components";
import { useAuthContext } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function OfertaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { company } = useAuthContext();
  const pathname = usePathname();

  const idOferta = useMemo(() => pathname.split("/")[3], [pathname]);
  const oferta = useMemo(() => {
    return company?.ofertas?.find(
      (oferta: any) => oferta.id.toString() === idOferta
    );
  }, [idOferta, company?.ofertas]);

  console.log({ oferta });
  return (
    <main className="p-3">
      <HeaderLayout />
      <BannerJob
        idOferta={idOferta}
        name={oferta?.puesto}
        description={oferta?.descripcion}
      />
      <div className="flex justify-end">
        <BtnReload />
      </div>
      {children}
    </main>
  );
}
