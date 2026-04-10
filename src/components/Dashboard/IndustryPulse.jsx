export default function IndustryPulse() {
  const trends = [
    { skill: "Rust", demand: "+45%", status: "Surging" },
    { skill: "LangChain", demand: "+80%", status: "Hot" },
    { skill: "Web3/Solidity", demand: "-12%", status: "Cooling" },
    { skill: "React Server Components", demand: "+30%", status: "Trending" },
  ];

  return (
    <section className="glass" style={{ padding: 'var(--space-md)', marginTop: 'var(--space-lg)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
        <h4 style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase' }}>📡 Real-time Industry Pulse</h4>
        <span style={{ fontSize: '0.65rem', padding: '2px 6px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent)', borderRadius: '4px' }}>LIVE</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {trends.map((trend, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
            <span style={{ fontWeight: '500' }}>{trend.skill}</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ color: trend.demand.startsWith('+') ? 'var(--accent)' : 'var(--secondary)', fontWeight: '700' }}>{trend.demand}</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{trend.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
