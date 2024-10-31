import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h3 className="text-4xl text-red-600 font-bold">Page Not Found</h3>
      <p className="text-lg font-semibold mt-4">Status: 404</p>
      <Link to="/" className="btn btn-outline mt-5">
        Go to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
