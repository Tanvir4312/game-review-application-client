import freefire from "../../assets/freefire.jpg";
import pubg from "../../assets/pubg.jpg";
import Asphalt9 from "../../assets/Asphalt 9.webp";
import killingFloor from "../../assets/killing-floor.webp";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#00D283] h-24">
        <div className="w-[255px] md:w-2xl lg:w-6xl mx-auto pt-3">
          <h1 className="md:text-3xl font-bold">
            Your Gaming Journey Starts Here{" "}
            <span className="text-[#ed6b00]">
              <Typewriter
                words={["Explore", "Unlock", "Build", "Enjoy!"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center w-[280px] md:w-2xl lg:w-6xl mx-auto relative -top-7">
        <div className="carousel rounded-box">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img src={freefire} className="w-full" alt="Slide 1" />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/50 text-white pb-11">
              <Slide>
                <h2 className="text-sm md:text-3xl font-bold">
                  Free Fire: Battle Royale
                </h2>
              </Slide>

              <Fade delay={550} cascade damping={1e-2}>
                <p className="text-sm text-center px-2 md:py-4">
                  
                  Fast-paced battle royale game where players fight for
                  survival, <br /> strategize, and become the last one standing.
                </p>
              </Fade>
            </div>
            {/* Navigation Buttons */}
            <div className="absolute flex gap-3 mt-1 justify-center md:items-center md:justify-between  transform -translate-y-1/2 left-5 right-5 top-2/2 -bottom-24 md:top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img src={killingFloor} className="w-full" alt="Slide 2" />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/50 text-white pb-11">
              <Slide>
                {" "}
                <h2 className="text-sm md:text-3xl font-bold">
                  Killing Floor 3
                </h2>
              </Slide>
              <Fade delay={450} cascade damping={1e-1}>
                {" "}
                <p className="text-sm text-center px-2 md:py-4">
                  Intense first-person shooter where players battle hordes of
                  deadly <br /> creatures in cooperative survival gameplay.
                </p>
              </Fade>
            </div>
            {/* Navigation Buttons */}
            <div className="absolute flex gap-3 mt-1 justify-center md:items-center md:justify-between transform -translate-y-1/2 left-5 right-5 top-2/2 -bottom-24 md:top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img src={pubg} className="w-full" alt="Slide 3" />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/50 text-white pb-11">
              <Slide>
                <h2 className="text-sm md:text-3xl font-bold">
                  {" "}
                  PUBG: Battlegrounds
                </h2>
              </Slide>
              <Fade delay={450} cascade damping={1e-1}>
                {" "}
                <p className="text-sm text-center px-2 md:py-4">
                  Thrilling battle royale game where players fight for survival
                  on <br /> vast maps with realistic weapons and tactics.
                </p>
              </Fade>
            </div>
            {/* Navigation Buttons */}
            <div className="absolute flex gap-3 mt-1 justify-center md:items-center md:justify-between  transform -translate-y-1/2 left-5 right-5 top-2/2 -bottom-24 md:top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img src={Asphalt9} className="w-full" alt="Slide 4" />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/50 text-white pb-11">
              <Slide>
                {" "}
                <h2 className="text-sm md:text-3xl font-bold">
                  Asphalt 9: Legends
                </h2>
              </Slide>
              <Fade delay={450} cascade damping={1e-1}>
                {" "}
                <p className="text-sm text-center px-2 md:py-4">
                  High-speed arcade racing game featuring stunning graphics,{" "}
                  <br /> customizable cars, and adrenaline-pumping multiplayer
                  action.
                </p>
              </Fade>
            </div>
            {/* Navigation Buttons */}
            <div className="absolute flex gap-3 mt-1 justify-center md:items-center md:justify-between transform -translate-y-1/2 left-5 right-5 top-2/2 -bottom-24 md:top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
