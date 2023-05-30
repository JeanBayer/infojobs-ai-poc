import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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
