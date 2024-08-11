import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Footer from "../components/Footer";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container mx-auto h-screen pt-28">
        <p className="pivot-green-text">
          <Link to={"/home"}>Back Home</Link>
        </p>
        <h2 className="font-bold text-4xl border-b-2 border-gray-300 py-5">
          Create an Account
        </h2>
        <p className="mt-5">
          Already have an account?{" "}
          <Link to={"/login"} className="pivot-green-text hover-action">
            Log in
          </Link>
        </p>
        {/* Form */}
        <form
          className="mt-16 max-w-3xl"
          onSubmit={handleSubmit(onSubmit)}
          action=""
        >
          {/* <div className="flex justify-between"> */}
          <div className="grid grid-cols-2 gap-4">
            <input
              {...register("first-name", { required: true })}
              className="bg-white p-3 w-full mb-5 rounded-md"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First Name"
            />
            <input
              {...register("last-name", { required: true })}
              className="bg-white p-3 w-full mb-5 rounded-md"
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
            />
          </div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/,
            })}
            className="block bg-white p-3 mb-5 w-full rounded-md"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          <input
            {...register("password", {
              required: "Password is required",
              minLength: 8,
            })}
            className="block bg-white p-3 mb-5 w-full rounded-md"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
          <button
            className="pivot-green-bg p-3 w-full font-semibold rounded-md"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;
