import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center min-h-svh items-center">
      <div className="bg-red-500 p-8 rounded-lg shadow-2xl flex flex-col justify-center">
        <h1 className="text-6xl font-bold">Error 404</h1>
        <h3 className="text-4xl font-bold">Page Not Found</h3>
        <Link className="bg-black btn border-none text-white" to="/">Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
