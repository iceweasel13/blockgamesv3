import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useTokenBalance, useContract } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";
import logoImage from "../images/logo.png";
import { useConnect, metamaskWallet } from "@thirdweb-dev/react";
import { useConnectionStatus } from "@thirdweb-dev/react";
import { useDisconnect } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { useNetworkMismatch } from "@thirdweb-dev/react";
import { useSwitchChain } from "@thirdweb-dev/react";
import React from "react";

const metamask = metamaskWallet();
const contractAddress = "0xBC8b935228e5Ab9F64BCBA79e52Aeb1fAD27a73e";

function Navbar() {
  const GOERLI_CHAIN_ID = 5;
  const isMismatched = useNetworkMismatch(GOERLI_CHAIN_ID); // Goerli network'ünü belirtiyoruz.
  const switchChain = useSwitchChain();

  const handleMismatch = async () => {
    if (isMismatched) {
      try {
        await switchChain(GOERLI_CHAIN_ID); // Burası bir async fonksiyon olduğu için await kullanmamız gerekiyor.
      } catch (error) {
        console.error("Failed to switch chain", error);
      }
    }
  };
  const address = useAddress();
  const { contract } = useContract(contractAddress, "token");
  const { data } = useTokenBalance(contract, address);
  console.log(data);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const connect = useConnect();
  const disconnect = useDisconnect();
  const connectionStatus = useConnectionStatus();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (
    connectionStatus === "unknown" ||
    connectionStatus === "connecting" ||
    connectionStatus === "disconnected"
  )
    return (
      <nav className="bg-yellow-500 text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            <img src={logoImage} alt="Logo" className="w-10 h-10 mr-2" />
            <span className="font-extrabold text-black">Block Games</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-black font-bold hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className="text-black font-bold hover:text-white"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black font-bold hover:text-white"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/more"
                  className="text-black font-bold hover:text-white"
                >
                  F.A.Q
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            {!isMenuOpen && (
              <button
                onClick={() => connect(metamask)}
                className="mr-4 hidden md:block bg-rose-600 font-bold hover:bg-rose-400 text-white rounded-lg py-2 px-4 transition duration-300 ease-in-out"
              >
                Connect Wallet
              </button>
            )}
            <button
              className="text-white md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-yellow-500 py-2 px-4">
            <ul>
              <li>
                <Link to="/" className="block text-black mb-2 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className="block text-black mb-2 hover:text-white"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-black mb-2 hover:text-white"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link to="/more" className="block text-black hover:text-white">
                  F.A.Q
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  else {
    return (
      <nav className="bg-yellow-500 text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            <img src={logoImage} alt="Logo" className="w-10 h-10 mr-2" />
            <span className="font-extrabold text-black">Block Games</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-black font-bold hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className="text-black font-bold hover:text-white"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black font-bold hover:text-white"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/more"
                  className="text-black font-bold hover:text-white"
                >
                  F.A.Q
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <span className="text-white bg-rose-600 px-3 py-2 rounded-l-lg font-bold pointer-events-none">
              {data ? data.displayValue : "0"}
            </span>
            {!isMenuOpen && (
              <button
                onClick={disconnect}
                className="mr-4 hidden md:block bg-rose-600 font-bold hover:bg-rose-400 text-white rounded-r-lg py-2 px-4 transition duration-300 ease-in-out"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            )}

            <button
              className="text-white md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-yellow-500 py-2 px-4">
            <ul>
              <li>
                <Link to="/" className="block text-black mb-2 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className="block text-black mb-2 hover:text-white"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-black mb-2 hover:text-white"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link to="/more" className="block text-black hover:text-white">
                  F.A.Q
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;
