import Image from "next/image";
import Link from "next/link";

export default function GridItem({ src, href }) {
  return (
    <div className=" h-72 relative shadow-button ">
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        loading="lazy"
      />
      <div className="absolute flex flex-col justify-end pl-6 pb-5 w-full h-full bg-gray-item-opacity transition duration-500 ease-in-out opacity-0 hover:opacity-100">
        <p className="text-white bg-pink-primary py-1 px-4 mb-3 rounded-xl w-20 text-xs	font-extrabold capitalize flex justify-center items-center">
          featured
        </p>

        <Link href={href}>
          <a className="font-open-sans text-2xl	font-bold	leading-9 text-white cursor-pointer">
            Palestine Revolution Just an Example Text
          </a>
        </Link>
      </div>
    </div>
  );
}

// left-6 bottom-5
