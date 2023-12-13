import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => {
    return store.isAuth;
  });

  return <>{isAuth ? children : <Navigate to={"/"} />}</>;
};
