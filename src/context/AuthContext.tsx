"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import firebase_app from "@/firebase/config";
import getDocument from "@/firebase/firestore/getData";
import { getDoc } from "firebase/firestore";
import { Loading } from "@/components";

const auth = getAuth(firebase_app);

type AuthContextType = {
  user: User | null;
  company: any;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  company: null,
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const handleGetData = async () => {
      const { result, error } = await getDocument("empresas", user?.uid);

      if (error) {
        return console.log(error);
      }
      // const normalizeOfertas = await Promise.all(
      //   result?.ofertas?.map(async (oferta: any) => {
      //     const postulados = await Promise?.all(
      //       oferta?.postulados?.map(async (postulado: any) => {
      //         const postulanteDoc = postulado.postulado;
      //         const postulanteData = await getDoc(postulanteDoc);
      //         const postuladoRef = postulanteData.data();
      //         return { ...postulado, postulado: postuladoRef };
      //       })
      //     );
      //     return { ...oferta, postulados };
      //   })
      // );

      // const ofertas = await Promise.all(normalizeOfertas);
      // const newCompany = { ...result, ofertas };

      setCompany(result);
      // setCompany(result);
    };
    handleGetData();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, company }}>
      {loading ? (
        <section className="flex flex-wrap justify-center gap-4 ">
          <Loading />
          <Loading />
          <Loading />
        </section>
      ) : user ? (
        children
      ) : (
        <div>Not logged in</div>
      )}
    </AuthContext.Provider>
  );
};
