import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import useStore from "../store/useStore";

export default function Resume() {
  const setResumeAnalysis = useStore((state) => state.setResumeAnalysis);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [resumeText, setResumeText] = useState("");

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!resumeText.trim()) return;

    analyzeContent("Text Input");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setResumeText(`Processing file: ${file.name}...`);
    analyzeContent(file.name);
  };

  const analyzeContent = (source) => {
    setIsAnalyzing(true);
    // Simulate AI parsing of the content
    setTimeout(() => {
      const results = {
        extractedSkills: ["React", "TypeScript", "Node.js", "Docker", "DevOps"],
        missingSkills: ["Kubernetes", "Redis", "System Design Patterns"],
        jobReadiness: 75,
        recommendedJobs: [
          { title: "Senior Frontend Engineer", company: "Google", match: 88 },
          { title: "DevOps Specialist", company: "Microsoft", match: 60 }
        ],
        developmentPath: [
          "Focus on Kubernetes orchestration to complete your DevOps profile.",
          "Strengthen System Design fundamentals for Lead-level roles.",
          "Explore Redis for high-performance caching strategies."
        ]
      };
      setAnalysisResult(results);
      setResumeAnalysis(results);
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <MainLayout>
      <div className="reveal">
        <header style={{ marginBottom: 'var(--space-lg)' }}>
          <h1 style={{ fontSize: '2rem' }}>AI Resume <span style={{ color: 'var(--primary)' }}>Analyzer</span></h1>
          <p style={{ color: 'var(--text-muted)' }}>Upload or paste your resume for a deep-tech skill gap analysis.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }}>
          {/* Input Section */}
          <section className="glass" style={{ padding: 'var(--space-lg)' }}>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Paste Content or Upload</h3>
            <textarea
              style={{ width: '100%', height: '300px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: 'var(--space-md)', color: 'var(--text-main)', fontSamily: 'monospace', outline: 'none', resize: 'none', marginBottom: 'var(--space-md)' }}
              placeholder="Paste your professional summary, experience, and skills here..."
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
            ></textarea>
            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              <button onClick={handleAnalyze} className="btn-primary" style={{ flex: 1 }} disabled={isAnalyzing}>
                {isAnalyzing ? 'Analyzing...' : 'Analyze Text'}
              </button>
              
              <label className="btn-secondary" style={{ flex: 1, cursor: 'pointer', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Upload PDF
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} style={{ display: 'none' }} />
              </label>
            </div>
          </section>

          {/* Analysis View */}
          <section>
            {!analysisResult && !isAnalyzing && (
              <div className="glass" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-xl)', color: 'var(--text-dim)', borderStyle: 'dashed' }}>
                <span style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>📄</span>
                <p>Submit your resume to see the AI analysis result here.</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="glass" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-xl)' }}>
                <div className="loader" style={{ width: '50px', height: '50px', border: '5px solid var(--primary-glow)', borderTop: '5px solid var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                <p style={{ marginTop: 'var(--space-md)', color: 'var(--text-muted)' }}>Semantic Extraction in progress...</p>
                <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
              </div>
            )}

            {analysisResult && (
              <div className="reveal flex-col" style={{ display: 'flex', gap: 'var(--space-lg)' }}>
                <div className="glass" style={{ padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                    <h3 style={{ fontSize: '1.2rem' }}>Job Readiness Score</h3>
                    <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>{analysisResult.jobReadiness}%</div>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${analysisResult.jobReadiness}%`, background: 'var(--primary)', boxShadow: '0 0 15px var(--primary-glow)' }}></div>
                  </div>
                </div>

                <div className="glass" style={{ padding: 'var(--space-lg)' }}>
                  <h4 style={{ marginBottom: 'var(--space-sm)', fontSize: '0.9rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Identified Skill Gaps</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {analysisResult.missingSkills.map((s, i) => (
                      <span key={i} style={{ padding: '4px 12px', background: 'rgba(236, 72, 153, 0.1)', color: 'var(--secondary)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700' }}>{s}</span>
                    ))}
                  </div>
                </div>

                <div className="glass" style={{ padding: 'var(--space-lg)' }}>
                  <h4 style={{ marginBottom: 'var(--space-sm)', fontSize: '0.9rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Recommended Actions</h4>
                  <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {analysisResult.developmentPath.map((path, i) => <li key={i} style={{ marginBottom: '8px' }}>{path}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
