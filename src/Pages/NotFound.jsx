import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)', color: 'var(--text-main)', textAlign: 'center', padding: 'var(--space-md)', overflow: 'hidden' }}>
      <div className="mesh-bg"></div>
      
      <div className="reveal">
        <h1 style={{ fontSize: 'clamp(5rem, 20vw, 10rem)', fontWeight: '800', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1', marginBottom: 'var(--space-md)' }}>
          404
        </h1>
        
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>
          Lost in the Talent Gap?
        </h2>
        
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto var(--space-lg)' }}>
          The page you are looking for has either been moved or doesn't exist. Let's get you back on track to your career goals.
        </p>

        <Link to="/" className="btn-primary">
          Return to Hub
        </Link>
      </div>

      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.1, zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '300px', height: '300px', background: 'var(--secondary)', filter: 'blur(100px)', opacity: 0.1, zIndex: -1 }}></div>
    </div>
  );
}