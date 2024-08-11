import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-between p-5 border-b-2 border-gray-300">
        {/* LHS */}
        <div className="flex flex-row">
          {/* Logo */}
          <h1 className="pivot-green-text text-2xl font-bold my-auto">Pivot</h1>
          <ul className="flex flex-row font-semibold ml-6">
            <a href="#home" className="p-3 hover-action">
              <li className="">Home</li>
            </a>
            <a href="#about" className="p-3 hover-action">
              <li>About Us</li>
            </a>
            <a href="#about" className="p-3 hover-action">
              <li>Features</li>
            </a>
          </ul>
        </div>
        {/* RHS */}
        <div>
          <ul className="flex flex-row font-semibold">
            <Link to={"/login"} className="p-3 hover-action">
              <li>Login</li>
            </Link>
            <Link to={"/register"} className="p-3 hover-action">
              <li>Register</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
