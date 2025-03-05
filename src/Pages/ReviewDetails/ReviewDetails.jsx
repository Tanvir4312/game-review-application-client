import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";

const ReviewDetails = () => {
  const gameDetails = useLoaderData();
  console.log(gameDetails);
  const {email, genres, name, photo, rating, review, title, year} = gameDetails
  return (
    <div>
      <Header></Header>
      <div className="md:w-2xl lg:w-4xl mx-auto my-10 px-3 md:px-0">
        <div className="card md:card-side bg-[#D3D3D3] shadow-sm p-2">
          <figure className="lg:w-1/3">
            <img
            className="w-full"
              src={photo}
              alt={photo}
            />
          </figure>
          <div className="lg:w-2/3 md:px-4 py-3 md:py-0 space-y-3">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p><span className="font-bold">Genre:</span> {genres}</p>
            <p><span className="font-bold">Rating:</span> {rating}</p>
            <p><span className="font-bold">Publish Year:</span> {year}</p>
            <p><span className="font-bold">Review:</span> {review}</p>
            <p><span className="font-bold">User Name:</span> {name}</p>
            <p><span className="font-bold">User Email:</span> {email}</p>
            <div className="card-actions mt-3">
              <button className="btn btn-neutral btn-block">watchList</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
