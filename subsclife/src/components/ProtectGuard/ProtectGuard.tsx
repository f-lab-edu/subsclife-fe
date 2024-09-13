import globalStore from "@/store/global";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const ProtectGuard = ({ children }: PropsWithChildren) => {
  const { isAuth } = globalStore();
  const storageId = localStorage.getItem("subsclife_token");

  if (isAuth || storageId) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default ProtectGuard;
