import img10 from "../assets/img_10.svg";
import img11 from "../assets/img_11.svg";
import img12 from "../assets/img_12.svg";

export const BuildWorkShare = () => {
  return (
    <section className="bg-gray-100 px-4 lg:px-10 -m-16">
      <div className="flex flex-col sm:flex-row justify-center gap-12 font-montserrat py-16 p-8 lg:px-16">
        {/* First Child */}
        <div className="gap-6 max-w-sm">
          <img className="w-12 mb-8" src={img10} alt="" />
          <h3 className="text-gray-800 font-medium tracking-tight text-xl mb-3">
            Build forms and analyze results together
          </h3>
          <p className="font-medium tracking-tight leading-relaxed text-md">
            Add collaborators—just like with Google Docs, Sheets, and Slides—to
            build questions together in real-time. Then analyze results together
            without having to share multiple versions of the file.
          </p>
        </div>
        {/* Second Child */}
        <div className="gap-6 max-w-sm">
          <img className="w-12 mb-8" src={img11} alt="" />
          <h3 className="text-gray-800 font-medium tracking-tight text-xl mb-3">
            Work with clean response data
          </h3>
          <p className="font-medium tracking-tight leading-relaxed text-md">
            Use built-in intelligence to set response validation rules. For
            example, ensure that email addresses are properly formatted or that
            numbers fall within a specified range.
          </p>
        </div>
        {/* Third Child */}
        <div className="gap-6 max-w-sm">
          <img className="w-12 mb-8" src={img12} alt="" />
          <h3 className="text-gray-800 font-medium tracking-tight text-xl mb-3">
            Share forms via email, link, or website
          </h3>
          <p className="font-medium tracking-tight leading-relaxed text-md">
            It's easy to share forms with specific people or with a broad
            audience by embedding forms on your website or sharing the links on
            social media.
          </p>
        </div>
      </div>
    </section>
  );
};
