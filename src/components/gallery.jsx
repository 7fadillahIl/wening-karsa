// Gallery.jsx
export default function Gallery() {
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
          <img
            src="/assets/Team/perusahaan 6.jpg"
            alt="Pelatihan"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
          <img
            src="/assets/Team/perusahaan 7.jpg"
            alt="Pelatihan"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
          <img
            src="/assets/Team/perusahaan 8.jpg"
            alt="Pelatihan"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
          <img
            src="/assets/Team/perusahaan 13.jpg"
            alt="Pelatihan"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
          <img
            src="/assets/Team/perusahaan 11.jpg"
            alt="Pelatihan"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
          <img
            src="/assets/Team/perusahaan 12.jpg"
            alt="Pelatihan"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
        </div>
      </div>
    </section>
  );
}
