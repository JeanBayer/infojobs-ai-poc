import { Stat } from "@/components";
import getDocument from "@/firebase/firestore/getData";
import Link from "next/link";

const handlePostulado = async (id: string) => {
  const { result, error } = await getDocument("candidatos", id);
  if (error) {
    return console.log(error);
  }
  console.log(result);
  return result;
};
export default async function PostuladoCompany({ params }) {
  const { idPostulado } = params;
  const { info, cvtext } = await handlePostulado(idPostulado);

  return (
    <main className="p-3">
      <section className="mx-8">
        <div className="flex justify-between">
          <h4 className="text-3xl font-bold">
            {`${info?.name.toLowerCase()} ${info?.surname1.toLowerCase()}`}
          </h4>
          {info.publicProfileLink && (
            <Link
              href={info.publicProfileLink}
              className="btn btn-secondary"
              target="_blank"
            >
              Ver perfil de InfoJobs
            </Link>
          )}
        </div>
        <p className="mt-5">{cvtext}</p>
      </section>
      <section className="flex justify-center">
        <Stat />
      </section>
    </main>
  );
}
