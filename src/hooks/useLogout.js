import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

export const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setIsPending(true);
    await updateDoc(doc(db, "users", user.uid), {
      online: false,
    });
    await signOut(auth);
    dispatch({ type: "LOGOUT" });
    setIsPending(false);
  };
  return { logout, isPending };
};
