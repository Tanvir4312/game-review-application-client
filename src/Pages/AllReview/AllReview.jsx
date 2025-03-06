import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Review from "../Review/Review";


const AllReview = () => {
    const allReview = useLoaderData()

    return (
        <div>
            <Header></Header>

            <h1 className="text-center text-4xl font-bold mt-7">All <span className="text-[#00D283]">Review</span></h1>

            <div className="w-[280px] md:w-2xl lg:w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16 my-10">
                {
                    allReview.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
           
        </div>
    );
};

export default AllReview;