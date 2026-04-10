import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 var(--space-xl)', borderBottom: '1px solid var(--glass-border)', background: 'rgba(10, 11, 16, 0.5)', backdropFilter: 'blur(10px)', sticky: 'top', zIndex: 100 }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', flex: 1 }}>
        <div className="glass" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', flex: '0 1 400px' }}>
          <span>🔍</span>
          <input 
            type="text" 
            placeholder="Search skills, jobs, or mentors..." 
            onKeyPress={(e) => e.key === 'Enter' && alert('Global search result for: ' + e.target.value)}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', width: '100%', outline: 'none', fontSize: '0.9rem' }} 
          />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
        <div 
          onClick={() => alert('Notification Center: You have 3 new skill endorsements and 1 job interview request!')}
          style={{ position: 'relative', cursor: 'pointer' }}
        >
          <span style={{ fontSize: '1.2rem' }}>🔔</span>
          <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: 'var(--secondary)', borderRadius: '50%', boxShadow: '0 0 10px var(--secondary-glow)' }}></div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{user?.name || "Explorer"}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Student • Pro</div>
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem', cursor: 'pointer', border: '1px solid var(--glass-border)' }}>
            👤
          </div>
          <button
            onClick={handleLogout}
            className="btn-secondary"
            style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: '8px' }}
          >
            Logout
          </button>
        </div>
      </div>

    </header>
  );
}