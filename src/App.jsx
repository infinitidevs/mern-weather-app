import { Route, Routes } from 'react-router-dom';

import { AppWrapper } from './App.styles';
import Favorites from './pages/Favorites/Favorites';
import Forecast from './pages/Forecast';
import LocalWeather from './pages/LocalWeather';

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<LocalWeather />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/forecast/:cityIndex" element={<Forecast />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/favorites/:cityIndex" element={<LocalWeather />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
