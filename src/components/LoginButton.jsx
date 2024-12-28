import React, { useState } from 'react';
import { PeraWalletConnect } from '@perawallet/connect'; // Importa el SDK de Pera Wallet
import peraLogo from '../utils/icon-pera.png'; // Asegúrate de importar la imagen correctamente
import './LoginButton.css'; // Importa el archivo CSS

const LoginButton = () => {
  const [connected, setConnected] = useState(false); // Estado para gestionar si está conectado o no
  const [accounts, setAccounts] = useState([]); // Estado para gestionar las cuentas conectadas

  const peraWallet = new PeraWalletConnect();

  // Función para manejar la conexión con Pera Wallet
  const connectWallet = async () => {
    try {
      const accounts = await peraWallet.connect();
      setAccounts(accounts); // Almacenar las cuentas conectadas
      setConnected(true); // Cambiar el estado a conectado
      alert('Conectado a Pera Wallet');
    } catch (error) {
      console.error('Error al conectar con Pera Wallet:', error);
    }
  };

  // Función para desconectar de Pera Wallet
  const disconnectWallet = async () => {
    try {
      await peraWallet.disconnect();
      setAccounts([]); // Limpiar las cuentas al desconectar
      setConnected(false); // Cambiar el estado a desconectado
      alert('Desconectado de Pera Wallet');
    } catch (error) {
      console.error('Error al desconectar con Pera Wallet:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {connected ? (
        <div>
          <p>Cuenta conectada: {accounts[0]}</p>
          <button onClick={disconnectWallet} className="login-button disconnect">
            Desconectar
            <img src={peraLogo} alt="logo pera" />
          </button>
        </div>
      ) : (
        <button onClick={connectWallet} className="login-button connect">
          INGRESAR CON PERA
          <img src={peraLogo} alt="logo pera" />
        </button>
      )}
    </div>
  );
};

export default LoginButton;
