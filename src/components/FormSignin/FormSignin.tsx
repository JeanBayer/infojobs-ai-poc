
"use client"
import signIn from '@/firebase/auth/signin';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const FormSignin = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push(`/company/ofertas`);
  }
  return (

    <div className='flex justify-center gap-5'>
      <div>
        <form onSubmit={handleForm} className="form">
          <div className="mb-4">
            <label htmlFor="email" className="block">
              <span>Email</span>
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
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">
              <span>Password</span>
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
          </div>
          <button type="submit" className="bg-indigo-500 mb-5  text-white py-2 px-4 rounded">
            Sign In
          </button>
        </form>
        <Link href='/company/signup' className="text-indigo-500  underline">Crear una cuenta</Link>
      </div>

    </div>
  );

}
export default FormSignin