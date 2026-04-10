import MainLayout from "../components/layout/MainLayout";
import useStore from "../store/useStore";

export default function Mentorship() {
  const { bookedMentors, bookMentor } = useStore();

  const mentors = [
    { id: 1, name: "Jessica Smith", role: "Sr. Engineer @ Uber", rating: 4.9, bio: "Specializing in distributed systems and backend scale.", sessions: 120, image: "👩‍💻" },
    { id: 2, name: "Robert Wang", role: "Product Designer @ Airbnb", rating: 4.8, bio: "Expert in UX research and high-fidelity prototyping.", sessions: 245, image: "👨‍🎨" },
    { id: 3, name: "Priya Sharma", role: "VP of Eng @ Google", rating: 5.0, bio: "Career growth, leadership, and system design expert.", sessions: 85, image: "👩‍💼" },
  ];

  const handleBook = (name) => {
    bookMentor(name);
    alert(`Session requested with ${name}! Check your email for meeting link.`);
  };

  return (
    <MainLayout>
      <div className="reveal">
        <header style={{ marginBottom: 'var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '2rem' }}>Expert <span style={{ color: 'var(--primary)' }}>Mentorship</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>Get 1-on-1 guidance from industry leaders who have conquered the gap.</p>
          </div>
          <div className="glass" style={{ padding: '8px 16px', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '600' }}>
            Booked: {bookedMentors.length}
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-lg)' }}>
          {mentors.map((mentor, i) => {
            const isBooked = bookedMentors.includes(mentor.name);
            return (
              <div key={i} className="glass" style={{ padding: 'var(--space-lg)', position: 'relative', opacity: isBooked ? 0.8 : 1 }}>
                <div style={{ position: 'absolute', top: 'var(--space-md)', right: 'var(--space-md)', fontSize: '0.9rem', color: '#fbbf24', fontWeight: '700' }}>⭐ {mentor.rating}</div>
                
                <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2.5rem', border: '1px solid var(--glass-border)' }}>
                    {mentor.image}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem' }}>{mentor.name}</h3>
                    <div style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>{mentor.role}</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>{mentor.sessions} Industry Sessions</div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: 'var(--space-lg)', lineHeight: '1.5' }}>{mentor.bio}</p>

                <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <button 
                    onClick={() => handleBook(mentor.name)} 
                    className={isBooked ? "btn-secondary" : "btn-primary"} 
                    disabled={isBooked}
                    style={{ flex: 2 }}
                  >
                    {isBooked ? '✓ Requested' : 'Book 1-on-1'}
                  </button>
                  <button 
                    onClick={() => alert('Full Expert Profile Loading... Verified Industry Record: ' + mentor.role)}
                    className="btn-secondary" 
                    style={{ flex: 1 }}
                  >
                    Profile
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="glass" style={{ marginTop: 'var(--space-xl)', padding: 'var(--space-lg)', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '8px' }}>Join the Mentorship Pulse</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)' }}>Verified industry leaders can apply to share expertise and guide students.</p>
          <button 
            onClick={() => alert('Application form for Mentors has been sent to your registered email.')}
            className="btn-secondary"
          >
            Apply as Mentor
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
