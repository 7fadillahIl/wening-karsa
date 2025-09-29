import { Link } from "react-router-dom";

export default function ProgramCard({ slug, title, summary, cluster }) {
  const handleClick = () => {
    sessionStorage.setItem("lastProgram", slug); // simpan slug yg diklik
  };

  return (
    <div
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 p-6 flex flex-col"
      id={`program-${slug}`}
    >
      <h4 className="text-sm uppercase text-wk-olive font-semibold mb-2">
        {cluster}
      </h4>
      <h3 className="text-xl font-serifHeading text-wk-green mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{summary}</p>
      <Link
        to={`/program/${slug}`}
        onClick={handleClick}
        className="mt-4 inline-block bg-wk-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-wk-olive transition"
      >
        Lihat detail →
      </Link>
    </div>
  );
}
