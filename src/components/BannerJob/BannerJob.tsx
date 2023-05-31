"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { useEffect, useState } from "react";

type BannerJob = {
  name: string;
  description: string;
  idOferta: string;
};
const BannerJob = ({
  name = "",
  description = "",
  idOferta = "",
}: BannerJob) => {
  const [showMore, setShowMore] = useState(false);
  const [mode, setMode] = useState("candidatos");

  const param = useSelectedLayoutSegment();

  useEffect(() => {
    if (!param) return;
    setMode(param);
  }, [param]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="border border-gray-500 shadow-xl rounded-br-3xl rounded-bl-3xl">
      <div className="card-body ">
        <h2 className="text-white card-title">{name}</h2>
        <div className="flex-auto">
          <p>{showMore ? description : description?.slice(0, 300) + "..."}</p>
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
              href={`/company/oferta/${idOferta}/candidatos`}
              className={`btn ${mode === "candidatos" ? "btn-active" : ""}`}
            >
              Candidatos
            </Link>
            <Link
              href={`/company/oferta/${idOferta}/postulados`}
              className={`btn ${mode === "postulados" ? "btn-active" : ""}`}
            >
              Postulados
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerJob;
