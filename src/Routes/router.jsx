import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layouts/Root";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddReview from "../Pages/AddReview/AddReview";
import PrivateRoute from "./PrivateRoute";
import ReviewDetails from "../Pages/ReviewDetails/ReviewDetails";
import AllReview from "../Pages/AllReview/AllReview";
import MyReviews from "../Pages/MyReviews/MyReviews";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import MyWatchLists from "../Pages/MyWatchLists/MyWatchLists";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/addReview",
    element: (
      <PrivateRoute>
        <AddReview></AddReview>
      </PrivateRoute>
    ),
  },
  {
    path: "/reviewDetails/:id",
    element: (
      <PrivateRoute>
        <ReviewDetails></ReviewDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
  },
  {
    path: "/allReview",
    element: <AllReview></AllReview>,
    loader: () => fetch("http://localhost:5000/reviews"),
  },
  {
    path: "/myReviews",
    element: (
      <PrivateRoute>
        <MyReviews></MyReviews>
      </PrivateRoute>
    ),
    loader: () => fetch("http://localhost:5000/reviews"),
  },
  {
    path: '/updateReview/:id',
    element: <UpdateReview></UpdateReview>,
    loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
  },
  {
    path: '/myWatchLists',
    element: <PrivateRoute><MyWatchLists></MyWatchLists></PrivateRoute>,
    loader: () => fetch('http://localhost:5000/watchLists')
  }
]);

export default router;
