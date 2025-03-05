import Banner from "../../components/Banner/Banner";
import HighRated from "../../components/HighRated/HighRated";
import TrendingGame from "../../components/TrendingGame/TrendingGame";
import UpcomingGames from "../../components/UpcomingGame/UpcomingGames";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HighRated></HighRated>

            <div className="w-[280px] md:w-2xl lg:w-4xl mx-auto">
                <TrendingGame></TrendingGame>
                <UpcomingGames></UpcomingGames>
            </div>
        </div>
    );
};

export default Home;