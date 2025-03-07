import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../Provider/AuthProvider";

const MyReviews = () => {
  const myReviews = useLoaderData();
  const { user } = useContext(AuthContext);

  const [reviewsWithEmail, setReviewWithEmail] = useState([]);

  useEffect(() => {
    const reviewEmail = myReviews.filter(
      (review) => review.email === user.email
    );
    setReviewWithEmail(reviewEmail);
  }, [myReviews, user.email]);

  return (
    <div>
      <Header></Header>

      <div className="w-[280px] md:w-2xl lg:w-4xl mx-auto my-10">
        <h1 className="text-center text-4xl font-bold my-7">
          My{" "}
          <span className="text-[#00D283]">
            Reviews ({reviewsWithEmail.length})
          </span>
        </h1>
        <div className="opacity-30 mb-4 w-[280px] md:w-[300px] lg:w-[380px] mx-auto">
          <hr />
        </div>

        {reviewsWithEmail.length === 0 ? (
          <p className="text-2xl font-bold text-center mt-10 text-red-400">
            Data Not Found
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Genres</th>
                  <th>Rating</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {reviewsWithEmail.map((review, idx) => (
                  <tr key={review._id}>
                    <th>{idx + 1}</th>
                    <td>{review.title}</td>
                    <td>{review.genres}</td>
                    <td>{review.rating}</td>
                    <td>
                     <Link to={`/updateReview/${review._id}`}> <button className="btn">Update</button></Link>
                    </td>
                    <td>
                      <button className="btn bg-red-600">X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
