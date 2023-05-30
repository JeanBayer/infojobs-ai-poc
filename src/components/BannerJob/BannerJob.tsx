"use client";
import Link from "next/link";
import React, { useState } from "react";

type BannerJob = {
  name: string;
  description: string;
  nombreEmpresa: string;
  idOferta: string;
};
const BannerJob = ({
  name,
  description,
  nombreEmpresa = "globant",
  idOferta = "1",
}: BannerJob) => {
  const [showMore, setShowMore] = useState(false);
  const [mode, setMode] = useState("Candidatos");

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleModeChange = () => {
    setMode(mode === "Candidatos" ? "Postulantes" : "Candidatos");
  };

  return (
    <div className="border border-gray-500 shadow-xl rounded-br-3xl rounded-bl-3xl">
      <div className="card-body ">
        <h2 className="text-white card-title">{name}</h2>
        <div className="flex-auto">
          <p>{showMore ? description : description.slice(0, 300) + "..."}</p>
          {description.length > 100 && (
            <button
              role="button"
              className="btn btn-active btn-ghost btn-xs"
              onClick={toggleShowMore}
            >
              {showMore ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>
        <div className="justify-start card-actions">
          <div className="btn-group">
            <Link
              href="/company/oferta/1/candidatos"
              className={`btn ${mode === "Candidatos" ? "btn-active" : ""}`}
              onClick={handleModeChange}
            >
              Candidatos
            </Link>
            <Link
              href={`/company/${nombreEmpresa}/oferta/${idOferta}/postulados`}
              className={`btn ${mode === "Postulantes" ? "btn-active" : ""}`}
              onClick={handleModeChange}
            >
              Postulantes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerJob;
