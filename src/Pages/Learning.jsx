import MainLayout from "../components/layout/MainLayout";
import useStore from "../store/useStore";

export default function Learning() {
  const { completedModules, completeModule, resumeAnalysis } = useStore();

  const learningPaths = [
    {
      id: "path-1",
      skill: "System Design",
      priority: "High",
      progress: 30,
      resources: [
        { id: "res-1", title: "Microservices Architecture", type: "Video", duration: "45m" },
        { id: "res-2", title: "Database Sharding Deep Dive", type: "Article", duration: "12m" },
        { id: "res-3", title: "Scalability Patterns", type: "Quiz", duration: "10m" }
      ],
      color: 'var(--primary)'
    },
    {
      id: "path-2",
      skill: "TypeScript",
      priority: "Medium",
      progress: 65,
      resources: [
        { id: "res-4", title: "Advanced Types & Generics", type: "Hands-on", duration: "2h" },
        { id: "res-5", title: "TS Configuration for Production", type: "Article", duration: "15m" }
      ],
      color: 'var(--secondary)'
    }
  ];

  const handleComplete = (moduleId) => {
    completeModule(moduleId);
  };

  return (
    <MainLayout>
      <div className="reveal">
        <header style={{ marginBottom: 'var(--space-lg)' }}>
          <h1 style={{ fontSize: '2rem' }}>Personalized <span style={{ color: 'var(--primary)' }}>Learning Path</span></h1>
          <p style={{ color: 'var(--text-muted)' }}>AI-curated modules designed to bridge your industry readiness gaps.</p>
        </header>

        {resumeAnalysis && (
          <section className="glass reveal" style={{ padding: 'var(--space-lg)', marginBottom: 'var(--space-lg)', border: '1px solid var(--accent-glow)', background: 'rgba(52, 211, 153, 0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-md)' }}>
              <span style={{ fontSize: '1.5rem' }}>🧠</span>
              <h3 style={{ margin: 0 }}>AI Guidance Based on Your Resume</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-md)' }}>
              {resumeAnalysis.developmentPath.map((path, i) => (
                <div key={i} className="glass" style={{ padding: '12px', fontSize: '0.85rem', color: 'var(--text-main)', border: '1px solid var(--glass-border)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: '800', marginRight: '8px' }}>#{i+1}</span>
                  {path}
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-lg)' }}>
          {learningPaths.map((path, i) => {
            const pathCompletedCount = path.resources.filter(r => completedModules.includes(r.id)).length;
            const pathProgress = Math.round((pathCompletedCount / path.resources.length) * 100);

            return (
              <div key={i} className="glass" style={{ padding: 'var(--space-lg)', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-md)' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: path.priority === 'High' ? 'var(--secondary)' : 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>{path.priority} Priority</div>
                    <h3 style={{ fontSize: '1.5rem' }}>{path.skill}</h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '800' }}>{pathProgress}%</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Progress</div>
                  </div>
                </div>

                <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden', marginBottom: 'var(--space-lg)' }}>
                  <div style={{ height: '100%', width: `${pathProgress}%`, background: path.color, boxShadow: `0 0 10px ${path.color}66`, transition: 'width 0.5s ease' }}></div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '8px' }}>Curated Resource Modules</div>
                  {path.resources.map((res, idx) => {
                    const isDone = completedModules.includes(res.id);
                    return (
                      <div 
                        key={idx} 
                        onClick={() => handleComplete(res.id)}
                        className="glass" 
                        style={{ padding: '12px', background: isDone ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'var(--transition-fast)', cursor: 'pointer', border: isDone ? '1px solid var(--accent)' : '1px solid transparent' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ fontSize: '1.2rem', opacity: isDone ? 1 : 0.6 }}>{isDone ? '✅' : (res.type === 'Video' ? '📺' : '📄')}</span>
                          <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '500', textDecoration: isDone ? 'line-through' : 'none', color: isDone ? 'var(--text-dim)' : 'var(--text-main)' }}>{res.title}</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{res.type} • {res.duration}</div>
                          </div>
                        </div>
                        <span style={{ color: isDone ? 'var(--accent)' : 'var(--primary)', fontSize: '0.8rem' }}>{isDone ? 'Finished' : 'Start →'}</span>
                      </div>
                    );
                  })}
                </div>

                <button 
                  onClick={() => alert('Launching AI Context Search for ' + path.skill + '... Parsing industry whitepapers and tutorials.')}
                  className="btn-secondary" 
                  style={{ width: '100%', marginTop: 'var(--space-lg)', borderStyle: 'dashed' }}
                >
                  + Search Extra Resources
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}