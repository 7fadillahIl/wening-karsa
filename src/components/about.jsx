import logo from "/assets/Logo.png";

export default function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-serifHeading text-wk-green mb-4">
            Filosofi Wening Karsa
          </h2>
          <p className="text-gray-700 italic text-lg">
            Tenang dalam jiwa, bertumbuh dalam karsa.
          </p>
        </div>

        {/* 1. Makna Nama */}
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
          <div className="flex justify-center relative">
            <div className="absolute w-64 h-64 bg-wk-olive/20 rounded-full blur-3xl"></div>
            <img
              src={logo}
              alt="Wening Karsa"
              className="relative w-72 md:w-80 object-contain drop-shadow-lg"
            />
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
                  Dalam ketenangan, kita mampu melihat jernih, mendengar lebih
                  dalam, dan menyerap makna.
                </li>
                <li>
                  Seperti air yang bening, pikiran yang wening memantulkan
                  realitas dengan utuh tanpa bias.
                </li>
              </ul>
            </div>
            <div className="bg-wk-cream p-6 rounded-xl shadow">
              <h4 className="font-semibold text-wk-green mb-3">
                Bertumbuh dalam Karsa
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Karsa adalah daya gerak untuk melangkah dan berkembang.</li>
                <li>
                  Pertumbuhan sejati bukan hanya tentang hasil, melainkan
                  keberanian untuk beradaptasi & memperbaiki diri.
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
                <li>
                  Tekad tanpa kejernihan menimbulkan kegaduhan & kehilangan
                  arah.
                </li>
                <li>
                  Wening Karsa mengajarkan keseimbangan: jernih saat berproses,
                  tegas saat melangkah.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Semangat Belajar & Bertumbuh */}
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
              <strong>Keteguhan</strong> → menjaga konsistensi dalam melangkah.
            </li>
          </ul>
          <p className="mt-4 text-gray-700">
            Belajar bukan sekadar mengisi pengetahuan, melainkan membangun
            karakter, memperluas wawasan, dan menumbuhkan kebijaksanaan.
          </p>
        </div>

        {/* 4. Visualisasi Filosofi */}
        <div>
          <h3 className="text-2xl font-serifHeading text-wk-green mb-4">
            4. Visualisasi Filosofi
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              🌱 Daun bertumbuh → simbol proses belajar berakar dari ketenangan
              batin.
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
    </section>
  );
}
