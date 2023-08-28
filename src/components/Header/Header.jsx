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
          src="https://cdn.jsdelivr.net/gh/infinitidevs/mern-weather-app@main/src/assets/weather-logo.png"
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
