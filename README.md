# 🔧 **Team Collaboration Dashboard**

---

### 💡 Description:

An app where users can manage teams, projects, tasks, and statuses. Similar to Trello/Asana-lite.

### 🧱 Project Structure

```
/src
│
├── /assets               # Static assets (icons, images)
├── /components           # Reusable UI components (Button, Modal, Card, etc.)
├── /features             # Feature-specific components
│   ├── /auth             # Auth UI & logic
│   ├── /dashboard        # Main app shell
│   ├── /teams            # Team management
│   ├── /projects         # Project and board views
│   ├── /tasks            # Task cards and lists
│
├── /contexts             # Context providers (Auth, Theme, AppState)
├── /hooks                # Custom hooks (useUser, useTeams, etc.)
├── /reducers             # useReducer logic (appReducer, taskReducer)
├── /pages                # Page-level components (Login, Home, Settings)
├── /routes               # App route definitions
├── /services             # API logic, fetch helpers
├── /utils                # Utility functions (formatters, validators)
├── /boundaries           # Error boundary components
├── /data                 # Mock data / seeded JSON
├── App.jsx
└── main.jsx              # App bootstrap
```

### ⚙️ Tech Stack Recommendation

| Purpose | Tech / Library |
| --- | --- |
| Core Framework | React 18+ |
| Styling | Tailwind CSS + daisyUI |
| Routing | React Router DOM |
| State Management | Context API + `useReducer` |
| Async Fetch | Native Fetch API / `axios` |
| Component Lazy Load | `React.lazy()` + `Suspense` |
| Error Handling | Custom Error Boundaries |
| Drag & Drop | `@dnd-kit/core` or `react-dnd` |
| Dev Environment | Vite or Create React App |
| Testing *(opt)* | Vitest + React Testing Lib |