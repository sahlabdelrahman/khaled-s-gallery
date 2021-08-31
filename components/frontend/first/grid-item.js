import Image from "next/image";

export default function GridItem({ src, alt, index }) {
  return (
    <div>
      {/* <Image src={src} layout="fill" objectPosition="center" /> */}
      <img
        className={`w-full ${index == 0 ? "h-123" : ""}`}
        src={src}
        alt={alt}
      />
    </div>
  );
}
