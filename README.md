# SkillBridge — Bridging Academics & Industry Pulse

**Tagline**: Empowering students to transform academic potential into industry-ready leadership through AI-driven gap analysis and real-world project validation.

---

## 📋 Problem Statement
The current educational ecosystem often leaves a fragmented "talent gap" between academic learning and actual industry requirements. Students lack visibility into the specific skill clusters demanded by top organizations, while companies struggle to find candidates with validated, hands-on experience in real-world scenarios. **SkillBridge** solves this by providing a unified ecosystem that maps student competencies to live market demands, offers personalized AI-curated learning paths, and validates talent through industry-driven project marketplaces.

---

## ✨ Features
| Feature | Description |
| :--- | :--- |
| **AI Resume Pulse** | Analyzes uploaded resumes to extract deep-tech skills and identify industry-standard gaps. |
| **Smart Job Matching** | Heuristic algorithm that matches user skills to roles based on requirement weightings and proximity. |
| **Industry Pulse Widget** | Real-time tracker for surging and trending skills in the current job market. |
| **Project Marketplace** | Scalable platform for students to enroll in and complete technical tasks defined by industry partners. |
| **Unified Dashboard** | Centralized HUD showing career readiness scores, skill points, and active roadmap progress. |
| **Recruiter Command Center** | B2B portal for companies to filter candidates and shortlist talent based on validated project performance. |
| **Mentorship Hub** | Functional booking system for 1-on-1 sessions with verified industry experts. |

---

## 🛠️ Tech Stack
### **Frontend**
- **Core**: React.js (Vite), JavaScript (ES6+).
- **State Management**: Zustand (with Persist/LocalStorage sync).
- **Styling**: Vanilla CSS (Premium "Pulse" Design System with Glassmorphism).
- **Routing**: React Router DOM (with Protected Route wrappers).
- **API Client**: Axios (configured for dynamic environment switching).

### **Backend**
- **Server**: Node.js, Express.js.
- **Intelligence Layer**: Heuristic Match & Gap Analysis Engine.
- **DevOps**: Integrated Static Serving for Unified Production Deployment.

---

## 📂 Project Structure
```bash
c:\Users\srira\Documents\hackthon\skillbridge\
├── backend/                   # 🚀 Node.js/Express Server Environment
│   ├── data/                  # Mocked industry job & requirement vectors
│   ├── routes/                # Express API endpoint definitions
│   ├── services/              # AI Matching & Heuristic Gap algorithms
│   └── server.js              # Entry point: Serves API & Unified Production Build
├── src/                       # ⚛️ React.js Frontend Environment
│   ├── components/            # Reusable UI widgets (IndustryPulse, Navbar, Sidebar)
│   ├── Pages/                 # Functional Application Modules (Dashboard, Resume, etc.)
│   ├── services/              # Axios API configurations
│   ├── store/                 # Global Zustand state management
│   ├── routes/                # Auth-aware route protection logic
│   ├── index.css              # Global Premium Design System
│   └── App.jsx                # Main Application Composition
├── package.json               # Unified scripts (dev, build, start)
└── README.md                  # Comprehensive platform documentation
```

---

## 🚀 Installation & Setup
1. **Clone the Project**:
   ```bash
   git clone https://github.com/sri143ff/origin_hacks.git
   cd skillbridge
   ```
2. **Install Dependencies**:
   ```bash
   # Root (Vite/React)
   npm install
   # Backend (Express)
   cd backend && npm install && cd ..
   ```
3. **Build the Production Bundle**:
   ```bash
   npm run build
   ```
4. **Start the Unified Server**:
   ```bash
   npm start
   ```
   *The platform is now live at http://localhost:5000*

---

## ⚙️ How It Works
1. **Talent Profile Injection**: User logs in and uploads their resume or pastes content into the **AI Resume Analyzer**.
2. **Semantic Gap Analysis**: The system extracts skill vectors and compares them against industry role requirements using our **Heuristic Requirement Logic**.
3. **Guidance Generation**: The AI identifies missing clusters and injects **Recommended Actions** into the user's **Learning Path**.
4. **Validation Loop**: Users enroll in **Marketplace Projects**. Completing tasks updates their **Career Readiness Score** and **Skill Points** in real-time.
5. **Direct Matching**: The **Job Board** uses the unified skill profile to present a ranked list of opportunities with percentage-based match transparency.

---

## 📈 Scalability
1. **Concurrency**: Built on a non-blocking Node.js architecture, capable of handling high concurrent user sessions for talent discovery.
2. **Modular State**: Used Zustand for localized state management, preventing the re-render bottlenecks typically found in large-scale Redux implementations.
3. **Storage Strategy**: Implemented LocalStorage sync for sub-second state persistence, reducing initial database query overhead during demo/prototype phases.

---

## 🛠️ Feasibility
SkillBridge is designed for immediate production deployment. By using a **Unified Server Architecture**, we significantly reduce infrastructure costs by serving both the API and the SPA from a single instance. The reliance on modern standard tools (React/Node) ensures a vast talent pool for future maintenance and rapid feature expansion.

---

## 💡 Novelty
Unlike traditional job boards (which are purely utilitarian) or learning platforms (which are fragmented), SkillBridge creates a **Synchronous Transition Engine**. Our novelty lies in the **Real-time Skill-to-Job Proximity Pulse**, ensuring that every learning module a student completes has a direct, measurable impact on their job match percentage within the same portal.

---

## 🔍 Feature Depth
- **Heuristic matching**: Goes beyond keywords by assigning weights to specific role requirements (e.g., "System Design" vs "Basics").
- **State Persistence**: Handles session refreshes gracefully by syncing the global Zustand store with LocalStorage.
- **B2B Analytics**: The Recruiter Hub provides a readiness-density view of candidates, not just a list of resumes.

---

## ⚖️ Ethical Use & Disclaimer
SkillBridge uses simulated AI analysis for demonstration purposes. Any data uploaded (resumes) is stored locally on the client's machine and is not shared with third parties. Profiles are anonymized in the recruiter hub until a mutual match is confirmed.

---

## 📜 License
This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## ✍️ Author
**Sriram S.**
- Email: srira@example.com
- GitHub: [sri143ff](https://github.com/sri143ff)
