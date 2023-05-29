import React from 'react'

export const Stat = () => {
  return (
    <div className="stats stats-vertical mt-5 xl:stats-horizontal shadow">

      <div className="stat">
        <div className="stat-title">Lenguaje de Dominio</div>
        <div className="stat-value text-primary">JavaScript</div>
      </div>

      <div className="stat">
        <div className="stat-title">Probabilidad</div>
        <div className="stat-value">90%</div>
      </div>

      <div className="stat">
        <div className="stat-title">Commits</div>
        <div className="stat-value">1,200</div>
      </div>

    </div>
  )
}
