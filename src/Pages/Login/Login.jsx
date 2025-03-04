import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState('')

        const {userLogin} = useContext(AuthContext)

      const handleLogin = e =>{
            e.preventDefault()
    
            const form = e.target;
      
            const email = form.email.value;
           
            const password = form.password.value;
    
     
            userLogin(email, password)
            .then(() =>{
                // console.log(result.user);
                form.reset()
              
            })
            .catch((error) =>{
                console.log(error);
                setError(error)
            })
        }
  return (
    <div>
      <Header></Header>

      <div className="text-center my-7 text-4xl font-bold">
        <h2>Login Now</h2>
      </div>

      <form onSubmit={handleLogin}>
        <div className="max-w-2xl mx-auto bg-slate-300 p-10 rounded-lg">
          

          <label className="input validator w-full mb-5">
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
            <button className="btn btn-neutral btn-block">Login</button>
          </div>
          <div className="mt-3 text-center">
                <p>Do not have an account? Please <Link to={'/signup'}><span className="ml-1 text-blue-600">Sign Up</span></Link></p>
            </div>
            <div>
                {
                    error && <p className="text-red-600 text-center mt-3">Invalid your email or password</p>
                }
            </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
