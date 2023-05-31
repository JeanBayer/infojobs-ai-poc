"use client";

import React, { useState } from "react";
import { addCandidato } from "@/firebase/firestore/addData";
import { toast } from "react-toastify";
import axios from "axios";

type CardCandidato = {
  candidato: any;
  company: any;
  oferta: any;
};

const CardCandidato = ({ candidato, company, oferta }: CardCandidato) => {
  const [visible, setVisible] = useState(true);
  const notify = () =>
    toast.success("Email enviado correctamente", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleClick = async () => {
    setVisible(false);
    const { result } = await addCandidato(
      company.uid,
      candidato?.info?.id,
      oferta?.id,
      candidato?.probabilidad
    );
    // Send email
    await axios.post("/api/email", {
      empresa: company,
      postulante: candidato,
      oferta,
    });

    notify();

    // remove de localStorage el candidato
    const cachePrediccion = JSON.parse(
      localStorage.getItem("prediccion") || "{}"
    );
    const prediccionEncontrada = cachePrediccion.id === oferta.id;
    if (prediccionEncontrada) {
      const newPrediccion = cachePrediccion.result.filter(
        (candidatoLC: any) => candidatoLC.info.id !== candidato?.info?.id
      );
      localStorage.setItem(
        "prediccion",
        JSON.stringify({ ...cachePrediccion, result: newPrediccion })
      );
    }
  };
  return (
    <div
      className={`text-white border border-gray-500 card w-96 bg-primary-content ${
        visible ? "block" : "hidden"
      }`}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{candidato?.info?.name}</h2>
          <div
            className="tooltip"
            data-tip="ℹ️ Esta probabilidad viene de analizar los datos de tu oferta con el candidato usando IA."
          >
            <button className="text-2xl font-bold">
              {candidato?.probabilidad}%
            </button>
          </div>
        </div>
        <p className="text-xs">{candidato?.experience[0]?.job}</p>
        <div className="divider"></div>

        <button className="btn btn-primary" onClick={handleClick}>
          Enviar Correo
        </button>
      </div>
    </div>
  );
};

export default CardCandidato;
