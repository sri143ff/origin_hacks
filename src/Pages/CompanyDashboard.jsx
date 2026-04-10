import MainLayout from "../components/layout/MainLayout";
import useStore from "../store/useStore";

export default function CompanyDashboard() {
  const { shortlistedTalent, shortlistTalent } = useStore();

  const talents = [
    { name: "Alex Chen", role: "Fullstack Developer", readiness: 95, skills: ["React", "Express", "AWS"], status: "Open for Gigs" },
    { name: "Sarah Miller", role: "Backend Engineer", readiness: 88, skills: ["Node.js", "Redis", "Kafka"], status: "In Training" },
    { name: "David Kumar", role: "Frontend Developer", readiness: 82, skills: ["Vue.js", "Tailwind", "Figma"], status: "Hired" },
  ];

  const handleShortlist = (talent) => {
    shortlistTalent(talent);
    alert(`${talent.name} added to your recruitment pipeline.`);
  };

  return (
    <MainLayout>
      <div className="reveal">
        <header style={{ marginBottom: 'var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '2rem' }}>Talent <span style={{ color: 'var(--secondary)' }}>Command Center</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>Advanced filtering for high-readiness candidates with validated academic & project backgrounds.</p>
          </div>
          <div className="glass" style={{ padding: '8px 16px', fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: '600' }}>
            Pipeline: {shortlistedTalent.length} candidates
          </div>
        </header>

        {/* Talent Discovery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-lg)' }}>
          {talents.map((talent, i) => {
            const isShortlisted = shortlistedTalent.some(t => t.name === talent.name);
            return (
              <div key={i} className="glass" style={{ padding: 'var(--space-lg)', opacity: isShortlisted ? 0.8 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 'var(--space-md)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' }}>
                    👤
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem' }}>{talent.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{talent.role}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-md)', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Carrier Readiness</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800', color: talent.readiness > 90 ? 'var(--accent)' : 'var(--text-main)' }}>{talent.readiness}%</div>
                </div>

                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden', marginBottom: 'var(--space-lg)' }}>
                  <div style={{ height: '100%', width: `${talent.readiness}%`, background: talent.readiness > 90 ? 'var(--accent)' : 'var(--primary)' }}></div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'var(--space-lg)' }}>
                  {talent.skills.map((skill, si) => (
                    <span key={si} style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', border: '1px solid var(--glass-border)' }}>{skill}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <button 
                    onClick={() => alert(`Fetching full behavioral and technical assessment report for ${talent.name}...`)}
                    className="btn-secondary" 
                    style={{ flex: 1, padding: '10px' }}
                  >
                    View Report
                  </button>
                  <button 
                    onClick={() => handleShortlist(talent)} 
                    className={isShortlisted ? "btn-secondary" : "btn-primary"} 
                    disabled={isShortlisted}
                    style={{ flex: 1, padding: '10px' }}
                  >
                    {isShortlisted ? '✓ Shortlisted' : 'Shortlist'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Analytics Section */}
        <section style={{ marginTop: 'var(--space-xl)' }}>
          <h2 style={{ marginBottom: 'var(--space-md)' }}>Platform Hiring Stats</h2>
          <div className="glass" style={{ padding: 'var(--space-lg)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-lg)' }}>
            {[
              { label: 'Verified Students', value: '45,240' },
              { label: 'Active Projects', value: '1,200' },
              { label: 'Top Match Role', value: 'Fullstack' },
              { label: 'Success Rate', value: '92%' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{stat.label}</div>
                <div style={{ fontSize: '2rem', fontWeight: '800' }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
