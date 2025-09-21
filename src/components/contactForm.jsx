import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "6285974733004";
    const text = `Halo, saya ${name} (${email}).%0A%0A${message}`;
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-wk-olive/10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-serifHeading text-wk-green mb-6">
          Hubungi Kami
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 bg-white p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            placeholder="Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded px-4 py-2"
          />
          <textarea
            placeholder="Pesan Anda"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border rounded px-4 py-2"
            rows="4"
          />
          <button
            type="submit"
            className="bg-wk-green text-white py-2 rounded hover:bg-wk-olive transition"
          >
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
