'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ethers } from 'ethers';

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);
  const [reward, setReward] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      setAccount(accounts[0]);
      setReward(true);
    } else {
      alert('Install MetaMask!');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-blue-200">
      <h1 className="text-3xl font-bold mb-4">🎮 Mario Wallet Game</h1>
      <Image src="/mario.png" alt="Mario" width={150} height={150} />
      <button
        onClick={connectWallet}
        className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
      >
        Connect Wallet (Monad Testnet)
      </button>
      {reward && (
        <div className="mt-4 p-4 bg-green-200 rounded text-center">
          🎁 Reward dikirim ke wallet kamu! (MON Testnet NFT)
        </div>
      )}
      <audio controls className="mt-4">
        <source src="/mario-theme.mp3" type="audio/mpeg" />
        Browsermu tidak mendukung audio tag.
      </audio>
    </main>
  );
}
