import React from 'react';
import { Button } from 'react-bootstrap'; 
import { useWallet, useAccount } from 'web3-react';
import { SolanaContext } from './SolanaContext'; 

const ConnectButton = () => {
  const { connect, account } = useContext(SolanaContext) || {}; 
  const { activate, connected } = useWallet();
  const { publicKey } = useAccount();

  const handleClick = async () => {
    if (!connected) {
      await activate();
    } else {
      
    }
  };

  return (
    <Button variant="primary" onClick={handleClick} disabled={connected}>
      {connected ? `${publicKey.toBase58()}` : 'Connect Wallet'}
    </Button>
  );
};

export default ConnectButton;
