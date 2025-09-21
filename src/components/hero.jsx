import heroImage from "/assets/Logo.png"; // ganti dengan gambar ilustrasi/ilustrasi daun

export default function Hero() {
  return (
    <header className="bg-wk-cream py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-serifHeading text-wk-green leading-snug">
            Tenang dalam jiwa, bertumbuh dalam karsa.
          </h1>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Kami percaya bahwa <span className="font-semibold">ketenangan</span>{" "}
            adalah fondasi, dan <span className="font-semibold">tekad</span>{" "}
            adalah penggerak. Wening Karsa hadir untuk membantu Anda mencapai
            keseimbangan dalam belajar, bekerja, dan berkarya.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#programs"
              className="bg-wk-green text-white px-5 py-3 rounded-md hover:bg-wk-olive transition"
            >
              Lihat Program
            </a>
            <a
              href="#contact"
              className="border border-wk-green px-5 py-3 rounded-md hover:bg-wk-green hover:text-white transition"
            >
              Konsultasi
            </a>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroImage}
            alt="Ilustrasi pelatihan"
            className="w-80 md:w-96 drop-shadow-lg rounded-xl"
          />
        </div>
      </div>
    </header>
  );
}
