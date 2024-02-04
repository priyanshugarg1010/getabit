import ReleaseCard from "./ReleaseCard";
import UploadReleaseCard from "./UploadReleaseCard";
import { data } from "../utils/data";

function Releases() {
  return (
    <div className="flex flex-col px-20 mt-36 mb-36 w-full max-md:px-5 max-md:my-10 max-md:max-w-full ">
      <div className="flex lg:flex-row md:flex-col lg:gap-0 md:gap-10 gap-10 flex-col justify-between items-center ">
        <div className="flex flex-col font-reckless gap-3 w-6/12">
          <h3 className="flex-auto text-3xl text-black ">Releases</h3>
          <p className="flex-auto self-start  text-base italic tracking-wide leading-6 text-neutral-600">
            Videos that you upload in collaboration with aBit appear here.
          </p>
        </div>
        <div className="flex flex-row justify-between items-center lg:w-6/12 md:w-8/12 sm:w-11/12">
          {data.map((item, index) => (
            <div
              className="w-24 font-sans border-l border-black pl-5 gap-3"
              key={index}
            >
              <span className="self-start text-base font-bold leading-6 text-neutral-600">
                {item.title}
              </span>
              <p className="text-md leading-6 text-stone-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 ml-3.5 max-w-full w-[610px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <UploadReleaseCard />
          </div>

          <ReleaseCard />
        </div>
      </div>
    </div>
  );
}

export default Releases;
