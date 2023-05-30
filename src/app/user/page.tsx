"use client";
import { useUser } from "@/hooks/useUser";
import Link from "next/link";

export default function ResumePage() {
  const { user, isLoading, isError } = useUser();

  return (
    <div className="flex mt-10 justify-center items-center">
      <div className="card w-96 bg-secondary text-secondary-content mx-auto">
        <div className="card-body">
          <h2 className="card-title">Gracias {user?.info?.name} por confiar en nosotros ✨</h2>
          <p> Infojobs AI se encargará de mostrar tu perfil en las ofertas que encages y recibirás un correo si una empresa a decidido conocerte.</p>
          <div className="card-actions justify-end">
            <Link href='/' className="btn">Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
