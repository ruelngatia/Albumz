import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AlbumZ } from "../../App";

interface Props {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const context = useContext(AlbumZ);

  if (context?.isLoggedin === false) {
    context.toggleShowLoginDialog();
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
