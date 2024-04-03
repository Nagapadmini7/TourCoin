import { createContext, useState, useContext } from 'react';
import { Connection, clusterApiUrl } from '@solana/web3.js';

const SolanaContext = createContext();

const SolanaProvider = ({ children }) => {
  const [connection, setConnection] = useState(new Connection(clusterApiUrl('devnet'))); // Replace with your desired network
  const [account, setAccount] = useState(null);

  const connect = async () => {
    try {
      const { activate } = useWallet(wallets);
      await activate();
      const connectedAccount = await activate();
      setAccount(connectedAccount.publicKey);
    } catch (error) {
      console.error(error);
    }
  };

  const disconnect = async () => {
    const { disconnect } = useDisconnect();
    await disconnect();
    setAccount(null);
  };

  return (
    <SolanaContext.Provider value={{ connection, account, connect, disconnect }}>
      {children}
    </SolanaContext.Provider>
  );
};

export { SolanaContext, SolanaProvider };
