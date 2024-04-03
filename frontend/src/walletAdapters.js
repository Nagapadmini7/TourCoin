import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

const network = WalletAdapterNetwork.Devnet; 


const wallets = [new PhantomWalletAdapter({ network })];

export default wallets;
