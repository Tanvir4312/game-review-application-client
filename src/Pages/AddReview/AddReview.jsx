import { useContext } from "react";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Footer from "../../components/Footer/Footer";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const title = form.title.value;
    const review = form.review.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genres = form.genres.value;

    const newReview = {
      name,
      email,
      photo,
      title,
      review,
      rating,
      year,
      genres,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then(() => {
        form.reset()
        toast.success('Review Add Successfully')
      });
  };
  return (
    <div>
      <Header></Header>

      <div className="bg-[#00D283] h-20"></div>

      <div className="md:w-2xl lg:w-4xl mx-auto px-5 py-9 bg-[#D3D3D3] relative -top-9 md:rounded">
        <div>
          <h1 className="text-center text-2xl font-bold mb-6">Add Review</h1>
        </div>
        <form onSubmit={handleAddReview}>
          <div className="md:flex gap-5">
            <div className="flex flex-col md:w-2/4">
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                name="name"
                value={user.displayName}
                className="input w-full"
                readOnly
              />
            </div>
            <div className="flex flex-col md:w-2/4">
              <label htmlFor="Name">Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
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
                placeholder="photoURL"
                className="input w-full"
              />
            </div>
            <div className="flex flex-col md:w-2/4">
              <label htmlFor="Name">Title:</label>
              <input
                type="text"
                name="title"
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
                placeholder="e.g., 1-5 or 1-10"
                className="input w-full"
              />
            </div>
            <div className="flex flex-col md:w-2/4">
              <label htmlFor="Name">Publishing year:</label>
              <input
                type="text"
                name="year"
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
                defaultValue="select one"
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
            <button className="btn btn-neutral btn-block mt-5">Submit</button>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AddReview;
