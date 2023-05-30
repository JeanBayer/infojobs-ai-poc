"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import firebase_app from "@/firebase/config";
import getDocument from "@/firebase/firestore/getData";

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
      // TODO: hacer asociación de referencia entre postulantes y nuestro documento
      const { result, error } = await getDocument("empresas", user?.uid);

      if (error) {
        return console.log(error);
      }
      setCompany(result);
      console.log(result);
    };
    handleGetData();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, company }}>
      {loading ? (
        <div>Loading...</div>
      ) : user ? (
        children
      ) : (
        <div>Not logged in</div>
      )}
    </AuthContext.Provider>
  );
};
