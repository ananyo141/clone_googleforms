import img13 from "../assets/img_13.jpg";
import img14 from "../assets/img_14.svg";
import img15 from "../assets/img_15.svg";
import img16 from "../assets/img_16.svg";
import img17 from "../assets/img_17.svg";
import img18 from "../assets/img_18.svg";

export const SecurityCompliance = () => {
  return (
    <section>
      <div className="relative">
        <img
          className="bg-image_ -top-24 left-4"
          src={img13}
          alt="Background"
        />
      </div>

      <div className="space-y-10">
        <h2 className="text-gray-800 text-2xl sm:text-4xl font-medium text-center">
          Security, compliance and privacy
        </h2>
        <div className="flex gap-4 sm:gap-20 justify-center">
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
          <img src={img17} alt="" />
        </div>
      </div>

      {/* Outer Container */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:divide-x divide-gray-300 leading-relaxed tracking-wider mt-12 mx-auto">
        <div className="flex flex-col gap-8">
          {/* Left Column */}
          <div id="first" className="max-w-lg">
            <h3 className="text-gray-800 sm:text-xl font-semibold mb-3">
              Secure by default
            </h3>
            <p>
              We use industry-leading security measures to keep your data safe,
              including advanced malware protections. Forms is also
              cloud-native, eliminating the need for local files and minimizing
              risk to your devices.
            </p>
          </div>
          <div id="second" className="max-w-lg">
            <h3 className="text-gray-800 sm:text-xl font-semibold mb-3">
              Encryption in transit and at rest
            </h3>
            <p>
              All files uploaded to Google Drive or created in Forms are
              encrypted in transit and at rest.
            </p>
          </div>
          <div id="third" className="max-w-lg">
            <h3 className="text-gray-800 sm:text-xl font-semibold">
              Compliance to support regulatory requirements
            </h3>
            <p>
              Our products, including Forms, regularly undergo independent
              verification of their security, privacy, and
              <a href="#">compliance controls.</a>
            </p>
          </div>
        </div>
        {/* Left column Ends */}

        {/* Right Column */}
        <div className="flex flex-col gap-16 sm:pl-10">
          <div id="fourth" className="max-w-lg">
            <h3 className="text-gray-800 sm:text-xl font-semibold mb-3">
              Private by design
            </h3>
            <p>
              Forms adheres to the same robust privacy commitments and data
              protections as the rest of
              <a href="#">Google Cloud's enterprise services.</a>
            </p>
          </div>

          <div id="fifth" className="max-w-lg">
            <img src={img18} alt="google logo on a blue shield" />
            <div className="divide-y divide-gray-300">
              <p className="text-gray-800 py-3 font-montserrat mt-3 font-semibold">
                You control your data.
              </p>
              <p className="text-gray-800 py-3 font-montserrat font-semibold">
                We never use your Forms content for ad purposes.
              </p>
              <p className="text-gray-800 py-3 font-montserrat font-semibold">
                We never sell your personal information to third parties.
              </p>
            </div>
          </div>
        </div>
        {/* Right Column Ends */}
      </div>
    </section>
  );
};
