"use client";
import React from "react";
import { Label, TextArea, SelectCustom } from "@/components";

const idiomas = ["Inglés", "Francés"];
const modalidad = ["Presencial", "Híbrida", "Remoto"];

const Form = () => {
  return (
    <>
      <h3 className="my-10 text-2xl text-center text-white">
        Añadir oferta de trabajo
      </h3>
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
            <SelectCustom labelText="Selecciona modalidad" list={modalidad} />
          </div>
          <div className="mb-4">
            <SelectCustom labelText="Selecciona idioma" list={idiomas} />
          </div>
          <button className="btn btn-primary"> Enviar </button>
        </div>
      </div>
    </>
  );
};

export default Form;
