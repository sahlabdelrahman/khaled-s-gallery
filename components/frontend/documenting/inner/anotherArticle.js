import Link from "next/link";

export default function AnotherArticle({ title, description, src, id }) {
  return (
    <div>
      <img
        className="w-full h-44 bg-pink-primary  object-cover object-center"
        src={src}
      />
      <div className="bg-gray-details-bg p-4">
        <Link
          href={`/dashboard/documenting/[id]`}
          as={`/dashboard/documenting/${id}`}
        >
          <a className="font-bold text-base font-open-sans text-black-item-text mb-3 inline-block">
            {title}
          </a>
        </Link>
        <p className=" text-black-item-paragraph text-xs font-normal font-open-sans leading-relaxed overflow-auto h-20">
          {description}
        </p>
      </div>
    </div>
  );
}
