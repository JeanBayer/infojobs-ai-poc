"use client";

import { useAuthContext } from "@/context/AuthContext";
import addData from "@/firebase/firestore/addData";
import { useState } from "react";

export default function CrearOfertaCompany() {
  const [data, setData] = useState(null);
  const { user, company } = useAuthContext();

  const handleForm = async () => {
    // TODO: agregar la información de una oferta creada por la empresa
    const object = {};
    const { result, error } = await addData("empresas", user?.uid, object);

    if (error) {
      return console.log(error);
    }
    console.log(result);
  };

  return (
    <main className="p-3">
      <header className="flex justify-around w-full mt-4 md:mt-0 md:h-full ">
        <h2 className="text-2xl font-bold">Crear Oferta</h2>
      </header>
      <section className="flex flex-col items-center justify-center w-full h-full mt-4 md:mt-0 md:h-full">
        <h3>{company?.nombre}</h3>
        <p>Crear Oferta</p>
        <button onClick={handleForm}>crear firestore</button>
      </section>
    </main>
  );
}
