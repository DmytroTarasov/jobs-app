import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import JobBoard from './components/JobBoard';
import JobDetailed from './components/JobDetailed';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<JobBoard />} />
            <Route path='/:id' element={<JobDetailed />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
  )
};

export default App;
