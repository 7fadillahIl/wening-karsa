export default function Clients() {
  const clients = [
    {
      name: "Google",
      colors: [
        "#EA4335",
        "#FBBC05",
        "#34A853",
        "#4285F4",
        "#FBBC05",
        "#EA4335",
      ],
    },
    {
      name: "Apple",
      colors: ["#A2AAAD", "#A2AAAD", "#A2AAAD", "#A2AAAD", "#A2AAAD"],
    },
    { name: "Nike", colors: ["#111111", "#A2AAAD", "#111111", "#A2AAAD"] },
    {
      name: "Samsung",
      colors: [
        "#1428A0",
        "#ADD8E6",
        "#005A9C",
        "#1428A0",
        "#ADD8E6",
        "#005A9C",
        "#1428A0",
      ],
    },
    {
      name: "Honda",
      colors: ["#ff0000", "#ff0000", "#ff0000", "#ff0000", "#ff0000"],
    },
    {
      name: "Persib",
      colors: [
        "#1428A0",
        "#34A853",
        "#1428A0",
        "#FFFF00",
        "#34A853",
        "#1428A0",
      ],
    },
    {
      name: "Indomie",
      colors: [
        "#ff0000",
        "#1428A0",
        "#34A853",
        "#FFFF00",
        "#34A853",
        "#1428A0",
        "#ff0000",
      ],
    },
  ];

  // Duplicate array untuk looping seamless
  const loopClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-serifHeading mb-12 text-center">
          Our Clients
        </h2>

        <div className="flex gap-12 sm:gap-24 whitespace-nowrap animate-slide">
          {loopClients.map((client, i) => (
            <span
              key={i}
              className="inline-flex text-4xl sm:text-6xl font-extrabold cursor-pointer transition-transform duration-300 transform hover:scale-110"
              onMouseEnter={(e) => {
                const spans = e.currentTarget.querySelectorAll("span");
                spans.forEach(
                  (s, idx) => (s.style.color = client.colors[idx] || "#000")
                );
              }}
              onMouseLeave={(e) => {
                const spans = e.currentTarget.querySelectorAll("span");
                spans.forEach((s) => (s.style.color = "#000"));
              }}
            >
              {client.name.split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          display: inline-flex;
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
