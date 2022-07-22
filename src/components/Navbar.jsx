import logo from "../assets/img_1.svg";

export const Navbar = () => {
  return (
    <div className="fixed z-50 top-0 w-full">
      {/* Nav will have two div children each for left and right parts of the bar */}
      <nav className="w-full border flex bg-white justify-between items-center py-1 px-2 xl:shadow-md">
        {/* Left Side */}
        <div className="flex items-center justify-between text-gray-700 cursor-pointer">
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hover:bg-gray-100 focus:bg-gray-100 mx-0.5 p-3 rounded xl:hidden bi bi-list"
            width="50"
            height="50"
            fill="black"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          {/* Logo */}
          <div className="flex hover:bg-gray-100 ease-in duration-100 text-xl py-2 px-2 rounded-md items-center">
            <img src={logo} alt="Google Forms Logo" />
            <a href="#" className="first-letter:text-2xl">
              <span className="hover:text-black tracking-tighter font-montserrat font-semibold ease-in duration-100">
                Google
              </span>
              <span className="text-gray-600">Forms</span>
            </a>
          </div>

          {/* Choices */}
          <ul className="hidden ml-4 font-medium tracking-wide text-md text-gray-500 gap-4 xl:flex">
            <li></li>
            <li className="hover:text-gray-900 ease-in duration-200">
              Overview
            </li>
            <li className="hover:text-gray-900 ease-in duration-200">
              Features
            </li>
            <li className="hover:text-gray-900 ease-in duration-200">
              Security
            </li>
            <li className="hover:text-gray-900 ease-in duration-200">
              Pricing
            </li>
          </ul>
        </div>
        {/* Left Side End */}

        {/* Right Side */}
        <div className="hidden space-x-4 xl:flex">
          <ul className="flex justify-between space-x-3 items-center cursor-pointer">
            <li></li>
            <li className="hover:bg-gray-100 p-4 rounded-md ease-in duration-100">
              More Tools <i className="bi bi-caret-down-fill"></i>
            </li>
            <li className="hover:bg-gray-100 p-4 rounded-md text-blue-700 ease-in duration-100">
              Sign in
            </li>
          </ul>

          <div className="flex gap-2 items-center justify-center">
            <button className="text-blue-600 font-medium border px-5 py-3 rounded-md hover:border-blue-800">
              Go to Forms
            </button>

            <button className="text-white font-medium bg-blue-600 rounded-md px-6 py-3 ease-in duration-100 border hover:bg-blue-800">
              Try Forms for Work
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
