import './App.css';
import HomePage from './components/HomePage';
import LogActivityPage from './components/LogActivityPage';
import LogActivityCreatePage from './components/LogActivityCreate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActivityProvider from './components/ActivityContext';
import ProgessData from './components/ProgessData';

function App() {
  return (
    <ActivityProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LogActivity" element={<LogActivityPage />} />
          <Route path="/LogActivityCreate" element={<LogActivityCreatePage />} /> {/* Placeholder */}
          <Route path="/ProgressData" element={<ProgessData />} /> {/* Table page */}
        </Routes>
      </Router>
    </ActivityProvider>
  );
}

export default App;
