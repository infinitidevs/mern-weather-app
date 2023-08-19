import React from 'react';
import { Link } from 'react-router-dom';

import CitiesList from '../CitiesList/CitiesList';
import { Container, Favorites, LogoImg, LogoWrapper } from './styles';

// million-ignore
const Header = () => {
  return (
    <Container>
      <LogoWrapper>
        <LogoImg
          src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/icons/logo_60x60.png"
          alt="Logo"
        />
        <h1>Weather App</h1>
      </LogoWrapper>
      <Favorites>
        <Link to="/favorites">
          <CitiesList />
        </Link>
      </Favorites>
    </Container>
  );
};

export default Header;
