import Link from "next/link";
import React from "react";

type CardCandidato = {
  name: string;
  probabilidad: number;
  rol: string;
};

export const CardCandidato = ({ name, probabilidad, rol }: CardCandidato) => {
  return (
    <div className="card w-96 border-gray-500 bg-primary-content text-white  border">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <span className="">{probabilidad}</span>
        </div>
        <p className="text-xs">{rol}</p>
        <div className="divider"></div>

        <Link href="" className="btn btn-primary">
          Enviar
        </Link>
      </div>
    </div>
  );
};
