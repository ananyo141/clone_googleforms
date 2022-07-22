import img38 from "../assets/img_38.jpg";
import img37 from "../assets/img_37.jpg";
import img36 from "../assets/img_36.jpg";
import img35 from "../assets/img_35.jpg";

export const Templates = () => {
  return (
    <section>
      <div className="flex flex-col items-center space-y-16">
        <div>
          <h2 className="text-gray-800 text-2xl sm:text-4xl font-medium text-center mb-3">
            Get a head start with templates
          </h2>
          <p className="text-lg max-w-2xl text-center tracking-wider">
            Choose from a variety of surveys, questionnaires, and other
            professionally-designed templates to kick things off quickly.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-screen-xl">
          <figure>
            <figcaption className="text-gray-800 font-medium font-montserrat tracking-tight text-center mb-4">
              Orders
            </figcaption>
            <img src={img35} className="w-80" alt="Order Request Form" />
          </figure>
          <figure>
            <figcaption className="text-gray-800 font-medium font-montserrat tracking-tight text-center mb-4">
              Registration
            </figcaption>
            <img src={img36} className="w-80" alt="Order Request Form" />
          </figure>
          <figure>
            <figcaption className="text-gray-800 font-medium font-montserrat tracking-tight text-center mb-4">
              Feedback
            </figcaption>
            <img src={img37} className="w-80" alt="Order Request Form" />
          </figure>
          <figure>
            <figcaption className="text-gray-800 font-medium font-montserrat tracking-tight text-center mb-4">
              Assessment
            </figcaption>
            <img src={img38} className="w-80" alt="Order Request Form" />
          </figure>
        </div>
        <p className="font-semibold tracking-tight">
          Visit the{" "}
          <a className="text-blue-700" href="#">
            Forms Template Gallery
          </a>{" "}
          for more
        </p>
      </div>
    </section>
  );
};
