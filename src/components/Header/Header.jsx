import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleLogout = () => {
    userSignOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/al-review"}>All Reviews</NavLink>
      </li>
      <li>
        <NavLink to={"/add-review"}>Add Review</NavLink>
      </li>
      <li>
        <NavLink to={"/my-reviews"}>My Reviews</NavLink>
      </li>
      <li>
        <NavLink to={"/game-watchList"}>Game WatchList</NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-black">
      <div className="text-white navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box mt-3 w-52 p-2"
            >
              <div className=" rounded font-bold z-10 transition duration-500 ease-in-out hover:bg-[#00D283]  ">
                {links}
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-2xl font-bold">
            Chill Gamer
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
