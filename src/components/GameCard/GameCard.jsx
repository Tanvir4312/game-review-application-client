const GameCard = ({ game }) => {
  console.log(game);
  const {photo, title, rating} = game
  return (
    <div>
      <div className="card bg-[#00D283]/30 shadow-lg pt-6">
        <figure className="w-11/12 mx-auto h-[200px]">
          <img
          className="w-full h-full"
            src={photo}
            alt={photo}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
           Rating: <span className="font-semibold">{rating}</span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-[#00D283]">Explore Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
