import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Review from "../Review/Review";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const AllReview = () => {
  const allReview = useLoaderData();
  const [reviews, setReviews] = useState(allReview);
  const [btnTextShow, setBtnTextShow] = useState("Click");

  const handleRating = (btnText) => {
    setBtnTextShow("Rating");
    {
      btnText === "rating" &&
        setReviews(reviews.sort((a, b) => b.rating - a.rating));
    }
  };
  const handleYear = (btnText) => {
    setBtnTextShow("Year");

    {
      btnText === "year" && setReviews(reviews.sort((a, b) => b.year - a.year));
    }
  };

  return (
    <div>
      <Header></Header>

      <div className="w-[280px] md:w-2xl lg:w-4xl mx-auto">
        <h1 className="text-center text-4xl font-bold mt-7">
          All <span className="text-[#00D283]">Review</span>
        </h1>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            {btnTextShow}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100/50 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a className="font-bold" onClick={() => handleRating("rating")}>Rating</a>
            </li>
            <li>
              <a className="font-bold" onClick={() => handleYear("year")}>Year</a>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 my-10">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllReview;
