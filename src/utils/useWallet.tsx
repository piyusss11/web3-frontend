import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useToast } from "@/hooks/use-toast";

export const useWallet = () => {
  const { toast } = useToast();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);

        const accounts = await provider.send("eth_requestAccounts", []);

        if (accounts.length > 0) {
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          setWalletAddress(address);
          console.log("Wallet connected:", address);
          toast({
            description: "Meta Mask wallet connected successfully",
            title: "Wallet Connected",
            variant: "default",
            color: "green",
          });
        } else {
          console.log("No accounts found.");
        }
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      alert("Please install MetaMask to use this feature.");
    }
  };

  useEffect(() => {
    if (
      typeof window.ethereum !== "undefined" &&
      window.ethereum.selectedAddress
    ) {
      setWalletAddress(window.ethereum.selectedAddress);
    }
  }, []);

  return { walletAddress, connectWallet };
};
