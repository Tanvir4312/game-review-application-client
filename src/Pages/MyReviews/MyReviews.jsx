import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Footer from "../../components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const MyReviews = () => {
  const allReviews = useLoaderData();
  const { user } = useContext(AuthContext);

  const [reviewsWithEmail, setReviewWithEmail] = useState([]);

  useEffect(() => {
    const myReview = allReviews.filter((review) => review.email === user.email);
    setReviewWithEmail(myReview);
  }, [allReviews, user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-review-application-server-frgn5ltba.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Review has been deleted.",
                icon: "success",
              });
              const remaining = reviewsWithEmail.filter(
                (review) => review._id !== id
              );
              setReviewWithEmail(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Header></Header>

      <div className="w-[280px] md:w-2xl lg:w-5xl mx-auto my-10">
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
            <table data-aos="fade-up" data-aos-duration="1000" className="table table-zebra">
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
                  <tr data-aos="fade-up" key={review._id}>
                    <th>{idx + 1}</th>
                    <td>{review.title}</td>
                    <td>{review.genres}</td>
                    <td>{review.rating}</td>
                    <td>
                      <Link to={`/updateReview/${review._id}`}>
                        {" "}
                        <button className="btn">Update</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="btn bg-red-600"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MyReviews;
