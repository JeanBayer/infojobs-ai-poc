import { Stat } from "@/components";
import Link from "next/link";


export default function PostuladoCompany() {
  return (
    <main className="p-3">
      <section className="mx-8">
        <div className="flex justify-between">

          <h4 className="text-3xl font-bold">{'Day Arango'}</h4>
          <Link href='www.linkedlin.com' className="btn btn-secondary">Ver perfil</Link>
        </div>
        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima excepturi, nemo consequatur error architecto similique sed soluta eligendi omnis atque earum nihil sapiente ab natus maxime optio tempora cumque!
          Dicta blanditiis eligendi hic accusamus exercitationem ad perferendis sapiente reprehenderit amet ipsa, in, cum non odit vero, optio expedita nihil eos illo pariatur necessitatibus sint nobis. Nemo nam consequuntur laudantium?
          Repellendus quas, ea veritatis debitis commodi doloribus mollitia voluptatum iste vero ullam optio est numquam saepe qui temporibus aperiam sit esse provident beatae quam ipsam natus. Quos eveniet culpa dolore.</p>
      </section>
      <section className="flex justify-center">
        <Stat />
      </section>
    </main>
  );
}
