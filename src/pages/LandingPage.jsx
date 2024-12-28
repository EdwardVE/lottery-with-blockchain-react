import React from 'react';
import NavBar from '../components/NavBar';
import LoginButton from '../components/LoginButton';
import backgroundImage from '../utils/image1.png'; // Importa la imagen

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Usar la imagen importada
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px'}}>
        <img src={require('../utils/iconLottery.png')} alt="icono de loteria" style={{width: '400px'}} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '180px' }}>
        <LoginButton />
      </div>
    </div>
  );
};

export default LandingPage;
