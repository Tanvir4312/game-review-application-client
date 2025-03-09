import { useContext, useEffect } from "react";
import { useState } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../Provider/AuthProvider";
AOS.init();
const UpcomingGames = () => {
  const [upcomingGames, setUpcomingGames] = useState([]);
  const { currentTheme } = useContext(AuthContext);

  useEffect(() => {
    fetch("/upcoming.json")
      .then((res) => res.json())
      .then((data) => {
        setUpcomingGames(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">Upcoming Games</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {upcomingGames.map((game, idx) => (
          <div key={idx} className="card card-dash bg-green-100">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out"
              data-aos-duration="1000"
              className={`card-body ${currentTheme === 'dark' && 'text-black'}`}
            >
        
                <h2 className="card-title">{game.title}</h2>
                <h4 className="font-semibold">
                  Release Date: {game.release_date}
                </h4>
                <p>{game.short_review}</p>
            
              <div className="">
                <button className="btn btn-block btn-neutral mt-4">
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingGames;
