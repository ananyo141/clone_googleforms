import img3 from "../assets/img_3.jpg";
import img4 from "../assets/img_4.jpg";

export const CreateForm = () => {
  return (
    <section>
      <div className="relative -mt-20">
        <img
          className="bg-image_ -top-24 right-4"
          src={img3}
          alt="Background"
        />
      </div>

      {/* Container for image and text */}
      <div className="flex flex-col-reverse gap-y-5 gap-x-16 lg:flex-row lg:items-center lg:justify-center xl:flex-row">
        <img
          className="w-auto bg-local lg:w-1/2 xl:max-w-2xl"
          src={img4}
          alt="Customer Satisfaction Survey Form"
        />

        {/* Container for Text */}
        <div className="flex flex-col justify-center gap-4 lg:max-w-md">
          <h2 className="font-medium text-2xl sm:text-4xl text-gray-800">
            Create an online form as easily as creating a document
          </h2>
          <p className="text-base sm:text-xl my-3 max-wd-sm">
            Select from multiple question types, drag-and-drop to reorder
            questions, and customize values as easily as pasting a list.
          </p>
        </div>
        {/* Text End */}
      </div>
      {/* Container end */}
    </section>
  );
};
