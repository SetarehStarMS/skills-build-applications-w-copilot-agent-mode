import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <>
      <h1>OctoFit Tracker</h1>
      <nav>
        <ul>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate replace to="/activities" />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </>
  );
}

export default App;
