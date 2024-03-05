import React, { useState } from 'react';
import './SocialConnect.css'; 

const GitHubConnect = () => {
  const [connected, setConnected] = useState(false);

  const connectGitHub = () => {
    // Placeholder for actual connect logic
    setConnected(true);
  };

  return (
    <div>
      {connected ? (
        <p>Connected to GitHub</p>
      ) : (
        <button onClick={connectGitHub}>Connect GitHub</button>
      )}
    </div>
  );
};

export default GitHubConnect;
