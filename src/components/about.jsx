import { useState } from "react";
import logo from "/assets/Logo.png";
import foto1 from "/assets/Team/perusahaan 1.jpg";
import foto2 from "/assets/Team/perusahaan 9.jpg";
import foto3 from "/assets/Team/perusahaan 3.jpg";
import foto4 from "/assets/Team/perusahaan 4.jpg";
import foto5 from "/assets/Team/perusahaan 14.jpg";

const aboutImages = [
  {
    src: logo,
    alt: "Logo Wening Karsa",
    desc: "Logo resmi Wening Karsa – melambangkan harmoni antara ketenangan batin dan tekad yang kuat untuk bertumbuh.",
  },
  {
    src: foto1,
    alt: "Pelatihan Kelas Interaktif",
    desc: "Suasana kelas interaktif dengan metode partisipatif. Peserta diajak berdiskusi dan mempraktikkan langsung materi.",
  },
  {
    src: foto5,
    alt: "Aktivitas Kelompok",
    desc: "Sesi kerja kelompok yang dirancang untuk membangun komunikasi, kepemimpinan, dan kerjasama tim.",
  },
  {
    src: foto3,
    alt: "Presentasi Trainer",
    desc: "Trainer profesional menyampaikan materi dengan pendekatan modern dan relevan.",
  },
  {
    src: foto4,
    alt: "Peserta Fokus Pelatihan",
    desc: "Peserta fokus dalam suasana kondusif untuk meningkatkan pemahaman dan keterampilan.",
  },
  {
    src: foto2,
    alt: "Diskusi & Coaching Session",
    desc: "Diskusi aktif dan coaching session memastikan setiap individu mendapat pendampingan praktis.",
  },
];

