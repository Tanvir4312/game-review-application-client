import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../../components/Footer/Footer";

const MyWatchLists = () => {
  const watchLists = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myWatchLists, setMyWatchLists] = useState([]);

  useEffect(() => {
    const filterByMyWatchLists = watchLists.filter(
      (watchList) => watchList.email === user.email
    );
    setMyWatchLists(filterByMyWatchLists);
  }, [user.email, watchLists]);
  return (
    <div>
      <Header></Header>

      <div className="w-[280px] md:w-2xl lg:w-5xl mx-auto my-10">
        <h1 className="text-center text-4xl font-bold my-7">
          My{" "}
          <span className="text-[#00D283]">
            WatchLists ({myWatchLists.length})
          </span>
        </h1>
        <div className="opacity-30 mb-4 w-[280px] md:w-[300px] lg:w-[380px] mx-auto">
          <hr />
        </div>

        {myWatchLists.length === 0 ? (
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
                </tr>
              </thead>

              <tbody>
                {myWatchLists.map((review, idx) => (
                  <tr key={review._id}>
                    <th>{idx + 1}</th>
                    <td>{review.title}</td>
                    <td>{review.genres}</td>
                    <td>{review.rating}</td>
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

export default MyWatchLists;
