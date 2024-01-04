import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import firebaseAuth from "../Firebase/firebase";
import Loading from "../Component/Loading/Loading";
import Swal from "sweetalert2";

const Private = ({ children }) => {
  const [user, authLoading] = useAuthState(firebaseAuth);
  if (authLoading) {
    return <Loading />;
  }
  if (!user) {
    Swal.fire({
      title: "Please sign_up",
      icon: "warning",
    });
    return <Navigate to={"/sign_up"} />;
  }
  return children;
};

export default Private;
