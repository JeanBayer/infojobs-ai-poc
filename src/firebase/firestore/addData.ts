import firebase_app from "../config";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function addData(collection: any, id: any, data: any) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function addCandidato(
  idEmpresa: any,
  idCandidato: any,
  idOferta: any,
  probabilidad: any
) {
  let result = null;
  let error = null;

  try {
    const compañiaRef = doc(db, "empresas", idEmpresa);
    const candidatoRef = doc(db, "candidatos", idCandidato.toString());

    const compañia = await getDoc(compañiaRef);
    const compañiaData = compañia.data();
    const oferta = compañiaData?.ofertas?.find(
      (oferta: any) => oferta.id === idOferta
    );
    oferta.postulados.push({
      postulado: candidatoRef,
      probabilidad,
    });
    result = await setDoc(compañiaRef, compañiaData, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
