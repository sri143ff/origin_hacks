import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Learning Path", path: "/learning", icon: "📚" },
    { name: "Resume AI", path: "/resume", icon: "📄" },
    { name: "Projects", path: "/projects", icon: "🛠️" },
    { name: "Mentorship", path: "/mentorship", icon: "🤝" },
    { name: "Job Board", path: "/jobs", icon: "💼" },
    { name: "Company Lab", path: "/company", icon: "🏢" },
    { name: "Profile", path: "/profile", icon: "👤" },
  ];

  return (
    <aside className="glass" style={{ width: '260px', borderRadius: '0', borderRight: '1px solid var(--glass-border)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: 'var(--space-md) 0 var(--space-xl)', fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        SkillBridge
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '500',
              transition: 'var(--transition-fast)',
              color: location.pathname === item.path ? 'var(--text-main)' : 'var(--text-muted)',
              background: location.pathname === item.path ? 'var(--bg-card-hover)' : 'transparent',
              border: location.pathname === item.path ? '1px solid var(--glass-border)' : '1px solid transparent',
            }}
          >
            <span>{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', padding: 'var(--space-md)', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Pro Plan</div>
        <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Activate Features</div>
        <div style={{ height: '4px', background: 'var(--primary)', width: '60%', borderRadius: '2px', marginTop: '8px' }}></div>
      </div>
    </aside>
  );
}