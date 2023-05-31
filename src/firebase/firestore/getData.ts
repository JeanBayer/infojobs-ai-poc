import axios from "axios";
import firebase_app from "../config";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function getDocument(collection: any, id: any) {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    const docResult = await getDoc(docRef);
    result = docResult.data();
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function getCandidatos(idEmpresa: any, idOferta: any) {
  const { result: postulados } = await getPostulados(idEmpresa, idOferta);
  const { result: empresa } = await getDocument("empresas", idEmpresa);

  let result: any = [];
  let error;

  try {
    const collectionFirebase = collection(db, "candidatos");
    const querySnapshot = await getDocs(collectionFirebase);
    querySnapshot.forEach((doc) => {
      result.push({ ...doc.data() });
    });
    result = result.filter(({ info: infoCandidato }: any) => {
      const postuladoRepetido = postulados.find(
        ({ postulado }: any) => postulado.info.id === infoCandidato.id
      );
      return !postuladoRepetido;
    });

    // validar de localStorage que no este la respuesta
    // si no esta, hacer la peticion
    // guardar en localStorage la respuesta

    const cachePrediccion = JSON.parse(
      localStorage.getItem("prediccion") || "{}"
    );
    const prediccionEncontrada = cachePrediccion.id === idOferta;

    if (prediccionEncontrada) {
      result = cachePrediccion.result;
      return { result, error };
    }

    const { data: prediccion } = await axios.post(
      "http://localhost:3000/api/check",
      {
        candidatos: result,
        oferta: empresa?.ofertas.find((oferta: any) => oferta.id === idOferta),
      }
    );

    const newResult = result.map((candidato: any) => {
      const { id } = candidato.info;
      const prediccionEncontrada = prediccion.find(
        (candidatoPredicho: any) => candidatoPredicho.id === id
      );
      if (!prediccionEncontrada)
        return { ...candidato, probabilidad: Math.floor(Math.random() * 101) };

      candidato.probabilidad = prediccionEncontrada?.prob;
      return candidato;
    });
    result = newResult;
    localStorage.setItem(
      "prediccion",
      JSON.stringify({ id: idOferta, result })
    );
  } catch (e) {
    error = e;
  }
  return { result, error };
}

export async function getPostulados(idEmpresa: any, idOferta: any) {
  let docRef = doc(db, "empresas", idEmpresa);

  let result = null;
  let error = null;

  try {
    const docResult = await getDoc(docRef);
    const empresa = docResult.data();

    const normalizeOfertas = await Promise.all(
      empresa?.ofertas.map(async (oferta: any) => {
        const postulados = await Promise.all(
          oferta.postulados.map(async (postulado: any) => {
            const postulanteDoc = postulado.postulado;
            const postulanteData = await getDoc(postulanteDoc);
            const postuladoRef = postulanteData.data();
            return { ...postulado, postulado: postuladoRef };
          })
        );
        return { ...oferta, postulados };
      })
    );

    const ofertas = await Promise.all(normalizeOfertas);
    const oferta = ofertas.find((oferta: any) => oferta.id === idOferta);
    result = oferta?.postulados;
  } catch (e) {
    error = e;
  }

  return { result, error };
}
