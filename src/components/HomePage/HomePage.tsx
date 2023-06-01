import React from "react";
import img from "../../images/imagen.png";
import Image from "next/image";

export const HomePage = () => {
  return (
    <div className="m-10">
      <div className="flex justify-center flex-wrap ">
        <h2 className="font-bold text-4xl mb-5 text-white">
          Herramienta de Reclutamiento automático
        </h2>
        <br />
        <p className="mb-12 text-lg text-center mx-5">
          ¿Estás buscando los mejores candidatos para tus ofertas de trabajo?
          Nuestra aplicación está aquí para ayudarte. Utilizando avanzadas
          técnicas de inteligencia artificial y procesamiento de datos, te
          brindamos una solución eficiente y precisa para encontrar a los
          profesionales más calificados que se ajusten a tus requerimientos.
        </p>
        <br />
        <div className="mockup-window border mb-10 bg-base-300">
          <div className="flex justify-center px-4 py-16 bg-base-200">
            <Image
              height="100"
              width="800"
              src={img}
              alt="imagen de la pagina"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-10  my-4 justify-center ">
          {/* card */}

          <div className="card w-96 border-gray-500 border shadow-xl">
            <figure>
              <img
                width={200}
                className="mt-12"
                src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fwindows-dark.png&w=640&q=100"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">
                Gráficas y datos detallados (próximamente)
              </h2>
              <p>
                Te proporcionamos gráficas y datos visuales sobre los
                candidatos, lo que te permite obtener una visión general rápida
                y clara de su experiencia, habilidades clave y competencias
                relevantes.
              </p>
            </div>
          </div>

          {/* card */}
          <div className="card w-96 border-gray-500 border shadow-xl">
            <figure>
              <img
                width={200}
                className="mt-10"
                src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fspheres-dark.png&w=640&q=100"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Ofertas automáticas</h2>
              <p>
                Envía correos a el/la mejor candidat@ y acuerda reuniones en
                tiempo record.
              </p>
            </div>
          </div>

          {/* card */}
          <div className="card w-96 border-gray-500 border shadow-xl">
            <figure>
              <img
                width={200}
                src="https://cdn.icon-icons.com/icons2/2945/PNG/512/message_icon_184173.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Búsqueda precisa</h2>
              <p>
                ChatGpt analiza y evalúa las habilidades, la experiencia y otros
                aspectos relevantes de los candidatos. Con esto, te ofrecemos
                una lista de los candidatos que mejor se ajustan a tus
                necesidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
