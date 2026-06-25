import { useState } from "react";
import { ethers } from "ethers";

import { ABI } from "./abi";
import { CONTRACT_ADDRESS } from "./config";

export default function App() {

  const [wallet, setWallet] = useState("");
  const [streak, setStreak] = useState(0);
  const [total, setTotal] = useState(0);

  async function connectWallet() {

    if (!window.ethereum) {
      alert("Install MetaMask");
      return;
    }

    const accounts =
      await window.ethereum.request({
        method: "eth_requestAccounts"
      });

    setWallet(accounts[0]);

    await loadStats(accounts[0]);
  }

  async function loadStats(address) {

    const provider =
      new ethers.BrowserProvider(
        window.ethereum
      );

    const contract =
      new ethers.Contract(
        CONTRACT_ADDRESS,
        ABI,
        provider
      );

    const stats =
      await contract.getStats(address);

    setStreak(Number(stats[0]));
    setTotal(Number(stats[1]));
  }

  async function sendGM() {

    try {

      const provider =
        new ethers.BrowserProvider(
          window.ethereum
        );

      const signer =
        await provider.getSigner();

      const contract =
        new ethers.Contract(
          CONTRACT_ADDRESS,
          ABI,
          signer
        );

      const tx = await contract.gm();

      await tx.wait();

      alert("GM sent!");

      loadStats(wallet);

    } catch (err) {
      alert(err.reason || err.message);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px"
      }}
    >
      <h1>Based GM</h1>

      {!wallet ? (
        <button onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <>
          <p>{wallet}</p>

          <button
            onClick={sendGM}
            style={{
              fontSize: "24px",
              padding: "15px 40px"
            }}
          >
            GM
          </button>

          <h3>Streak: {streak}</h3>

          <h3>Total GM: {total}</h3>
        </>
      )}
    </div>
  );
}
