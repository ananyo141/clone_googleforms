import img7 from "../assets/img_7.jpg";
import img8 from "../assets/img_8.jpg";

export const AnalyzeResponse = () => {
  return (
    <section>
      <div className="relative">
        <img
          className="bg-image_ -top-24 right-4"
          src={img7}
          alt="Background"
        />
      </div>

      {/* Container for image and text */}
      <div className="flex flex-col-reverse gap-y-5 lg:flex-row lg:items-center lg:justify-center gap-x-16">
        <img
          className="w-auto bg-local lg:w-1/2 xl:max-w-2xl"
          src={img8}
          alt="Customer Satisfaction Survey Form"
        />

        {/* Container for Text */}
        <div className="flex flex-col lg:justify-center gap-4 lg:max-w-md">
          <h2 className="font-medium text-gray-800 text-2xl sm:text-4xl">
            Analyze responses with automatic summaries
          </h2>
          <p className="text-base sm:text-xl my-3 max-wd-sm">
            See charts with response data update in real-time. Or open the raw
            data with Google Sheets for deeper analysis or automation.
          </p>
        </div>
        {/* Text End */}
      </div>
      {/* Container end */}
    </section>
  );
};
