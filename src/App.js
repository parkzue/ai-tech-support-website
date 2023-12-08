import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Page_lpe6lpe8 from './pages/Page_lpe6lpe8';
import Page_lpe6flpe8f from './pages/Page_lpe6flpe8f';
import Page_combigenius from './pages/Page_combigenius';
import NavigationBar from './components/NavigationBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lpe6lpe8" element={<Page_lpe6lpe8 />} />
          <Route path="/lpe6flpe8f" element={<Page_lpe6flpe8f />} />
          <Route path="/combigenius" element={<Page_combigenius />} />
        </Routes>
      </div>
    </Router>

  );

};

export default App;