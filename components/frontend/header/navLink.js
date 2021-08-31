import { useContext } from "react";
import Link from "next/link";
import Opens from "../../../context/opens";

export default function NavLink({ status, href, text }) {
  const { openContact } = useContext(Opens);

  return (
    <li
      className={`my-4 lg:my-0 lg:mx-4 transition-all duration-1000 ease-in-out ${
        openContact ? "opacity-0" : "opacity-100"
      }`}
    >
      <Link href={href}>
        <a
          className={`${
            status
              ? "active-link text-black-black relative"
              : "text-gray-header"
          }`}
        >
          {text}
        </a>
      </Link>
    </li>
  );
}
