export default function AnotherArticle({ title, description, src }) {
  return (
    <div>
      <img className="w-full h-44 bg-pink-primary" src={src} />
      <div className="bg-gray-details-bg p-4">
        <h3 className=" font-bold text-base font-open-sans text-black-item-text mb-3">
          {title}
        </h3>
        <p className=" text-black-item-paragraph text-xs font-normal font-open-sans leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
