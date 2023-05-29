"use client";
import { useUser } from "@/hooks/useUser";

export default function ResumePage() {
  const { user, isLoading, isError } = useUser();

  return (
    <div className="w-full m-auto mt-4 container-wrapper">
      <div className="flex flex-col w-full h-full gap-4 md:flex-row">
        <section className="flex-row items-start relative shadow-sm bg-white rounded-lg p-6 m-4 w-[320px]">
          <div className="flex flex-col">
            {isLoading && <p>Cargando...</p>}
            {isError && <p>Hubo un error al cargar los datos</p>}
            {user && <pre>{JSON.stringify(user)}</pre>}
          </div>
        </section>
      </div>
    </div>
  );
}
