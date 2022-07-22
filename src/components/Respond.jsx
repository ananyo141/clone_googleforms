import img9 from "../assets/img_9.jpg";

export const Respond = () => {
  return (
    <section>
      {/* Container for image and text */}
      <div className="flex flex-col gap-y-5 lg:flex-row justify-center items-center gap-x-60">
        {/* Container for Text */}
        <div className="flex flex-col justify-center gap-4 lg:max-w-md">
          <h2 className="font-medium text-gray-800 text-2xl sm:text-4xl">
            Create and respond to surveys from anywhere
          </h2>
          <p className="text-base sm:text-xl my-3 max-wd-sm">
            Access, create, and edit forms on-the-go, from screens big and
            small. Others can respond to your survey from wherever they are—from
            any mobile device, tablet, or computer.
          </p>
        </div>

        <img
          className="lg:max-w-lg w-3/4 mx-auto lg:mx-0 bg-local"
          src={img9}
          alt="Employee Ideas and Suggestions"
        />
        {/* Text End */}
      </div>
      {/* Container end */}
    </section>
  );
};
