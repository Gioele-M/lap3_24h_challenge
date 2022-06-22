import './App.css';

import { Routes, Route } from 'react-router-dom'

import { Header, Footer } from './layout'
import { Home, About, RepoPage } from './pages'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/repo" element={<RepoPage />} />
      </Routes>

    </div>
  );
}

export default App;
