export default function LeftImage({ src, title, description }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <img src={src} className="w-full min-h-123 h-full bg-pink-primary" />
      <div className="lg:px-14 py-11">
        <h2 className="text-3xl font-bold font-open-sans mb-8">{title}</h2>
        <p className="text-base text-gray-dark-gray font-normal font-open-sans mb-8">
          {description}
        </p>
        <button className="text-sm text-pink-primary font-normal font-open-sans underline">
          contact us
        </button>
      </div>
    </div>
  );
}
