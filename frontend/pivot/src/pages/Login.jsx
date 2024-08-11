import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <div className="container mx-auto h-screen pt-28">
        <p className="pivot-green-text">
          <Link to={"/home"}>Back Home</Link>
        </p>
        <h2 className="font-bold text-4xl border-b-2 border-gray-300 py-5">
          Welcome Back!
        </h2>
        <p className="mt-5">
          Don&apos;t have an account?{" "}
          <Link to={"/register"} className="pivot-green-text hover-action">
            Register Here
          </Link>
        </p>
        {/* Form */}
        <form className="mt-16 max-w-3xl" action="">
          <input
            className="block bg-white p-3 mb-5 w-full rounded-md"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="block bg-white p-3 mb-5 w-full rounded-md"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button
            className="pivot-green-bg p-3 w-full font-semibold rounded-md"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
