export default function SecondaryDesc({ title, desc, src }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <img className="w-full min-h-92 h-full bg-pink-primary" />
      </div>
      <div className="lg:px-14 py-11">
        <h2 className="text-2xl font-semibold font-open-sans mb-8">{title}</h2>
        <p className="text-lg text-gray-dark-gray font-normal font-open-sans">
          {desc}
        </p>
      </div>
    </div>
  );
}
