import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        {/* Home */}
        <section
          id="home"
          className="flex justify-around items-center h-screen"
        >
          <div>
            <h1 className="text-7xl mb-10 font-bold">
              Welcome to <span className="pivot-green-text">Pivot</span>
            </h1>
            <p className="text-3xl">
              Your Go-To Solution for Employee Management
            </p>
          </div>
          <div>
            <Link to={"/login"}>
              <button className="pivot-green-bg p-5 rounded-md text-xl font-bold w-72 hover-action">
                Get Started
              </button>
            </Link>
          </div>
        </section>
        {/* About */}
        <section id="about" className="p-10">
          <h2 className="text-4xl font-bold mb-10">
            About <span className="pivot-green-text">Pivot</span>
          </h2>
          <p className="text-xl">
            Pivot is a streamlined employee management tool designed to simplify
            leave requests, enhance company communication, and support HR tasks
            efficiently.
          </p>
        </section>
        {/* Features */}
        <section id="features" className="p-10">
          <h2 className="text-4xl font-bold mb-10">Features</h2>
          {/* Cards */}
          {/* Feature #1 */}
          <div className="bg-white rounded-md shadow-lg p-7 mb-7">
            <h3 className="text-xl font-bold mb-4">Employee Dashboard</h3>
            <p>
              Access important company info, news, and manage your profile
              effortlessly.
            </p>
          </div>
          {/* Feature #2 */}
          <div className="bg-white rounded-md shadow-lg p-7 mb-7">
            <h3 className="text-xl font-bold mb-4">Leave Management</h3>
            <p>
              Apply for leave, track status, and get approvals all in one place.
            </p>
          </div>
          {/* Feature #3 */}
          <div className="bg-white rounded-md shadow-lg p-7 mb-7">
            <h3 className="text-xl font-bold mb-4">HR Dashboard</h3>
            <p>
              HR can manage leave requests, view employee details, and keep
              everything running smoothly.
            </p>
          </div>
        </section>
        {/* How It Works */}
        <section id="how-it-works" className="p-10">
          <h2 className="text-4xl font-bold mb-10">How It Works</h2>
          <ol>
            <li className="text-xl mb-3">1. Log in with your credentials.</li>
            <li className="text-xl mb-3">
              2. Navigate to the dashboard for company info and tasks.
            </li>
            <li className="text-xl mb-3">
              3. Apply for leave or manage requests with ease.
            </li>
          </ol>
        </section>
        {/* Benefits */}
        <section id="benefits" className="p-10">
          <h2 className="text-4xl font-bold mb-10">Benefits</h2>
          {/* Cards */}
          {/* Benefit #1 */}
          <div className="bg-white rounded-md shadow-lg p-7 mb-7">
            <h3 className="text-xl font-bold mb-4">For Employees:</h3>
            <p>Save time, stay informed, and manage your leave efficiently.</p>
          </div>
          {/* Benefit #2 */}
          <div className="bg-white rounded-md shadow-lg p-7 mb-7">
            <h3 className="text-xl font-bold mb-4">For HR:</h3>
            <p>
              Streamline HR processes, stay organized, and ensure smooth
              operations.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Home;
