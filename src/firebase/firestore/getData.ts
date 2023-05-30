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

export async function getCandidatos() {
  let result: any = [];
  let error;

  try {
    const collectionFirebase = collection(db, "candidatos");
    console.log({ collectionFirebase });
    const querySnapshot = await getDocs(collectionFirebase);
    querySnapshot.forEach((doc) => {
      result.push({ ...doc.data(), probabilidad: 100 });
    });
    console.log({ result });
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
