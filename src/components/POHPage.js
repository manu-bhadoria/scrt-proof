import React from 'react';
import { useNavigate } from 'react-router-dom';
import TwitterConnect from './TwitterConnect';
import DiscordConnect from './DiscordConnect';
import GitHubConnect from './GitHubConnect';
import CaptchaVerify from './CaptchaVerify';
import './POHPage.css';
import LogoSVG from '../assets/logo.svg'; 

const POHPage = ({ walletAddress, onDisconnect }) => {
  const navigate = useNavigate();

  const handleDisconnect = () => {
    onDisconnect(); 
    navigate('/'); 
  };

  return (
    <div className="poh-page">
      <div className="section left-section">
        <img src={LogoSVG} alt="Logo" className="logo" />
        <p>Prove that you're a human by finishing these tasks.</p>
      </div>

      <div className="section right-section">
        <h2>POH (Proof of Humanity)</h2>
        <TwitterConnect onConnect={() => console.log('Twitter connected')} />
        <DiscordConnect onConnect={() => console.log('Discord connected')} />
        <GitHubConnect onConnect={() => console.log('GitHub connected')} />
        <CaptchaVerify />
      </div>

      {walletAddress && (
        <div 
          className="wallet-address-display" 
          onClick={handleDisconnect}
        >
          {walletAddress}
        </div>
      )}
    </div>
  );
};

export default POHPage;
