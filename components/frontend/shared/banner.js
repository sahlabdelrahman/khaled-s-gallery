import { useContext } from "react";
import IsLoading from "../../../context/isLoading";

// import mainKhaled from "../../public/images/test/one.png";
import mainKhaled from "../../../public/images/main-khaled.jpg";
import Image from "next/image";
import Twitter from "../../../public/icons/twitter.svg";
import Behance from "../../../public/icons/behane.svg";
import Instagram from "../../../public/icons/instagram-logo.svg";

export default function Banner({ children }) {
  const { isLoading } = useContext(IsLoading);

  return (
    <div
      className={`${
        !isLoading ? "bg-white" : "bg-black-black"
      } transition-all duration-1000 ease-in-out z-0 h-screen fixed left-0 -top-0 w-full  flex  flex-col items-center `}
    >
      {/* <Image
        src={mainKhaled}
        alt="Picture of the author"
        width={700}
        height={625}
        className="h-screen"
      /> */}
      <img
        src={mainKhaled}
        width={700}
        // h-140
        alt="Picture of the author"
        className="flex justify-center items-center absolute mt-25.25 object-contain h-full "
      />

      <div
        style={{ top: "40%" }}
        className="container hidden lg:flex flex-col justify-center items-center z-10 relative"
      >
        <div>
          <h1
            className={`${
              !isLoading ? "text-gray-banner" : "text-white"
            } transition-all duration-500 ease-in-out text-small-banner xl:text-banner font-medium  leading-snug font-roboto tracking-tighter`}
          >
            Ahm<spna className="opacity-0">ed</spna>{" "}
            <span className="opacity-0">kh</span>aled
            <span className="text-pink-primary">.</span>
          </h1>
        </div>
      </div>
      <p
        style={{ top: "35%" }}
        className={`${
          !isLoading ? "opacity-0" : "opacity-50"
        } text-white font-open-sans text-lg font-normal relative transition-all duration-500 ease-in-out`}
      >
        I’m Ahmed Kahled that specializes in User Experience Design dummy text
      </p>
      <div className="relative z-10 top-3/5 lg:top-2/5">
        <ul
          className={`${
            !isLoading ? "opacity-100" : "opacity-0"
          } flex transition-all duration-500 ease-in-out`}
        >
          <li className="mx-3 text-pink-primary">
            <a href="https://twitter.com/ah_khaled32">
              <Image width="16" height="16" src={Twitter} />
            </a>
          </li>
          <li className="mx-3">
            <a href="https://www.behance.net/ah_khaled32">
              <Image width="16" height="16" src={Behance} />
            </a>
          </li>
          <li className="mx-3">
            <a href="https://www.instagram.com/ah_khaled32">
              <Image width="16" height="16" src={Instagram} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
