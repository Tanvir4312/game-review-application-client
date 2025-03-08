import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./styles.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Root = () => {
  const { currentTheme } = useContext(AuthContext);
  return (
    <div
      className={`${
        currentTheme === "light" ? "light-container" : "dark-container"
      }`}
    >
      <Header></Header>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
