import { useContext } from "react";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const SignUp = () => {
  const { createUser, userUpdate } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password)
      .then(() => {
        // console.log(result.user);

        const updateUser = {
          displayName: name,
          photoURL: photo,
        };
        userUpdate(updateUser)
          .then(() => {
            // User Update
          })
          .catch(() => {
            // Error
          });
          form.reset()
        toast.success("User Create successfully");
      })
      .catch(() => {
        // console.log(error);
      });
  };
  return (
    <div>
      <Header></Header>

      <div className="text-center my-7 text-4xl font-bold">
        <h2>Registration Now</h2>
      </div>

      <form onSubmit={handleSignUp}>
        <div className="max-w-2xl mx-auto bg-slate-300 p-10 rounded-lg">
          <label className="input validator w-full -mb-4">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input type="input" name="name" placeholder="Username" />
          </label>
          <p className="validator-hint">
            Must be 3 to 30 characters
            <br />
            containing only letters, numbers or dash
          </p>

          <label className="input validator w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              name="email"
              placeholder="mail@site.com"
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>

          <div className="mt-7">
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
              </svg>
              <input
                type="url"
                name="photo"
                required
                placeholder="https://"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />
            </label>
            <p className="validator-hint">Must be valid URL</p>
          </div>

          <label className="input validator w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              minLength="6"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 6 characters, including
            <br />
            At least one number
            <br />
            At least one lowercase letter
            <br />
            At least one uppercase letter
          </p>

          <div className="mt-6">
            <button className="btn btn-neutral btn-block">Registration</button>
          </div>
          <div className="mt-3 text-center">
            <p>
              Already have an account? Please{" "}
              <Link to={"/login"}>
                <span className="ml-1 text-blue-600">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
