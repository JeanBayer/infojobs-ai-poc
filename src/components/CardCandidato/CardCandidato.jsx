import React from 'react'


export const CardCandidato = ({
  name,
  probabilidad,
  rol
}) => {
  return (
    <div className="card w-96 border-gray-500 text-white border text-primary-content">
      <div className="card-body">
        <div className='flex justify-between'>

          <h2 className="card-title">{name}</h2>
          <span className=''>{probabilidad}</span>
        </div>
        <p className="text-xs">{rol}</p>
        <div className='divider'></div>

        <button className="btn btn-primary">Enviar</button>
      </div>
    </div>
  )
}
