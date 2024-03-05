import React, { useState, useEffect } from 'react';
import './WalletConnector.css';
import { useNavigate } from 'react-router-dom';

const WalletConnector = ({ onConnect }) => { 
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    
    if (!window.keplr) {
      setErrorMessage('Please install Keplr extension');
    }
    
  }, []);

  

  const connectWallet = async (walletType) => {
    try {
      let accounts;
      const chainId = "cosmoshub-4";

      if (walletType === 'keplr' && window.keplr) {
        await window.keplr.enable(chainId);
        accounts = await window.keplr.getOfflineSigner(chainId).getAccounts();
        onConnect(accounts[0].address); 
        navigate('/poh'); 
      } else if (walletType === 'leap' && window.leap) {
        await window.leap.enable(chainId);
        accounts = await window.leap.getOfflineSigner(chainId).getAccounts();
        onConnect(accounts[0].address); 
        navigate('/poh'); 
      } else if (walletType === 'cosmostation' && window.cosmostation) {
        accounts = await window.cosmostation.cosmos.request({
          method: "cos_requestAccount",
          params: { chainName: chainId },
        });
        accounts = [accounts]; 
        onConnect(accounts[0].address); 
        navigate('/poh'); 
      } else {
        setErrorMessage(`Please install ${walletType.charAt(0).toUpperCase() + walletType.slice(1)} extension`);
        return;
      }

    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="wallet-connector">
      <div className="wallet-buttons">
        <button onClick={() => connectWallet('keplr')}>Connect Keplr</button>
        <button onClick={() => connectWallet('leap')}>Connect Leap</button>
        <button onClick={() => connectWallet('cosmostation')}>Connect Cosmostation</button>
      </div>
      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default WalletConnector;