"use client";

import React from "react";
import { addCandidato } from "@/firebase/firestore/addData";

type CardCandidato = {
  name: string;
  probabilidad: number;
  rol: string;
  company: any;
  idOferta: string;
  id: number;
};

const CardCandidato = ({
  name,
  probabilidad,
  rol,
  company,
  idOferta,
  id,
}: CardCandidato) => {
  const handleClick = async () => {
    const { result } = await addCandidato(
      company.uid,
      id,
      idOferta,
      probabilidad
    );
    console.log({ result });
  };
  return (
    <div className="text-white border border-gray-500 card w-96 bg-primary-content">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <span className="">{probabilidad}</span>
        </div>
        <p className="text-xs">{rol}</p>
        <div className="divider"></div>

        <button className="btn btn-primary" onClick={handleClick}>
          Enviar prueba
        </button>
      </div>
    </div>
  );
};

export default CardCandidato;
