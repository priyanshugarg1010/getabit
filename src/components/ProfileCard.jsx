import profile from "../assets/image/profile.png";
function ProfileCard() {
  return (
    <div className="overflow-hidden max-w-[571px] max-md:pr-5 shadow-lg drop-shadow-2xl rounded-3xl hidden lg:block md:block">
      <div className="flex max-md:flex-col w-[570px] rounded-3xl overflow-hidden h-[250px]">
        <div className="flex flex-col w-5/12 max-md:ml-0 ">
          <img
            loading="lazy"
            src={profile}
            alt="profile image"
            className="grow border-r border-solid  object-fill border-r-black "
          />
        </div>
        <div className="flex flex-col  w-7/12 max-md:ml-0 max-md:w-full bg-background p-7">
          <div className="flex flex-col ">
            <div className="flex gap-5 justify-between">
              <h2 className="flex-auto text-3xl tracking-tight font-bold  text-black">
                DAN MACE
              </h2>
              <span className="text-sm leading-7 text-stone-600">
                /Johny_Films/
              </span>
            </div>
            <div className="mt-5 text-md leading-6  text-stone-600">
              <span className="font-bold">Bio</span>
              <br />
              Simply a film fan creating original content for YouTube. Let’s
              Collaborate.
              <br />
            </div>
            <div className="flex gap-0 mt-7 justify-start  text-sm leading-6 text-center whitespace-nowrap rounded-md border    border-black border-solid backdrop-blur-[25px] bg-buttonColor text-zinc-800 overflow-hidden">
              <button className="z-10 grow justify-center px-11 rounded-md border p-1 border-black border-solid bg-background max-md:px-5 cursor-pointer">
                Creator
              </button>
              <div className="w-32 rounded-none bg-buttonColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
