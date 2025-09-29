import { useParams, Link } from "react-router-dom";
import PROGRAMS from "../data/PROGRAM";

export default function ProgramDetail() {
  const { slug } = useParams();

  const allPrograms = PROGRAMS.flatMap((c) => c.items);
  const program = allPrograms.find((p) => p.slug === slug);

  if (!program) {
    return <p className="p-6 text-red-500">Program tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serifHeading text-wk-green mb-6">
        {program.title}
      </h1>

      {program.hasil && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-wk-olive">🎯 Hasil</h2>
          <p>{program.hasil}</p>
        </div>
      )}

      {program.tujuan && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-wk-olive">🎯 Tujuan</h2>
          <p>{program.tujuan}</p>
        </div>
      )}

      {program.peserta && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-wk-olive">
            👥 Cocok untuk
          </h2>
          <p>{program.peserta}</p>
        </div>
      )}

      {program.metode && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-wk-olive">🛠️ Metode</h2>
          <p>{program.metode}</p>
        </div>
      )}

      {program.referensi && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-wk-olive">📚 Rujukan</h2>
          <p>{program.referensi}</p>
        </div>
      )}

      <Link
        to="/#programs"
        className="inline-block mt-6 text-wk-green font-semibold hover:underline"
      >
        ← Kembali ke Program
      </Link>
    </div>
  );
}
