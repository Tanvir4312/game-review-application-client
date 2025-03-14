import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Header = () => {
  const { user, userSignOut, changeTheme, currentTheme } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    userSignOut()
      .then(() => {
        // console.log(result.user);
        navigate("/");
      })
      .catch(() => {
        // console.log(error);
      });
  };

  const handleThemeChanged = () => {
    changeTheme();
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allReview"}>All Reviews</NavLink>
      </li>
      <li>
        <NavLink to={"/addReview"}>Add Review</NavLink>
      </li>
      <li>
        <NavLink to={"/myReviews"}>My Reviews</NavLink>
      </li>
      <li>
        <NavLink to={"/myWatchLists"}>Game WatchList</NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-black">
      <div className="lg:w-6xl mx-auto">
        <div className="text-white navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-black rounded-box mt-3 w-40 p-2"
              >
                <div className=" rounded font-bold z-10 transition duration-500 ease-in-out hover:bg-[#00D283]  ">
                  {links}
                </div>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl md:text-2xl font-bold -ml-3 md:-ml-0">
              Chill Gamer
            </a>

            {location.pathname === "/" && (
              <button
                className="btn hidden md:block"
                onClick={handleThemeChanged}
              >
                {currentTheme === "light" ? (
                  <img src="https://img.icons8.com/?size=32&id=VTboxrtZnBOR&format=png" />
                ) : (
                  <img
                    className="w-8"
                    src="https://img.icons8.com/?size=50&id=648&format=png"
                  />
                )}
              </button>
            )}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user?.photoURL && (
              <>
                <div
                  className="tooltip tooltip-bottom "
                  data-tip={user.displayName}
                >
                  <div className="tooltip-content">
                    <div className="animate-bounce  text-orange-400 -rotate-10 text-2xl">
                      {user.displayName}
                    </div>
                  </div>
                  <img
                    className="w-10 h-10 mr-2 md:mr-10  rounded-full cursor-pointer"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
              </>
            )}
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

        <div className="flex justify-center pb-3">
          {location.pathname === "/" && (
            <button
              className="btn md:hidden block"
              onClick={handleThemeChanged}
            >
              {currentTheme === "light" ? (
                <img src="https://img.icons8.com/?size=32&id=VTboxrtZnBOR&format=png" />
              ) : (
                <img
                  className="w-8"
                  src="https://img.icons8.com/?size=50&id=648&format=png"
                />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
