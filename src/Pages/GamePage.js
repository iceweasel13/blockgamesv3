import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  useContract,
  useTransferToken,
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";

const contractAddress = "0xBC8b935228e5Ab9F64BCBA79e52Aeb1fAD27a73e";
const toAddress = "0xD0750b0449749d1F22701Cf91A44b572860C9b14";
const amount = "1"; // adjust amount as needed

const GamePage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [gameLoaded, setGameLoaded] = useState(false);
  const { contract } = useContract(contractAddress);
  const {
    mutate: transferTokens,
    isLoading,
    error,
  } = useTransferToken(contract);
  const address = useAddress(); // wallet address

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/games/`);
        setGame(response.data);
      } catch (error) {
        console.error("Error fetching game:", error);
      }
    };
    fetchGame();
  }, [id]);

  const startGame = async () => {
    await transferTokens({ to: toAddress, amount: amount }).then(() => {
      if (!isLoading && !error) {
        setGameLoaded(true);
      }
    });
  };

  if (!game) {
    return <div className="min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <h1>{game.title}</h1>
      {isLoading && <p>Game loading...</p>}
      {error && <p>An error occurred: {error.message}</p>}
      {gameLoaded && (
        <iframe
          src="https://play2048.co/" // the URL of the game
          style={{ width: "100%", height: "800px" }}
        />
      )}
      <Web3Button
        contractAddress={contractAddress}
        onClick={startGame}
        action={() =>
          transferTokens({
            to: toAddress, // Address to transfer to
            amount: amount, // Amount to transfer
          })
        }
      >
        Start Game
      </Web3Button>
    </div>
  );
};

export default GamePage;
