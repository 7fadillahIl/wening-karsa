export default function ContactForm() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-serifHeading text-wk-green">Hubungi Kami</h2>
      <form className="mt-6 space-y-4 max-w-lg">
        <input
          type="text"
          placeholder="Nama"
          className="w-full border p-3 rounded-md"
        />
        <input
          type="email"
          placeholder="Email / WhatsApp"
          className="w-full border p-3 rounded-md"
        />
        <textarea
          placeholder="Pesan"
          rows={5}
          className="w-full border p-3 rounded-md"
        ></textarea>
        <button className="bg-wk-green text-white px-5 py-3 rounded-md">
          Kirim
        </button>
      </form>
    </section>
  );
}
