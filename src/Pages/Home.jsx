import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <div className="mesh-bg"></div>
      
      {/* Navigation - Simple & Elegant */}
      <nav className="container" style={{ padding: 'var(--space-md) 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          SkillBridge
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
          <Link to="/login" className="btn-secondary" style={{ padding: '8px 20px' }}>Login</Link>
          <Link to="/signup" className="btn-primary" style={{ padding: '8px 20px' }}>Join Now</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="reveal">
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            Bridging the Talent Gap
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', margin: 'var(--space-sm) 0', lineHeight: '1.1' }}>
            Transforming Learners into <br /> 
            <span style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Industry Leaders
            </span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--space-lg)' }}>
            Map your skills, bridge the gap with personalized learning paths, and land your dream role with hands-on project validation.
          </p>
          
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
            <Link to="/dashboard" className="btn-primary">Get Started</Link>
            <Link to="/jobs" className="btn-secondary">Explore Opportunities</Link>
          </div>
        </div>

        {/* Stats / Proof Points */}
        <div className="reveal delay-2" style={{ marginTop: 'var(--space-xl)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-lg)', width: '100%', maxWidth: '900px' }}>
          {[
            { label: 'Skill Checkpoints', val: '500+' },
            { label: 'Industry Partners', val: '50+' },
            { label: 'Student Placements', val: '10k+' }
          ].map((stat, i) => (
            <div key={i} className="glass" style={{ padding: 'var(--space-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>{stat.val}</div>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem', fontWeight: '500' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      <footer className="container" style={{ padding: 'var(--space-xl) 0 var(--space-lg)', borderTop: '1px solid var(--glass-border)', marginTop: 'var(--space-xl)', display: 'flex', justifyContent: 'space-between', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
        <div>© 2026 SkillBridge. Empowering the next generation.</div>
        <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
        </div>
      </footer>
    </div>
  );
}