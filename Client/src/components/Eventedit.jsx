import { useState } from 'react';
import Edit from '../components/Edit';
import Banner from '../components/Banner';
import Ticketing from '../components/Tickets';
import Review from '../components/Review';
import './Eventedit.css';
import Nav from './Nav';

const Eventedit = () => {
  const [changeMode, setChangeMode] = useState('edit');

  return (
    <>
    <Nav/>
    <div className="eventedit-container">
      <section className="progress-section">
        <div className="progress-bar">
          {['edit', 'banner', 'ticketing', 'review'].map(mode => (
            <div key={mode} className="progress-step" onClick={() => setChangeMode(mode)}>
              <div className={`progress-line ${changeMode === mode ? 'active' : ''}`}></div>
              <div className={`progress-circle ${changeMode === mode ? 'active' : ''}`}></div>
              <div className="progress-label">{mode.charAt(0).toUpperCase() + mode.slice(1)}</div>
            </div>
          ))}
        </div>
      </section>

      {changeMode === 'edit' && <Edit />}
      {changeMode === 'banner' && <Banner />}
      {changeMode === 'ticketing' && <Ticketing />}
      {changeMode === 'review' && <Review />}
    </div>
    </>
  );
};

export default Eventedit;
