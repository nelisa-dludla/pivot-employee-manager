{
  /* Imports */
}
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Footer from "../components/Footer";

const schema = z.object({
  firstName: z.string().min(1, {
    message: "First Name must contain at least 1 character(s)",
  }),
  lastName: z
    .string()
    .min(1, { message: "Last Name must contain at least 1 character(s)" }),
  email: z.string().email(),
  password: z.string().min(8),
});

function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
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
            <div>
              <input
                {...register("firstName")}
                className="bg-white p-3 w-full mb-5 rounded-md"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
              {errors.firstName && (
                <div className="text-red-500 mb-5 ml-3">
                  {errors.firstName.message}
                </div>
              )}
            </div>
            <div>
              <input
                {...register("lastName")}
                className="bg-white p-3 w-full mb-5 rounded-md"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <div className="text-red-500 mb-5 ml-3">
                  {errors.lastName.message}
                </div>
              )}
            </div>
          </div>
          <input
            {...register("email")}
            className="block bg-white p-3 mb-5 w-full rounded-md"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          {errors.email && (
            <div className="text-red-500 mb-5 ml-3">{errors.email.message}</div>
          )}
          <input
            {...register("password")}
            className="block bg-white p-3 mb-5 w-full rounded-md"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <div className="text-red-500 mb-5 ml-3">
              {errors.password.message}
            </div>
          )}
          <button
            className="pivot-green-bg p-3 w-full font-semibold rounded-md"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Create Account"}
          </button>
          {errors.root && (
            <div className="text-red-500 my-5 ml-3">{errors.root.message}</div>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;
