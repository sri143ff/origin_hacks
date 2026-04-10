import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import useStore from "../store/useStore";
import useAuthStore from "../store/authStore";

export default function Profile() {
  const user = useAuthStore((state) => state.user);
  const updateProfile = useAuthStore((state) => state.updateProfile);
  
  const [skillInput, setSkillInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || "");
  
  const skills = useStore((state) => state.skills);
  const setSkills = useStore((state) => state.setSkills);

  const handleSaveSkills = () => {
    if (!skillInput.trim()) return;
    const newSkills = skillInput.split(",").map((s) => s.trim()).filter(Boolean);
    const updatedSkills = [...new Set([...skills, ...newSkills])];
    setSkills(updatedSkills);
    setSkillInput("");
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const handleUpdateName = () => {
    updateProfile({ name: editName });
    setIsEditing(false);
    alert("Profile identity updated successfully.");
  };

  return (
    <MainLayout>
      <div className="reveal">
        <header style={{ marginBottom: 'var(--space-lg)' }}>
          <h1 style={{ fontSize: '2rem' }}>Member <span style={{ color: 'var(--primary)' }}>Profile Hub</span></h1>
          <p style={{ color: 'var(--text-muted)' }}>Manage your professional identity and industry-validated credentials.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-lg)' }}>
          {/* Identity Section */}
          <section className="glass" style={{ padding: 'var(--space-lg)', height: 'fit-content', textAlign: 'center' }}>
            <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto var(--space-md)' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '30px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem', border: '4px solid var(--glass-border)' }}>
                👤
              </div>
              <div style={{ position: 'absolute', bottom: '-5px', right: '-5px', width: '32px', height: '32px', background: 'var(--accent)', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', border: '3px solid var(--bg-dark)' }}>
                ⭐
              </div>
            </div>

            {isEditing ? (
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <input 
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--primary)', padding: '10px', borderRadius: '8px', color: 'var(--text-main)', textAlign: 'center', marginBottom: '8px', outline: 'none' }}
                />
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={handleUpdateName} className="btn-primary" style={{ flex: 1, padding: '8px' }}>Save</button>
                  <button onClick={() => setIsEditing(false)} className="btn-secondary" style={{ flex: 1, padding: '8px' }}>Cancel</button>
                </div>
              </div>
            ) : (
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{user?.name || 'Explorer'}</h2>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Verified Professional</p>
              </div>
            )}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--glass-border)', paddingTop: 'var(--space-md)' }}>
              {!isEditing && (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="btn-secondary" 
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  Edit Profile Name
                </button>
              )}
              <button 
                onClick={() => { if(confirm('Are you absolutely sure? This will remove all your progress and data.')) alert('Account scheduled for deletion.'); }}
                className="btn-secondary" 
                style={{ width: '100%', fontSize: '0.9rem', color: '#ef4444' }}
              >
                Delete Data Record
              </button>
            </div>
          </section>

          {/* Skills Management */}
          <section className="glass" style={{ padding: 'var(--space-lg)' }}>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Validated Skills Management</h3>
            
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', display: 'block' }}>Expand your skill set (comma separated)</label>
              <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                <input
                  value={skillInput}
                  placeholder="e.g. AWS, GraphQL, Flutter..."
                  style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '12px', color: 'var(--text-main)', outline: 'none' }}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSaveSkills()}
                />
                <button onClick={handleSaveSkills} className="btn-primary" style={{ padding: '10px 24px' }}>Update</button>
              </div>
            </div>

            <div style={{ minHeight: '200px' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: 'var(--space-md)' }}>Endorsed Competencies</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills.length > 0 ? skills.map((skill, i) => (
                  <div
                    key={i}
                    style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid var(--primary)', color: 'var(--text-main)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    {skill}
                    <span 
                      onClick={() => removeSkill(skill)}
                      style={{ cursor: 'pointer', opacity: 0.6, fontSize: '0.7rem', fontWeight: 'bold' }}
                    >✕</span>
                  </div>
                )) : (
                  <div style={{ padding: 'var(--space-lg)', textAlign: 'center', width: '100%', color: 'var(--text-dim)', border: '1px dashed var(--glass-border)', borderRadius: '16px' }}>
                    No competencies identified yet.
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}