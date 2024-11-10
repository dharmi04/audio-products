export default function ShowCase() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 md:p-8 mt-10 md:mt-20 font-poppins">
      <div className="flex justify-center md:justify-start mb-8 md:mb-0 md:mr-8 w-full md:w-1/2">
        <div className="w-[300px] h-[200px] md:w-[500px] md:h-[250px] rounded-2xl bg-gray-900 flex items-center justify-center shadow-md">
          <img 
            src="/Images/bigspeakers.png" 
            className="h-40 md:h-96 object-contain"
            alt="Sony Audio Speakers"
          />
        </div>
      </div>
      <div  className="text-center md:text-left w-full md:w-1/2">
        <h1 className="text-4xl md:text-7xl font-bold gradient-text mb-4">Sony Audio</h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 font-poppins mt-2">
          Elevate your listening experience, bring music to life.
        </p>
        <div className="">
          <button className="bg-black text-white font-semibold p-3 px-6 rounded-sm  w-auto md:w-full">
            Explore 
          </button>
        </div>
      </div>
    </div>
  );
};
