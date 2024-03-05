import React, { useState } from 'react';
import './SocialConnect.css'; // Shared CSS 
const DiscordConnect = () => {
  const [connected, setConnected] = useState(false);

  const connectDiscord = () => {
  };

  return (
    <div>
      {connected ? (
        <p>Connected to Discord</p>
      ) : (
        <button onClick={connectDiscord}>Connect Discord</button>
      )}
    </div>
  );
};

export default DiscordConnect;
