import { Link } from "react-router-dom";

const Review = ({ review }) => {
  const {_id, photo, title, rating} = review
  return (
    <div>
      <div className="card bg-base-100 image-full shadow-sm h-72">
        <figure className="h-full">
          <img
            src={photo}
            alt={photo}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="font-bold">
           Rating: {rating}
          </p>
          <div className="card-actions justify-end">
          <Link to={`/reviewDetails/${_id}`}><button className="btn bg-[#00D283] border-0">Explore Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
