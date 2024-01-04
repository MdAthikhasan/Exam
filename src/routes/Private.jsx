import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import firebaseAuth from "../Firebase/firebase";
import Loading from "../Component/Loading/Loading";
import Swal from "sweetalert2";
import NetworkErrorPage from "../Pages/NetworkError/NetworkErro";

const Private = ({ children }) => {
  const [user, authLoading,error] = useAuthState(firebaseAuth);
  if (authLoading) {
    return <Loading />;
  }
  if (error) {
      return <NetworkErrorPage/>
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
