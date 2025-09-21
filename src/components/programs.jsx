import ProgramCard from "./programCard";
import PROGRAMS from "../data/PROGRAMS";

export default function Programs() {
  return (
    <section id="programs" className="py-16 bg-wk-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serifHeading text-center mb-10">
          Program Training Kami
        </h2>

        {PROGRAMS.map((cluster, i) => (
          <div key={i} className="mb-12">
            <h3 className="text-2xl font-serifHeading text-wk-green mb-6">
              {cluster.cluster}
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cluster.items.map((p, j) => (
                <ProgramCard
                  key={j}
                  slug={p.slug}
                  title={p.title}
                  summary={p.summary}
                  cluster={cluster.cluster}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
