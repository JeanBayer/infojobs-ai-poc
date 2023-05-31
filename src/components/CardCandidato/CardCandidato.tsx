"use client";

import React, { useState } from "react";
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
  const [visible, setVisible] = useState(true);

  const handleClick = async () => {
    const { result } = await addCandidato(
      company.uid,
      id,
      idOferta,
      probabilidad
    );
    setVisible(false);
  };
  return (
    <div
      className={`text-white border border-gray-500 card w-96 bg-primary-content ${visible ? "block" : "hidden"
        }`}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <div className="tooltip" data-tip="ℹ️ Esta probabilidad viene de analizar los datos de tu oferta con el candidato usando IA.">
            <button className="text-2xl font-bold">{probabilidad}%</button>
          </div>

        </div>
        <p className="text-xs">{rol}</p>
        <div className="divider"></div>

        <button className="btn btn-primary" onClick={handleClick}>
          Enviar Correo
        </button>
      </div>
    </div>
  );
};

export default CardCandidato;
