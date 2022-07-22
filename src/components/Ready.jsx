import img39 from "../assets/img_39.jpg";

export const Ready = () => {
  return (
    <section>
      <div class="-mt-16">
        <div class="relative">
          <img class="bg-image_ top-24 left-6" src={img39} alt="Background" />
        </div>
        <div class="flex flex-col items-center gap-8">
          <h2 class="text-gray-800 text-2xl sm:text-4xl font-medium">
            Ready to get started?
          </h2>
          <div class="flex flex-col gap-4 xs:flex-row xs:items-baseline">
            <button class="font-sans font-medium text-white bg-blue-600 rounded-md w-52 sm:w-auto py-3 sm:px-5 border hover:bg-blue-800">
              Try Forms for Work
            </button>
            <button class="font-sans text-blue-600 font-medium border w-52 sm:w-auto py-3 sm:px-8 rounded-md hover:border-blue-800">
              Go to Forms
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
