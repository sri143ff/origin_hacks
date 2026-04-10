import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function Signup() {
  const navigate = useNavigate();
  const signup = useAuthStore((state) => state.signup);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    signup(name, email, password);
    navigate("/dashboard");
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
      <div className="mesh-bg"></div>
      
      <Link
        to="/"
        style={{ position: 'absolute', top: 'var(--space-md)', left: 'var(--space-md)', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10 }}
      >
        ← Back to Home
      </Link>

      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="glass reveal" style={{ padding: 'var(--space-xl)', width: '100%', maxWidth: '500px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Join <span style={{ color: 'var(--secondary)' }}>SkillBridge</span></h1>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>Start your journey to industry leadership today.</p>
          </div>

          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '14px', borderRadius: '12px', color: 'var(--text-main)', outline: 'none', transition: 'var(--transition-fast)' }}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '14px', borderRadius: '12px', color: 'var(--text-main)', outline: 'none', transition: 'var(--transition-fast)' }}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Password</label>
              <input
                type="password"
                placeholder="Minimum 8 characters"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '14px', borderRadius: '12px', color: 'var(--text-main)', outline: 'none', transition: 'var(--transition-fast)' }}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
              <input type="checkbox" required style={{ width: '16px', height: '16px' }} />
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                I agree to the <a href="#" style={{ color: 'var(--secondary)', textDecoration: 'none' }}>Terms</a> and <a href="#" style={{ color: 'var(--secondary)', textDecoration: 'none' }}>Privacy Policy</a>
              </p>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: 'var(--space-sm)', padding: '14px', background: 'linear-gradient(135deg, var(--secondary), #d946ef)' }}>
              Create Account
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: 'var(--secondary)', fontWeight: '600', textDecoration: 'none' }}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}