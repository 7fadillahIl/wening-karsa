import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Team() {
  const members = [
    { name: "Raffi", role: "CEO", img: "/assets/Our Team/team 1.jpg" },
    {
      name: "Adam",
      role: "Head of Training",
      img: "/assets/Our Team/team 2.jpg",
    },
    {
      name: "Megawati",
      role: "Business Consultant",
      img: "/assets/Our Team/team 3.jpg",
    },
  ];

  return (
    <section id="team" className="py-16 bg-wk-cream">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serifHeading mb-8">Our Team</h2>

        {/* Mobile: Swiper, Desktop: Grid */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {members.map((m, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                  />
                  <h3 className="font-bold">{m.name}</h3>
                  <p className="text-sm text-gray-600">{m.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {members.map((m, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="font-bold">{m.name}</h3>
              <p className="text-sm text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
