import profileCard from "../assets/image/profileCard.jpg";
function ReleaseCard() {
  return (
    <div className="flex overflow-hidden relative flex-col cursor-pointer grow px-3.5 py-5 text-white shadow aspect-[0.91] max-md:mt-10 drop-shadow-2xl rounded-3xl">
      <img
        loading="lazy"
        src={profileCard}
        className="object-cover absolute inset-0 size-full"
      />
      <h6 className="relative text-xl font-bold tracking-tighter">
        The Sound of Silence
      </h6>
      <div className="flex relative gap-5 justify-between px-6 py-2.5 mt-52 whitespace-nowrap rounded-xl backdrop-blur-[25px] bg-white bg-opacity-20 max-md:pr-5 max-md:mt-10">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1 text-center">
            <span className="text-xs font-medium">Shares</span>
            <span className=" text-sm font-bold">317</span>
          </div>
          <div className="flex flex-col  text-center  gap-1">
            <span className="text-xs font-medium">Offered</span>
            <span className=" text-sm font-bold">75%</span>
          </div>
          <div className="flex flex-col  gap-1">
            <span className="text-xs font-medium">Raised</span>
            <span className=" text-sm font-bold">$9510</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReleaseCard;
