import logoWhite from "/assets/Logo.png";

export default function Hero() {
  return (
    <header className="bg-wk-cream py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-serifHeading text-wk-green">
            Tenang dalam jiwa,
            <br />
            Bertumbuh dalam karsa.
          </h1>
          <p className="mt-6 text-gray-700">
            Wening Karsa adalah perusahaan pelatihan yang menggabungkan
            ketenangan batin dengan tekad, menghadirkan program berbasis bukti
            untuk mendukung pertumbuhan individu & organisasi.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#programs"
              className="bg-wk-green text-white px-5 py-3 rounded-md"
            >
              Lihat Program
            </a>
            <a
              href="#contact"
              className="border border-wk-green px-5 py-3 rounded-md"
            >
              Konsultasi
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={logoWhite} alt="logo" className="w-52" />
        </div>
      </div>
    </header>
  );
}
