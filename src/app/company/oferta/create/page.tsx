"use client";

import { useAuthContext } from "@/context/AuthContext";
import addData from "@/firebase/firestore/addData";
import { useState } from "react";
import { Form, HeaderLayout } from "@/components";

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
      <section>
        <HeaderLayout />
        <Form />
      </section>
    </main>
  );
}
