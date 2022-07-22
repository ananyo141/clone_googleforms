import feedbackImage from "../assets/img_2.png";

export const GetInsights = () => {
  return (
    <section>
      {/* Outer Div, contain both text and image horizontally */}
      <div className="flex flex-col mx-8 items-center xl:flex-row xl:gap-8 xl:justify-center">
        {/* Inner div containing text part */}
        <div className="flex flex-col gap-8 items-center xl:max-w-md xl:items-start">
          {/* Header and para text */}
          <div className="flex text-center flex-col items-center mt-40 xl:text-left">
            <h1 className="font-medium text-4xl text-black text-opacity-80 my-3 sm:text-6xl">
              Get insights quickly, with Google Forms
            </h1>
            <p className="text-lg my-3 xl:max-wd-sm sm:text-xl">
              Easily create and share online forms and surveys, and analyze
              responses in real-time.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 xs:flex-row xs:items-baseline">
            <button className="font-sans font-medium text-white bg-blue-600 rounded-md w-52 sm:w-auto py-3 sm:px-5 border hover:bg-blue-800">
              Try Forms for Work
            </button>
            <button className="font-sans text-blue-600 font-medium border w-52 sm:w-auto py-3 sm:px-8 rounded-md hover:border-blue-800">
              Go to Forms
            </button>
          </div>

          {/* Signup text */}
          <div className="flex flex-col flex-wrap items-center font-semibold tracking-tight gap-3 sm:flex-row sm:gap-5">
            <p className="">Don't have an account?</p>
            <p className="cursor-pointer text-blue-600 hover:text-blue-800">
              Sign up for free
            </p>
          </div>
        </div>

        {/* Image Part */}
        <img
          className="mt-12 w-auto sm:w-3/4 xl:mt-40 xl:w-1/2"
          src={feedbackImage}
          alt="Feedback survery"
        />
      </div>

      <hr className="my-8 max-w-7xl mx-auto" />

      <div className="flex flex-col justify-center">
        <p className="text-center">See what you can do with Google Forms</p>
        <i className="text-center mt-3 text-xl animate-bounce bi bi-arrow-down"></i>
      </div>
    </section>
  );
};
