import { useState } from "react";

const galleryItems = [
  {
    src: "/assets/Team/perusahaan 6.jpg",
    alt: "Pelatihan komunikasi",
    desc: "Sesi penyampaian materi dengan pendekatan interaktif bersama trainer berpengalaman.",
  },
  {
    src: "/assets/Team/perusahaan 7.jpg",
    alt: "Diskusi kelompok",
    desc: "Kegiatan diskusi kelompok yang mendorong kolaborasi dan partisipasi aktif peserta.",
  },
  {
    src: "/assets/Team/perusahaan 8.jpg",
    alt: "Simulasi presentasi",
    desc: "Pemaparan materi menggunakan media presentasi untuk mendukung pemahaman yang lebih mendalam.",
  },
  {
    src: "/assets/Team/perusahaan 13.jpg",
    alt: "Kegiatan outdoor",
    desc: "Simulasi teamwork dan problem solving dalam suasana santai dan kolaboratif.",
  },
  {
    src: "/assets/Team/perusahaan 11.jpg",
    alt: "Workshop interaktif",
    desc: "Sesi presentasi interaktif yang mengajak peserta memahami strategi komunikasi efektif.",
  },
  {
    src: "/assets/Team/perusahaan 12.jpg",
    alt: "Coaching session",
    desc: "Pendampingan langsung dalam kelompok kecil untuk memastikan pemahaman setiap individu.",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="bg-wk-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-2xl font-serifHeading text-wk-green mb-6 text-center">
          Suasana Pelatihan Wening Karsa
        </h2>
        <p className="text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          Dokumentasi suasana kelas dan pelatihan bersama klien kami. Setiap
          sesi dirancang untuk memberikan pengalaman belajar yang bermakna &
          interaktif.
        </p>

        {/* Grid Foto */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(item)}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-48 w-full object-cover transform group-hover:scale-110 transition duration-500"
                loading="lazy"
              />
              {/* Overlay teks hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center p-4">
                <p className="text-white text-sm text-center">
                  Klik untuk detail
                </p>
              </div>
            </div>
          ))}
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
            onClick={(e) => e.stopPropagation()} // biar modal gak langsung close pas klik dalam
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
