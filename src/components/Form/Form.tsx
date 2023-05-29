import React from 'react';
import { Label } from '../Label/Label';
import { Select } from '../Select/Select';
import { TextArea } from '../TextArea/TextArea';

const idiomas = ["Inglés", "Francés"];
const modalidad = ["Presencial", "Híbrida", "Remoto"];

export const Form = () => {
  return (
    < >
      <h3 className='text-white text-2xl text-center my-10'>Añadir oferta de trabajo</h3>
      <div className="flex justify-center">

        <div className="grid grid-cols-1 mb-4">
          <div className="mb-4">
            <Label labelText="Nombre del puesto" />
          </div>
          <div className="mb-4">

            <TextArea labelText="Descripción del puesto" />
          </div>
          <div className="mb-4">
            <Label labelText="Localidad" />
          </div>
          <div className="mb-4">
            <Select labelText="Selecciona modalidad" list={modalidad} />
          </div>
          <div className="mb-4">
            <Select labelText="Selecciona idiomas" list={idiomas} />
          </div>
          <button className='btn btn-primary'> Enviar </button>
        </div>
      </div>
    </>
  );
};
