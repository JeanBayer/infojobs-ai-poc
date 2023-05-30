import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function logout() {
  let result = null,
    error = null;
  try {
    await signOut(auth);
    result = "success";
  } catch (e) {
    error = e;
  }

  return { result, error };
}
