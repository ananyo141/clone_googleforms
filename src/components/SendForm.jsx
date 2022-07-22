import img5 from "../assets/img_5.jpg";
import img6 from "../assets/img_6.jpg";

export const SendForm = () => {
    return (
      <section>
        <div className="relative">
          <img
            className="bg-image_ -top-40 -left-2"
            src={img5}
            alt="Background"
          />
        </div>

        {/* Container for image and text */}
        <div
          className="flex flex-col lg:flex-row gap-y-5 gap-x-16 lg:items-center lg:justify-center"
        >
        {/* Container for Text */}
          <div className="flex flex-col justify-center gap-4 lg:max-w-md">
            <h2 className="text-gray-800 font-medium text-2xl sm:text-4xl">
              Send polished surveys and forms
            </h2>
            <p className="text-base sm:text-xl my-3 max-wd-sm">
              Customize colors, images, and fonts to adjust the look and feel or
              reflect your organization's branding. And add custom logic that
              shows questions based on answers, for a more seamless experience.
            </p>
          </div>

          <img
            className="w-auto bg-local lg:w-1/2 xl:max-w-2xl"
            src={img6}
            alt="Employee Ideas and Suggestions"
          />
        {/* Text End */}
        </div>
        {/* Container end */}
      </section>

    );
};
