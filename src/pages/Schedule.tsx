import schedule from "../assets/schedule.webp";

function Schedule() {
  return (
    <div className="relative min-h-[90vh]] bg-neutral-900 overflow-hidden font-inter">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed grayscale"
        style={{
          backgroundImage: `url('${schedule}')`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 flex flex-col justify-center items-center py-10 px-4 h-full">
        <p className="text-4xl text-neutral-50 py-4 font-bold">
          Schedule a Meeting
        </p>
        <div className="w-full bg-neutral-50 h-fit opacity-80">
          test fsdlfhlskf
        </div>
      </div>
    </div>
  );
}

export default Schedule;
