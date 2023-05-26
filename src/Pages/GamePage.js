import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  useContract,
  useTransferToken,
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";
import SnakeGame from "../components/snake";

const contractAddress = "0xBC8b935228e5Ab9F64BCBA79e52Aeb1fAD27a73e";
const toAddress = "0xD0750b0449749d1F22701Cf91A44b572860C9b14";
const amount = "1"; // adjust amount as needed

const GamePage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [scores, setScores] = useState([]);
  const { contract } = useContract(contractAddress);
  const {
    mutate: transferTokens,
    isLoading,
    isError,
    isSuccess,
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

    const fetchScores = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/high-scores/`
        );
        const sortedScores = response.data.sort((a, b) => b.score - a.score);
        setScores(sortedScores);
      } catch (error) {
        console.error("Error fetching high scores:", error);
      }
    };

    fetchGame();
    fetchScores();
  }, [id]);

  useEffect(() => {
    if (isSuccess) {
      setGameStarted(true);
    }
  }, [isSuccess]);

  const startGame = async () => {
    await transferTokens({ to: toAddress, amount: amount });
  };

  if (!game) {
    return <div className="min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <h1 className="text-center mt-10">{game.title}</h1>
      <div className="w-2/3 h-1/2 bg-slate-900 flex items-center justify-center mx-auto my-36">
        {isLoading && <p>Game loading...</p>}
        {isError && <p>An error occurred: {isError.message}</p>}
        {!gameStarted && (
          <div style={{ height: "800px", width: "100%" }}>
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
        )}
        {gameStarted && <SnakeGame />}
      </div>
      <div className="mt-8 w-1/2 mx-auto mb-4">
        <h1 className="text-center mt-4 mb-8 text-2xl font-bold">
          High Scores
        </h1>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Wallet Address
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {scores.map((score, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {index + 1}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {score.score}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {score.walletAddress}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
