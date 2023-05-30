"use client";
import React, { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import addData from "@/firebase/firestore/addData";


const Form = () => {

  const [puesto, setPuesto] = useState('');

  const [descripcion, setDescripcion] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [modalidad, setModalidad] = useState("");
  const [idioma, setIdioma] = useState("");

  const { user, company } = useAuthContext();

  const handleForm = async (e) => {
    // TODO: agregar la información de una oferta creada por la empresa
    e.preventDefault()
    const object = {
      id: new Date().valueOf(),
      puesto,
      descripcion,
      localidad,
      modalidad,
      idioma,
      postulados: []
    };
    company.ofertas.push(object)
    const { result, error } = await addData("empresas", user?.uid, company);

    if (error) {
      return console.log(error);
    }
    console.log(result);
  };


  return (
    <>
      <h3 className="my-10 text-2xl text-center text-white">
        Añadir oferta de trabajo
      </h3>
      <form onSubmit={handleForm} className="flex form-control justify-center">
        <div className="grid grid-cols-1 mb-4">
          <div className="mb-4">
            <label className="input-group">
              <span>nombre del puesto</span>
              <input
                type="text"
                onChange={(e) => setPuesto(e.target.value)}
                value={puesto}
                placeholder="..."
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="input-group">
              <span>Descripción de la oferta</span>
              <textarea
                className="textarea w-96  input-bordered"
                placeholder="Bio"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
            </label>
          </div>
          <div className="mb-4">
            <label className="input-group">
              <span>Ingresa localidad</span>
              <input
                type="text"
                onChange={(e) => setLocalidad(e.target.value)}
                value={localidad}
                placeholder="..."
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="mb-4">
            <select
              className="select w-full max-w-xs"
              value={modalidad}
              onChange={(e) => setModalidad(e.target.value)}
            >
              <option disabled value="">
                Selecciona modalidad
              </option>
              {modalidades.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <select
              className="select w-full max-w-xs"
              value={modalidad}
              onChange={e => setIdioma(e.target.value)}
            >
              <option disabled value="">
                Selecciona modalidad
              </option>
              {idiomas.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary"> Enviar </button>
        </div>
      </form>
    </>
  );
};

export default Form;

const modalidades = [
  "presincial",
  "remoto",
  "hibrido"
]
const idiomas = [
  "español",
  "inglés",
  "frances"
]