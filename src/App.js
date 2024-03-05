import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WalletConnector from './components/WalletConnector';
import POHPage from './components/POHPage';
import './App.css';

function App() {
  const [walletAddress, setWalletAddress] = useState('');

  const handleWalletConnect = (address) => {
    setWalletAddress(address);
  };
  const handleWalletDisconnect = () => {
    setWalletAddress('');
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              !walletAddress ? (
                <>
                  <header className="app-header">
                    <h1>Welcome to <span className="highlight">secret proof</span></h1>
                    <p>Connect to either of the wallets to proceed further.</p>
                  </header>
                  <WalletConnector onConnect={handleWalletConnect} />
                </>
              ) : (
                <POHPage walletAddress={walletAddress} onDisconnect={handleWalletDisconnect} />
              )
            }
          />
          <Route
  path="/poh"
  element={<POHPage walletAddress={walletAddress} onDisconnect={handleWalletDisconnect} />}
/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
