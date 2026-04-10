import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter all fields");
      return;
    }
    login(email, password);
    navigate("/dashboard");
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyItems: 'center', background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
      <div className="mesh-bg"></div>
      
      <Link
        to="/"
        style={{ position: 'absolute', top: 'var(--space-md)', left: 'var(--space-md)', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10 }}
      >
        ← Back to Home
      </Link>

      <div className="container" style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
        <div className="glass reveal" style={{ padding: 'var(--space-xl)', width: '100%', maxWidth: '450px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Welcome <span style={{ color: 'var(--primary)' }}>Back</span></h1>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>Login to continue your career journey.</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '14px', borderRadius: '12px', color: 'var(--text-main)', outline: 'none', transition: 'var(--transition-fast)' }}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Password</label>
                <a href="#" style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'none' }}>Forgot password?</a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '14px', borderRadius: '12px', color: 'var(--text-main)', outline: 'none', transition: 'var(--transition-fast)' }}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: 'var(--space-sm)', padding: '14px' }}>
              Sign In
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>
              Create Account
            </Link>
          </div>

          <div style={{ marginTop: 'var(--space-lg)', borderTop: '1px solid var(--glass-border)', paddingTop: 'var(--space-md)', display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
            {['G', 'f', 'in'].map((social, i) => (
              <div key={i} style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'var(--transition-fast)' }}
                onMouseEnter={(e) => e.target.style.background = 'var(--bg-card-hover)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.02)'}
              >
                {social}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}