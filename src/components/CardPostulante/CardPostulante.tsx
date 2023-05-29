import Link from 'next/link'
import React from 'react'

type CardCandidato = {
  name: string,
  probabilidad: number,
  rol: string,
  nombreEmpresa: string,
  idOferta: string,
  idPostulante: string
}

export const CardPostulante = ({
  name,
  probabilidad,
  rol,
  nombreEmpresa = 'globant',
  idOferta = "1",
  idPostulante = "1"
}: CardCandidato) => {
  return (
    <div className="card w-96 border-gray-500 bg-primary-content text-white  border">
      <div className="card-body">
        <div className='flex justify-between'>

          <h2 className="card-title">{name}</h2>
          <span className=''>{probabilidad}</span>
        </div>
        <p className="text-xs">{rol}</p>
        <div className='divider'></div>

        <Link href={`company/${nombreEmpresa}/oferta/${idOferta}/postulados/${idPostulante}`} className="btn btn-primary">Ver perfil</Link>
      </div>
    </div>
  )
}
