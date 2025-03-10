import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import { toast } from "react-toastify";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

const UpdateReview = () => {
  const reviewWithId = useLoaderData();
  const [update, setUpdate] = useState(false)

  const { _id, name, email, genres, photo, rating, review, title, year } =
    reviewWithId;

  const handleUpdateReview = (e) => {
    e.preventDefault();

    const form = e.target;

    const photo = form.photo.value;
    const title = form.title.value;
    const review = form.review.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genres = form.genres.value;

    const updateReview = {
      
      photo,
      title,
      review,
      rating,
      year,
      genres,
    };

    fetch(`https://game-review-application-server-smoky.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
       
        form.reset();
        toast.success("Update Review Successfully");
        if(data.modifiedCount > 0){
            setUpdate(true)
        }
      });
  };
  return (
    <div>
      <Header></Header>

      <div className="bg-[#00D283] h-20"></div>

      <div className="md:w-2xl lg:w-4xl mx-auto px-5 py-9 bg-[#D3D3D3] relative -top-9 md:rounded">
        <div>
          <h1 className="text-center text-2xl font-bold mb-6">Update Review</h1>
        </div>
        <form onSubmit={handleUpdateReview}>
          <div className="md:flex gap-5">
            <div className="flex flex-col md:w-2/4">
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full"
                readOnly
              />
            </div>
            <div className="flex flex-col md:w-2/4">
              <label htmlFor="Name">Email:</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                className="input w-full"
                readOnly
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="flex flex-col md:w-2/4">
              <label htmlFor="Name">Image:</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="photoURL"
                className="input w-full"
              />
            </div>
            <div className="flex flex-col md:w-2/4">
              <label htmlFor="Name">Title:</label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Game title"
                className="input w-full"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label htmlFor="Name">Review:</label>
              <textarea
                placeholder=" A detailed review of the game"
                name="review"
                defaultValue={review}
                className="textarea textarea-md w-full"
              ></textarea>
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="flex flex-col md:w-2/4">
              <label htmlFor="Name">Rating:</label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="e.g., 1-5 or 1-10"
                className="input w-full"
              />
            </div>
            <div className="flex flex-col md:w-2/4">
              <label htmlFor="Name">Publishing year:</label>
              <input
                type="text"
                name="year"
                defaultValue={year}
                placeholder="Ex: 2021, 2024"
                className="input w-full"
              />
            </div>
          </div>

          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Genres</legend>
              <select
                name="genres"
                defaultValue={genres}
                className="select w-full"
              >
                <option disabled={true}>Pick a browser</option>
                <option>Action</option>
                <option>RPG</option>
                <option>Adventure</option>
              </select>
            </fieldset>
          </div>
          <div>
            <button className="btn btn-neutral btn-block mt-5">{update ? 'Updated' : 'Update'}</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateReview;
