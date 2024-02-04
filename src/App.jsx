import Navbar from "./components/Navbar";
import coverImage from "./assets/image/cover image.png";
import Strip from "./components/Strip";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import Releases from "./components/Releases";
import github from "./assets/github.json";
import Lottie from "lottie-react";

const App = () => {
  return (
    <>
      <div className="flex overflow-hidden relative flex-col pb-12  w-full font-bold whitespace-nowrap backdrop-blur-[25px] min-h-[600px] max-md:max-w-full">
        <img
          loading="lazy"
          src={coverImage}
          className="object-cover absolute inset-0 size-full "
        />
        <nav>
          <Navbar />
        </nav>
      </div>
      <main>
        <Strip />
        <div className="-mt-44 ml-24 absolute">
          <ProfileCard />
        </div>
        <div className="py-10">
          <Releases />
        </div>
      </main>
      <footer>
        <Footer />
        <div className="fixed bottom-0 right-0">
          <a href="https://github.com/priyanshugarg1010/getabit" target="blank">
            <Lottie
              animationData={github}
              style={{ height: "100px" }}
              loop={true}
              height={10}
              width={10}
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default App;
