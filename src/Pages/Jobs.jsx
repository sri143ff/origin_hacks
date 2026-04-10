import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import useStore from "../store/useStore";
import api from "../services/api";

export default function Jobs() {
  const { skills: userSkills, appliedJobs, applyForJob } = useStore();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.post("/jobs/match", { userSkills })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userSkills]);

  const handleApply = (job) => {
    applyForJob(job);
    alert(`Application sent to ${job.company} for ${job.title}! Track status in Dashboard.`);
  };

  return (
    <MainLayout>
      <div className="reveal">
        <header style={{ marginBottom: 'var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontSize: '2rem' }}>Smart <span style={{ color: 'var(--primary)' }}>Job Matches</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>AI-curated opportunities perfectly aligned with your validated profile.</p>
          </div>
          <div className="glass" style={{ padding: '8px 16px', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>
            {appliedJobs.length} Applications Active
          </div>
        </header>

        {loading ? (
          <div style={{ padding: 'var(--space-xl)', textAlign: 'center', color: 'var(--text-muted)' }}>
            <div className="reveal" style={{ fontSize: '2rem' }}>⚡</div>
            <p>Mapping your skills to industry roles...</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {jobs.map((job) => {
              const hasApplied = appliedJobs.some(aj => aj.title === job.title && aj.company === job.company);
              return (
                <div key={job.id} className="glass" style={{ padding: 'var(--space-md)', display: 'grid', gridTemplateColumns: '80px 1fr 200px', alignItems: 'center', gap: 'var(--space-lg)', borderLeft: job.match > 80 ? '4px solid var(--accent)' : '4px solid transparent' }}>
                  <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', border: '1px solid var(--glass-border)' }}>
                    🏢
                  </div>
                  
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                      <h3 style={{ fontSize: '1.2rem' }}>{job.title}</h3>
                      <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent)', borderRadius: '4px', fontWeight: '700' }}>{job.match}% MATCH</span>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>{job.company} • {job.location || 'Remote'}</div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {job.matched.map((skill, i) => (
                        <span key={i} style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>✓ {skill}</span>
                      ))}
                      {job.missing.map((skill, i) => (
                        <span key={i} style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>○ {skill}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <button 
                      onClick={() => handleApply(job)} 
                      className={hasApplied ? "btn-secondary" : "btn-primary"} 
                      disabled={hasApplied}
                      style={{ width: '100%' }}
                    >
                      {hasApplied ? '✓ Applied' : 'One-Click Apply'}
                    </button>
                    <div style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                      Industry-standard score: <b>{job.match}/100</b>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </MainLayout>
  );
}