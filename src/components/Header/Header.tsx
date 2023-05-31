"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const menu = [
  {
    name: "Crear oferta",
    link: "",
  },
];
const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">InfoJobs</a>
      </div>
      <div className="navbar-end">
        <div className="flex gap-x-4">
          <button
            onClick={() => {
              signIn("infojobs", { callbackUrl: "/user" });
            }}
            className="btn btn-secondary"
          >
            Persona
          </button>
          <Link href="/company/signin" className="btn btn-secondary">
            Empresa
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
