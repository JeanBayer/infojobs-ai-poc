"use client"
import Link from 'next/link';
import React, { useState } from 'react';

type CardJob = {
  name: string,
  description: string
}
export const CardJob = ({ name, description }: CardJob) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card bg-neutral m-8 bg-base-100  shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <div className='flex-auto '>

          <p>{showMore ? description : description.slice(0, 300) + '...'}</p>
          {description.length > 100 && (
            <button role='button' className="btn btn-active btn-ghost btn-xs" onClick={toggleShowMore}>
              {showMore ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </div>
        <div className="card-actions justify-end">
          <Link href='/company/globant/oferta/1/candidatos' className="btn btn-primary">Ver candidatos</Link>
        </div>
      </div>
    </div>
  );
};