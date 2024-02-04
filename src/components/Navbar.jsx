import expand from "../assets/svg/expand.svg";
import wallet from "../assets/svg/wallet.svg";
import notification from "../assets/svg/notification.svg";
import profile from "../assets/image/profile.png";

function Navbar() {
  return (
    <div className="flex   gap-5 justify-between px-16 py-9 font-bold backdrop-blur-[25px] min-h-28 bg-[#E2E4E5] max-md:flex-wrap max-md:px-5 ">
      <a href="#">
        {" "}
        <h1 className="relative my-auto text-2xl text-zinc-800">aBit</h1>
      </a>
      <div className="flex relative gap-4 justify-between items-center text-xs text-violet-700 cursor-pointer ">
        <button className="grow justify-center self-stretch px-6 py-3.5 border-2 border-violet-700 border-solid rounded-full max-md:px-5">
          Share new video
        </button>
        <button href="#">
          <img
            src={wallet}
            alt="wallet icon"
            className=" my-auto w-7 aspect-square cursor-pointer"
          />
        </button>
        <button href="#">
          <img
            loading="lazy"
            alt="notification icon"
            src={notification}
            className=" w-9 aspect-square cursor-pointer"
          />
        </button>
        <a href="#">
          <img
            loading="lazy"
            src={profile}
            alt="profile image"
            className=" w-12 rounded-full"
          />
        </a>
        <button href="#">
          <img
            loading="lazy"
            src={expand}
            alt="expand icon"
            className=" my-auto w-6 aspect-square cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
