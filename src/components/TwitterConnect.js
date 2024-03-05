import React, { useState } from 'react';
import './SocialConnect.css'; // Shared CSS 
const TwitterConnect = () => {
  const [connected, setConnected] = useState(false);

  const connectTwitter = () => {
    // Placeholder fo rconnect logic
    setConnected(true);
  };

  return (
    <div>
      {connected ? (
        <p>Connected to Twitter</p>
      ) : (
        <button onClick={connectTwitter}>Connect Twitter</button>
      )}
    </div>
  );
};

export default TwitterConnect;
