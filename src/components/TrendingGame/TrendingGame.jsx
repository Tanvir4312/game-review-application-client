import { useContext, useEffect } from "react";
import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthContext } from "../../Provider/AuthProvider";

const TrendingGame = () => {
  const [trendingGames, setTrendingGames] = useState([]);
  const { currentTheme } = useContext(AuthContext);

  useEffect(() => {
    fetch("/trending.json")
      .then((res) => res.json())
      .then((data) => {
        setTrendingGames(data);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
     
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // Show 3 on medium screens
      { breakpoint: 768, settings: { slidesToShow: 2 } }, // Show 2 on small screens
      { breakpoint: 480, settings: { slidesToShow: 1 } }, // Show 1 on mobile
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">Trending Games</h1>

      <div className="px-5">
        <h2 className="text-xl font-bold mb-3">Trending Games</h2>
        {trendingGames.length > 0 ? (
          <Slider {...settings}>
            {trendingGames.map((game, index) => (
              <div key={index} className="px-2">
                <div className="card w-full h-[400px] bg-base-100 shadow-xl">
                  <figure className="w-full h-2/3">
                    <img
                      src={game.photo}
                      alt={game.title}
                      className="h-full w-full object-cover rounded-t-xl"
                    />
                  </figure>
                  <div
                    className={`p-2 text-center h-1/3 ${
                      currentTheme === "dark" && "text-black"
                    }`}
                  >
                    <h3 className="text-sm font-semibold">{game.title}</h3>
                    <h3 className="text-sm font-semibold">{game.rating}</h3>
                    <h3 className="text-sm">{game.short_review}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">Loading games...</p>
        )}
      </div>
    </div>
  );
};

export default TrendingGame;
