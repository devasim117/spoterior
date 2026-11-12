import Reveal from "@/components/common/Reveal";
import { stats } from "@/lib/siteContent";

/** Server Component — the key figures are server-rendered. */
const Stats = () => {
  return (
    <section className="section section--dark stats-section">
      <div className="stats-glow" aria-hidden="true" />
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Reveal className="stat" delay={index * 80} key={stat.label}>
                <span className="stat-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <strong className="stat-value">{stat.value}</strong>
                <span className="stat-label">{stat.label}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
