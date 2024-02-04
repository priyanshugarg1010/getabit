function Footer() {
  return (
    <div className="bg-white flex justify-center items-center h-96 border-t border-black font-reckless">
      <div className="flex gap-5 justify-between items-start self-center  w-full max-w-[1165px] max-md:flex-wrap  max-md:max-w-full bg-white">
        <div className="flex flex-col px-5">
          <h3 className="text-4xl font-bold text-neutral-800 font-serif">
            aBit
          </h3>
          <p className="mt-6 text-xl text-black capitalize w-64">
            Changing the way in which creators and fans interact.
          </p>
        </div>
        <div className="flex gap-5 justify-between  text-sm font-bold whitespace-nowrap text-neutral-800">
          <div className="flex flex-col flex-1 self-start px-5 border-l border-black">
            <a href="#" className="capitalize cursor-pointer">
              Home
            </a>
            <a href="#" className="mt-6 cursor-pointer">
              Are you a Creator?
            </a>
            <a href="#" className="mt-6 capitalize cursor-pointer">
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
