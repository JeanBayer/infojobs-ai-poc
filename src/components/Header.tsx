"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function HeaderComponent() {
  const logoutHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    signOut();
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="box-border block w-full px-4 py-5 mx-auto max-w-7xl md:px-2">
        <div className="relative flex items-center h-10">
          <button className="flex-grow-0" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
