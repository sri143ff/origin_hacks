import MainLayout from "../components/layout/MainLayout";
import useStore from "../store/useStore";

export default function Projects() {
  const { activeProjects, enrollProject } = useStore();

  const projects = [
    { 
      id: 1, 
      title: "Scalable E-commerce API", 
      company: "TechNova", 
      skills: ["Node.js", "Redis", "MongoDB"], 
      difficulty: "Hard", 
      reward: "Interview Fast-track",
      image: "🛠️"
    },
    { 
      id: 2, 
      title: "SaaS Dashboard UI Kit", 
      company: "DesignFlow", 
      skills: ["React", "CSS Modules", "Figma"], 
      difficulty: "Medium", 
      reward: "Mentorship Session",
      image: "🎨"
    },
    { 
      id: 3, 
      title: "Real-time Chat App", 
      company: "Connectify", 
      skills: ["Socket.io", "Express", "React"], 
      difficulty: "Medium", 
      reward: "Paid Internship Hookup",
      image: "💬"
    },
  ];

  const handleEnroll = (project) => {
    enrollProject(project);
    alert(`Enrolled in ${project.title}! Check your dashboard for next steps.`);
  };

  return (
    <MainLayout>
      <div className="reveal">
        <header style={{ marginBottom: 'var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '2rem' }}>Real-World <span style={{ color: 'var(--primary)' }}>Project Marketplace</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>Validate your research by solving actual industry challenges.</p>
          </div>
          <div className="glass" style={{ padding: '8px 16px', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '600' }}>
            Active: {activeProjects.length}
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-lg)' }}>
          {projects.map((project) => {
            const isEnrolled = activeProjects.some(p => p.id === project.id);
            return (
              <div key={project.id} className="glass" style={{ padding: 'var(--space-lg)', transition: 'var(--transition-smooth)', opacity: isEnrolled ? 0.7 : 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>{project.image}</div>
                  <div style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', background: project.difficulty === 'Hard' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)', color: project.difficulty === 'Hard' ? '#ef4444' : '#10b981', border: `1px solid ${project.difficulty === 'Hard' ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)'}` }}>
                    {project.difficulty}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: 'var(--space-md)' }}>Partner: <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{project.company}</span></p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: 'var(--space-lg)' }}>
                  {project.skills.map((skill, i) => (
                    <span key={i} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid var(--glass-border)' }}>{skill}</span>
                  ))}
                </div>

                <div className="glass" style={{ padding: '12px', background: 'rgba(99, 102, 241, 0.05)', border: '1px dashed var(--primary)', borderRadius: '12px', marginBottom: 'var(--space-md)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase' }}>Validation Reward</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)' }}>{project.reward}</div>
                </div>

                <button 
                  onClick={() => handleEnroll(project)} 
                  className={isEnrolled ? "btn-secondary" : "btn-primary"} 
                  disabled={isEnrolled}
                  style={{ width: '100%' }}
                >
                  {isEnrolled ? '✓ Already Enrolled' : 'Start Performance Task'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}
