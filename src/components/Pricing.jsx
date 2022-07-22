import img1 from "../assets/img_1.svg";
import img34 from "../assets/img_34.svg";
import img33 from "../assets/img_33.svg";
import img32 from "../assets/img_32.svg";
import img31 from "../assets/img_31.svg";
import img30 from "../assets/img_30.svg";
import img29 from "../assets/img_29.svg";
import img28 from "../assets/img_28.svg";
import img27 from "../assets/img_27.svg";
import img26 from "../assets/img_26.svg";
import img25 from "../assets/img_25.svg";
import img24 from "../assets/img_24.svg";
import img23 from "../assets/img_23.svg";
import img21 from "../assets/img_21.svg";
import img20 from "../assets/img_20.svg";
import img19 from "../assets/img_19.svg";

export const Pricing = () => {
  return (
    <section>
      {/* Workspace Overview */}
      <div className="space-y-5 text-center">
        <h2 className="text-gray-800 text-2xl sm:text-4xl font-medium tracking-wide">
          Find the plan that's right for you
        </h2>
        <p className="font-semibold tracking-tight text-base sm:text-xl">
          Google Forms is a part of Google Workspace
        </p>

        <div>
          <h4 className="text-gray-800 font-semibold font-montserrat tracking-tight">
            Every plan includes
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2 justify-center">
            <li>
              <figure>
                <img
                  className="border-2 border-transparent active:border-blue-800 hover:bg-gray-100 rounded-md px-0.5"
                  src={img19}
                  alt="Docs"
                />
                <figcaption className="mt-2 text-xs font-semibold">
                  Docs
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="border-2 border-transparent active:border-blue-800 hover:bg-gray-100 rounded-md px-0.5"
                  src={img20}
                  alt="Docs"
                />
                <figcaption className="mt-2 text-xs font-semibold">
                  Sheets
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="border-2 border-transparent active:border-blue-800 hover:bg-gray-100 rounded-md px-0.5"
                  src={img21}
                  alt="Docs"
                />
                <figcaption className="mt-2 text-xs font-semibold">
                  Slides
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="border-2 border-transparent active:border-blue-800 hover:bg-gray-100 rounded-md px-0.5"
                  src={img1}
                  alt="Docs"
                />
                <figcaption className="mt-2 text-xs font-semibold">
                  Forms
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="border-2 border-transparent active:border-blue-800 hover:bg-gray-100 rounded-md px-0.5"
                  src={img23}
                  alt="Docs"
                />
                <figcaption className="mt-2 text-xs font-semibold">
                  Keep
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="border-2 border-transparent active:border-blue-800 hover:bg-gray-100 rounded-md px-0.5"
                  src={img24}
                  alt="Docs"
                />
                <figcaption className="mt-2 text-xs font-semibold">
                  Sites
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="border-2 border-transparent active:border-blue-800 hover:bg-gray-100 rounded-md px-0.5"
                  src={img25}
                  alt="Docs"
                />
                <figcaption className="mt-2 text-xs font-semibold">
                  Drive
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="border-2 border-transparent active:border-blue-800 hover:bg-gray-100 rounded-md px-0.5"
                  src={img26}
                  alt="Docs"
                />
                <figcaption className="mt-2 text-xs font-semibold">
                  Gmail
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="border-2 border-transparent active:border-blue-800 hover:bg-gray-100 rounded-md px-0.5"
                  src={img27}
                  alt="Docs"
                />
                <figcaption className="mt-2 text-xs font-semibold">
                  Meet
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="border-2 border-transparent active:border-blue-800 hover:bg-gray-100 rounded-md px-0.5"
                  src={img28}
                  alt="Docs"
                />
                <figcaption className="mt-2 text-xs font-semibold">
                  Calendar
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  className="border-2 border-transparent active:border-blue-800 hover:bg-gray-100 rounded-md px-0.5"
                  src={img29}
                  alt="Docs"
                />
                <figcaption className="mt-2 text-xs font-semibold">
                  Chat
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>

      {/* Price Table */}
      <div className="overflow-auto">
        <table className="lg:w-4/6 mt-14 font-montserrat mx-auto border-collapse max-w-full">
          <thead>
            <tr>
              <th></th>
              <th className="border font-medium border-gray-300 text-xl">
                <div className="-mt-10">
                  <p className="tracking-tighter">For Personal (Free)</p>
                  <button className="font-sans text-base text-blue-600 mt-20 mx-auto font-medium border block px-6 py-3 rounded-md hover:border-blue-800">
                    Go to Forms
                  </button>
                </div>
              </th>
              <th className="border font-medium border-gray-300 text-xl">
                <div className="space-y-5 p-10">
                  <span className="tracking-tighter">Business Standard</span>
                  <p className="font-roboto">
                    <span className="font-bold text-4xl text-blue-700">
                      $12 USD
                    </span>
                    <span className="text-base">/user/month</span>
                  </p>
                  <button className="font-sans text-base text-white bg-blue-600 mx-auto font-medium block my-16 px-5 py-3 ease-in duration-100 rounded-md hover:bg-blue-800">
                    Get Started
                  </button>
                  <p className="text-sm text-blue-600 font-bold">
                    See more plans
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="w-5/12 border-r border-b border-t text-left py-6 pr-10 border-gray-300 text-md">
                <img className="inline mr-3" src={img30} alt="" />
                <span className="font-semibold">Docs, Sheets, Forms</span>
                <span className="font-normal tracking-tight">
                  content creation
                </span>
              </th>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </p>
              </td>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </p>
              </td>
            </tr>
            <tr>
              <th className="border-r border-b border-t text-left py-6 pr-10 border-gray-300 text-md">
                <img className="inline mr-3" src={img31} alt="" />
                Drive
                <span className="font-medium">Secure cloud storage</span>
              </th>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center font-semibold">15 GB per user</p>
              </td>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center font-semibold">2 TB per user</p>
              </td>
            </tr>
            <tr>
              <th className="w-5/12 border-r border-b border-t text-left py-6 pr-10 border-gray-300 text-md">
                <p className="ml-10">
                  <span className="font-medium">
                    Shared drives for your team
                  </span>
                </p>
              </th>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="gray"
                    className="bi bi-dash inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </p>
              </td>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </p>
              </td>
            </tr>
            <tr>
              <th className="w-5/12 border-r border-b border-t text-left py-6 pr-10 border-gray-300 text-md">
                <img className="inline mr-3" src={img32} alt="" />
                Gmail
                <span className="font-medium">Secure email</span>
              </th>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </p>
              </td>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </p>
              </td>
            </tr>
            <tr>
              <th className="w-5/12 border-r border-b border-t text-left py-6 pr-10 border-gray-300 text-md">
                <p className="ml-10">
                  <span className="font-medium">Custom business email</span>
                </p>
              </th>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="gray"
                    className="bi bi-dash inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </p>
              </td>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </p>
              </td>
            </tr>
            <tr>
              <th className="w-5/12 border-r border-b border-t text-left py-6 pr-10 border-gray-300 text-md">
                <img className="inline mr-3" src={img33} alt="" />
                Meet
                <span className="font-medium">Video and voice conference</span>
              </th>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center font-semibold">100 participants</p>
              </td>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center font-semibold">150 participants</p>
              </td>
            </tr>
            <tr>
              <th className="w-5/12 border-r border-b border-t text-left py-6 pr-10 border-gray-300 text-md">
                <p className="ml-10">
                  <span className="font-medium">
                    Meeting recordings saved to drive
                  </span>
                </p>
              </th>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="gray"
                    className="bi bi-dash inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </p>
              </td>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </p>
              </td>
            </tr>
            <tr>
              <th className="w-5/12 border-r border-b border-t text-left py-6 pr-10 border-gray-300 text-md">
                <img className="inline mr-3" src={img34} alt="" />
                Admin
                <span className="font-medium">Centralized administration</span>
              </th>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="gray"
                    className="bi bi-dash inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </p>
              </td>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </p>
              </td>
            </tr>
            <tr>
              <th className="w-5/12 border-r border-b border-t text-left py-6 pr-10 border-gray-300 text-md">
                <p className="ml-10">
                  <span className="font-medium">
                    Group based security policy control
                  </span>
                </p>
              </th>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="gray"
                    className="bi bi-dash inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </p>
              </td>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </p>
              </td>
            </tr>
            <tr>
              <th className="w-5/12 border-r border-b border-t text-left py-6 pr-10 border-gray-300 text-md">
                <p className="ml-10">
                  <span className="font-medium">Customer support</span>
                </p>
              </th>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center font-semibold tracking-tight">
                  Self-service online and community forums
                </p>
              </td>
              <td className="border-r border-b border-t border-gray-300">
                <p className="text-center font-semibold tracking-tight">
                  24/7 online support and community forums
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
