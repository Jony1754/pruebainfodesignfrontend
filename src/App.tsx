import './App.css';
import Layout from './components/Layout';
import Dashboard from './views/Dashboard';
import HistoricalByClient from './views/HistoricalByClient';
import HistoricalByTramos from './views/HistoricalByTramos';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TramosClient from './views/TramosClient';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/historical/tramos' element={<HistoricalByTramos />} />
          <Route path='/historical/cliente' element={<HistoricalByClient />} />
          <Route path='/tramos-cliente' element={<TramosClient />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
