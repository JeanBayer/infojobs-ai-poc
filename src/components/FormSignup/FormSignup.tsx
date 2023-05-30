"use client"
import signUp from '@/firebase/auth/signup';
import addData from '@/firebase/firestore/addData';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const FormSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const router = useRouter();



  const handleForm = async (event: any) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);
    const data = {
      uid: result?.user.uid,
      nombre,
      correo: result?.user.email,
      ofertas:[]
    }
    const { result: addDataResult, error: addDataError } = await addData("empresas", result?.user.uid, data);
    if (error || addDataError) {
      return console.log(error);
    } 

    console.log(result);

    return router.push(`/company/ofertas`);
  };
  return (
    <div className='flex justify-center gap-5'>
      <form className="form">
        <label htmlFor="email">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label>
          <p>Nombre de la Empresa</p>
          <input
            onChange={(e) => setNombre(e.target.value)}
            required
            type="text"
            name="nombre"
            value={nombre}
            id="nombre"
            placeholder="Infojobs"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button onClick={handleForm} type="submit" className="bg-indigo-500 mt-5  text-white py-2 px-4 rounded">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default FormSignup