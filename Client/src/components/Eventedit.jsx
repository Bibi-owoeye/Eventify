import { useState } from 'react';
import Edit from '../Components/Edit';
import Banner from '../Components/Banner';
import Ticketing from '../Components/Tickets';
import Review from '../Components/Review';
import './Eventedit.css';

const Eventedit = () => {
  const [changeMode, setChangeMode] = useState('edit');

  return (
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
  );
};

export default Eventedit;
