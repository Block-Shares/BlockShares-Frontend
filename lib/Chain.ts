import { Chain } from '@wagmi/chains';

export const arbitrumSepolia: Chain = {
    id: 421614, // Commonly used network ID for Arbitrum Sepolia
    name: "Arbitrum Sepolia",
    network: "arbitrum-sepolia",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        infura: {
            http: ["https://arbitrum-sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID"],
            webSocket: ["wss://arbitrum-sepolia.infura.io/ws/v3/YOUR_INFURA_PROJECT_ID"]
        },
        default: {
            http: ["https://sepolia-rollup.arbitrum.io/rpc"]
        },
        public: {
            http: ["https://sepolia-rollup.arbitrum.io/rpc"]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Arbiscan",
            url: "https://sepolia-explorer.arbiscan.io"
        },
        default: {
            name: "Arbiscan",
            url: "https://sepolia-explorer.arbiscan.io"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 1746963 // Replace with the actual block if known, otherwise use an estimated value
        }
    }
};