export default function About() {
  const [active, setActive] = useState(null);

  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-serifHeading text-wk-green mb-4">
            Filosofi Wening Karsa
          </h2>
          <p className="text-gray-700 italic text-lg">
            Tenang dalam jiwa, bertumbuh dalam karsa.
          </p>
        </div>

        {/* 1. Makna Nama + Foto Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-serifHeading text-wk-green mb-3">
              1. Makna Nama
            </h3>
            <p className="text-gray-700 mb-3">
              <span className="font-bold">Wening</span> → berarti jernih,
              hening, tenang. Melambangkan kejernihan pikiran dan ketenangan
              hati sebagai landasan dalam setiap proses.
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-bold">Karsa</span> → berarti kehendak,
              tekad, daya cipta. Mewakili semangat untuk berusaha, berkarya, dan
              bertumbuh.
            </p>
            <p className="text-gray-700">
              Dua kata ini berpadu menjadi <strong>Wening Karsa</strong>, yaitu
              filosofi hidup dan belajar yang menekankan ketenangan dalam hati
              sebagai sumber kekuatan untuk bertumbuh dalam tekad.
            </p>
          </div>

          {/* Foto Grid */}
          <div className="grid grid-cols-2 gap-4">
            {aboutImages.slice(0, 5).map((item, i) => (
              <div
                key={i}
                onClick={() => setActive(item)}
                className={`relative group overflow-hidden rounded-lg shadow-md cursor-pointer ${
                  i === 0 ? "col-span-2" : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`${
                    i === 0
                      ? "h-40 object-contain bg-wk-cream p-4"
                      : "h-32 object-cover"
                  } w-full rounded-lg transform group-hover:scale-110 transition duration-500`}
                />
                {/* Overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center p-2">
                  <p className="text-white text-xs text-center">
                    Klik untuk detail
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Inti Filosofi */}
        <div>
          <h3 className="text-2xl font-serifHeading text-wk-green mb-6">
            2. Inti Filosofi
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-wk-cream p-6 rounded-xl shadow">
              <h4 className="font-semibold text-wk-green mb-3">
                Tenang dalam Proses
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Belajar, bekerja, dan berkarya memerlukan ketenangan batin.
                </li>
                <li>
                  Dalam ketenangan, kita mampu menyerap makna lebih dalam.
                </li>
                <li>Pikiran yang wening memantulkan realitas dengan utuh.</li>
              </ul>
            </div>
            <div className="bg-wk-cream p-6 rounded-xl shadow">
              <h4 className="font-semibold text-wk-green mb-3">
                Bertumbuh dalam Karsa
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Karsa adalah daya gerak untuk melangkah dan berkembang.</li>
                <li>
                  Pertumbuhan sejati bukan hanya hasil, tapi juga adaptasi.
                </li>
                <li>
                  Setiap proses pembelajaran jadi pijakan menuju kematangan.
                </li>
              </ul>
            </div>
            <div className="bg-wk-cream p-6 rounded-xl shadow">
              <h4 className="font-semibold text-wk-green mb-3">
                Keseimbangan Hening & Tekad
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Hening tanpa tekad membuat stagnan.</li>
                <li>Tekad tanpa kejernihan menimbulkan kegaduhan.</li>
                <li>Wening Karsa mengajarkan keseimbangan dalam melangkah.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Semangat Belajar & Bertumbuh */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-serifHeading text-wk-green mb-4">
              3. Semangat Belajar & Bertumbuh
            </h3>
            <p className="text-gray-700 mb-4">
              Wening Karsa menjadi simbol bahwa pembelajaran adalah perjalanan,
              bukan sekadar tujuan. Dalam setiap tahap, diperlukan:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Kesadaran</strong> → menyadari diri, lingkungan, dan
                makna.
              </li>
              <li>
                <strong>Kesabaran</strong> → menghargai ritme pertumbuhan.
              </li>
              <li>
                <strong>Keteguhan</strong> → menjaga konsistensi dalam
                melangkah.
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              Belajar bukan sekadar mengisi pengetahuan, melainkan membangun
              karakter, memperluas wawasan, dan menumbuhkan kebijaksanaan.
            </p>
          </div>
          <div
            className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => setActive(aboutImages[5])}
          >
            <img
              src={foto2}
              alt="Pelatihan Semangat Belajar"
              className="w-full aspect-video object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-white text-sm">Klik untuk detail</p>
            </div>
          </div>
        </div>

        {/* 4. Visualisasi Filosofi */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-serifHeading text-wk-green mb-4">
              4. Visualisasi Filosofi
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                🌱 Daun bertumbuh → simbol proses belajar dari ketenangan batin.
              </li>
              <li>
                🌿 Lengkungan daun ke atas → dukungan, perlindungan, & semangat
                tumbuh.
              </li>
              <li>💚 Warna hijau → pertumbuhan, kesegaran, keseimbangan.</li>
              <li>
                🤍 Warna cream → ketenangan, kehangatan, keterbukaan menerima
                ilmu.
              </li>
            </ul>
          </div>
          <div
            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer flex justify-center"
            onClick={() => setActive(aboutImages[0])}
          >
            <img
              src={logo}
              alt="Visual Filosofi"
              className="w-72 object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-white text-sm">Klik untuk detail</p>
            </div>
          </div>
        </div>

        {/* 5. Pesan Utama */}
        <div className="bg-wk-green text-white p-8 rounded-xl shadow-lg text-center">
          <p className="text-lg leading-relaxed mb-4">
            “Dengan Wening Karsa, kita diajak untuk menemukan ketenangan dalam
            diri, menumbuhkan tekad dalam karsa, dan merayakan setiap proses
            sebagai bagian dari pertumbuhan.”
          </p>
          <p className="italic">“Hening menuntun, karsa menggerakkan.”</p>
          <p className="mt-4 text-sm text-wk-cream">
            International version: <strong>Peace that nurtures purpose</strong>
            <br />
            True growth begins with inner calm. From serenity comes clarity, and
            from clarity emerges the strength to pursue meaningful goals.
          </p>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 text-center">{active.desc}</p>
            <button
              onClick={() => setActive(null)}
              className="mt-6 px-6 py-2 bg-wk-green text-white rounded hover:bg-wk-olive transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
