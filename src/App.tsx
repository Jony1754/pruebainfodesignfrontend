import './App.css';
import Layout from './components/Layout';
import Dashboard from './views/Dashboard';
import HistoricalByClient from './views/HistoricalByClient';
import HistoricalByTramos from './views/HistoricalByTramos';
import TopTramosClient from './views/TopTramosClient';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/historical/tramos' element={<HistoricalByTramos />} />
          <Route path='/historical/cliente' element={<HistoricalByClient />} />
          <Route path='/top-tramos-cliente' element={<TopTramosClient />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
