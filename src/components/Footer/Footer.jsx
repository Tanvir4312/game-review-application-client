import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Footer = () => {
  const { currentTheme } = useContext(AuthContext);
  return (
    <div>
      <div className="h-3 my-7 grid grid-cols-3">
        <div className="bg-[#00CE7A]"></div>
        <div className="bg-[#FFBD3F]"></div>
        <div className="bg-[#FF6874]"></div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-5">
        Chill <span className="text-[#00CE7A]">Gamer</span>
      </h1>

      <div className="w-[280px] md:w-2xl lg:w-4xl mx-auto">
        <footer
          className={`footer sm:footer-horizontal  md:px-10  ${
            currentTheme === "light" ? "text-base-content" : "text-white"
          }`}
        >
          <nav>
            <h6 className="text-2xl font-bold opacity-70">Over View</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Digital Services Act</a>
            <a className="link link-hover">Terms os Use</a>
          </nav>

          <nav>
            <h6 className="text-2xl font-bold opacity-70">Follow Us</h6>
            <div className="flex items-center gap-8 mt-5">
              <a target="blank" href="https://www.facebook.com/">
                <img
                  src="https://img.icons8.com/?size=48&id=ddJXF_L1PvL_&format=png"
                  alt=""
                />
              </a>

              <a target="blank" href="https://www.instagram.com/">
                <img
                  src="https://img.icons8.com/?size=60&id=Plswr633TJUP&format=png"
                  alt=""
                />
              </a>

              <a
                className="bg-white rounded-lg"
                target="blank"
                href="https://x.com/"
              >
                <img
                  src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png"
                  alt=""
                />
              </a>
            </div>
          </nav>

          <nav>
            <h6 className="text-2xl font-bold opacity-70">Company</h6>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
        </footer>

        <div className="text-center my-4 opacity-70">
          <p>
            <small>© 2025 FANDOM, INC. CHILL GAMER ALL RIGHTS RESERVED.</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
