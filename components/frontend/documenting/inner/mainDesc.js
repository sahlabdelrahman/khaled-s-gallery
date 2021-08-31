export default function MainDesc({ title, desc }) {
  return (
    <div className="my-18">
      <h2 className=" text-2xl font-semibold font-open-sans mb-8">{title}</h2>
      <p className="text-lg text-gray-dark-gray font-normal font-open-sans">
        {desc}
      </p>
    </div>
  );
}
