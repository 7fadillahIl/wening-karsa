import logo from "/assets/Logo.png";
import foto1 from "/assets/Team/perusahaan 1.jpg";
import foto2 from "/assets/Team/perusahaan 9.jpg";
import foto3 from "/assets/Team/perusahaan 3.jpg";
import foto4 from "/assets/Team/perusahaan 4.jpg";
import foto5 from "/assets/Team/perusahaan 14.jpg";

export default function About() {
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

          {/* Foto Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={logo}
              alt="Wening Karsa"
              className="col-span-2 w-full h-40 object-contain bg-wk-cream rounded-lg p-4 shadow"
            />
            <img
              src={foto1}
              alt="Pelatihan 1"
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <img
              src={foto5}
              alt="Pelatihan 2"
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <img
              src={foto3}
              alt="Pelatihan 3"
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <img
              src={foto4}
              alt="Pelatihan 4"
              className="w-full h-32 object-cover rounded-lg shadow"
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
          <div className="flex justify-center">
            <img
              src={foto2}
              alt="Pelatihan Semangat Belajar"
              className="w-full md:w-96 h-64 object-cover rounded-xl shadow"
            />
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
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Visual Filosofi"
              className="w-72 object-contain drop-shadow-lg"
            />
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
    </section>
  );
}
