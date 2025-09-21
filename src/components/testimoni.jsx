import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Testimonials() {
  const feedbacks = [
    {
      name: "Rina Putri",
      role: "Manager HR",
      text: "Pelatihan Wening Karsa sangat membantu meningkatkan kemampuan tim kami.",
    },
    {
      name: "Ahmad Fauzi",
      role: "Supervisor",
      text: "Materinya relevan dan aplikatif, trainer sangat profesional.",
    },
    {
      name: "Dewi Lestari",
      role: "Entrepreneur",
      text: "Program interaktif dan mendukung pengembangan bisnis saya.",
    },
  ];

  return (
    <section id="testimoni" className="py-16 bg-wk-olive text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serifHeading mb-8">Testimoni</h2>

        {/* Mobile: Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {feedbacks.map((f, i) => (
              <SwiperSlide key={i}>
                <div className="bg-wk-green p-6 rounded-lg shadow">
                  <p className="italic mb-4">“{f.text}”</p>
                  <h3 className="font-bold">{f.name}</h3>
                  <p className="text-sm">{f.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-3">
          {feedbacks.map((f, i) => (
            <div
              key={i}
              className="bg-wk-green p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="italic mb-4">“{f.text}”</p>
              <h3 className="font-bold">{f.name}</h3>
              <p className="text-sm">{f.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
