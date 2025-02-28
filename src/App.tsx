import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlaceholderPage from './pages/PlaceholderPage';
import NotFoundPage from './pages/NotFoundPage';
import TemporalGraphExplorer from './pages/TemporalGraphExplorer';
import CytoscapeGraphExplorer from './pages/CytoscapeGraphExplorer';
import CytoscapeGraphViz1 from './pages/CytoscapeGraphViz1';
import CytoscapeGraphViz2 from './pages/CytoscapeGraphViz2';
import CytoscapeGraphViz3 from './pages/CytoscapeGraphViz3';
import LifeSciencesViz1 from './pages/LifeSciencesGraphViz1';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        // change to the route of a more useful page
        <Route path="/" element={<CytoscapeGraphViz3 />} />
        <Route path="/CytoscapeGraphExplorer" element={<CytoscapeGraphExplorer />} />
        <Route path="/TemporalGraphExplorer" element={<TemporalGraphExplorer />} />
        <Route path="/CytoscapeGraphViz1" element={<CytoscapeGraphViz1 />} />
        <Route path="/CytoscapeGraphViz2" element={<CytoscapeGraphViz2 />} />
        <Route path="/CytoscapeGraphViz3" element={<CytoscapeGraphViz3 />} />
        <Route path="/LifeSciencesViz1" element={<LifeSciencesViz1 />} />
        <Route path="/Placeholder" element={<PlaceholderPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
