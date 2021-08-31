import Image from "next/image";
import Twitter from "../../../public/icons/twitter-dark.svg";
import Behance from "../../../public/icons/behance-dark.svg";
import Instagram from "../../../public/icons/instagram-logo-dark.svg";

export default function Footer() {
  return (
    <footer className="py-20 relative">
      <div className="test-grid z-0"></div>
      <div className="container z-10 mx-auto max-w-screen-lg justify-center flex ">
        <ul className="flex">
          <li className="mx-3">
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
    </footer>
  );
}
