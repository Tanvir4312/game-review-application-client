import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Header from "../components/Header/Header";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if(loading){
    return <div className="flex justify-center items-center h-[100vh]">

        <span className="loading loading-spinner loading-xl"></span>
    </div>
  }
 

  if (user) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;
