import plus from "../assets/svg/plus.svg";

function UploadReleaseCard() {
  return (
    <div className="flex flex-col justify-between items-center grow px-9 py-11 w-full text-sm tracking-wide leading-6 text-center bg-gray-200 rounded-3xl text-neutral-400 max-md:px-5 max-md:mt-10 cursor-pointer">
      <img src={plus} alt="plus icon" className="w-12 mt-20" />
      <span className="mt-16 max-md:mt-10">
        You haven’t uploaded any videos with aBit yet. Add now!
      </span>
    </div>
  );
}

export default UploadReleaseCard;
