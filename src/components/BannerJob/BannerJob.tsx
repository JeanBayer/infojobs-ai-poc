"use client"
import Link from 'next/link';
import React, { useState } from 'react';

type BannerJob = {
  name: string,
  description: string,
  nombreEmpresa: string,
  idOferta: string
}
export const BannerJob = ({ name, description, nombreEmpresa = "globant", idOferta = "1" }: BannerJob) => {
  const [showMore, setShowMore] = useState(false);
  const [mode, setMode] = useState('Candidatos');

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleModeChange = () => {
    setMode(mode === 'Candidatos' ? 'Postulantes' : 'Candidatos');
  };

  return (
    <div className="rounded-br-3xl border-gray-500 border rounded-bl-3xl shadow-xl">
      <div className="card-body ">
        <h2 className="card-title text-white">{name}</h2>
        <div className="flex-auto">
          <p>{showMore ? description : description.slice(0, 300) + '...'}</p>
          {description.length > 100 && (
            <button
              role="button"
              className="btn btn-active btn-ghost btn-xs"
              onClick={toggleShowMore}
            >
              {showMore ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </div>
        <div className="card-actions justify-start">
          <div className="btn-group">
            <Link
              href='/company/globant/oferta/1/candidatos'
              className={`btn ${mode === 'Candidatos' ? 'btn-active' : ''}`}
              onClick={handleModeChange}
            >
              Candidatos
            </Link>
            <Link
              href={`/company/${nombreEmpresa}/oferta/${idOferta}/postulados`}
              className={`btn ${mode === 'Postulantes' ? 'btn-active' : ''}`}
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
