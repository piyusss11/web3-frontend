interface EthereumRequest {
  method: string;
  params?: unknown[];
}

interface Window {
  ethereum?: {
    isMetaMask?: boolean;
    request: (args: EthereumRequest) => Promise<unknown>;
    selectedAddress?: string;
  };
}

interface Ititle {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  uuid: string;
  title: string;
}
