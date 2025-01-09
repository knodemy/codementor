import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AssignmentView from './pages/AssignmentView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/assignments/:classId"
            element={
              <>
                <Navbar />
                <AssignmentView />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;