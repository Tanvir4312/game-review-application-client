import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="mt-12 text-center">
            <h1 className="text-7xl font-extrabold text-red-600">OOps!!!</h1>
            <h3 className="text-3xl font-bold my-10">Not Found Page</h3>
            <p>Go to <Link to={'/'}><span className="underline font-bold">Home</span></Link></p>
        </div>
    );
};

export default Error;