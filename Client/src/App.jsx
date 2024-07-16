import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner';
import Eventedit from './Components/Eventedit';
import Tickets from './Components/Tickets';
import './App.css';
import Review from './Components/Review';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/event/home' element={<Eventedit />} />
        <Route path='/event/banner' element={<Banner />} />
        <Route path='/event/tickets' element={<Tickets />} />
        <Route path='/event/review' element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
