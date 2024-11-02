'use client';
'use client';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, ConnectButton, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider, http } from "wagmi";
import { mainnet } from '@wagmi/chains';
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import '@/app/globals.css';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { X, Wallet } from "lucide-react";
import Link from 'next/link';
import { arbitrumSepolia } from 'viem/chains';


const config = getDefaultConfig({
  appName: 'blockshares',
  projectId: '22af500df10d5e24337e859e3fe460e3',
  chains: [mainnet, arbitrumSepolia],
  transports: {
    [mainnet.id]: http()
  },
})

const queryClient = new QueryClient()

type Firm = {
  id: number;
  name: string;
  sector: string;
  price: number;
  data: Array<{ name: string; value: number }>;
};

type Investment = {
  id: number;
  firmName: string;
  invested: number;
  currentValue: number;
  pnl: number;
  data: Array<{ name: string; value: number }>;
};

// Mock data for firms and investments
const firms: Firm[] = [
  { id: 1, name: 'TechCorp Inc.', sector: 'Technology', price: 100, data: generateMockChartData() },
  { id: 2, name: 'GreenEnergy Co.', sector: 'Energy', price: 75, data: generateMockChartData() },
  { id: 3, name: 'HealthPlus', sector: 'Healthcare', price: 120, data: generateMockChartData() },
];

const userInvestments: Investment[] = [
  { id: 1, firmName: 'TechCorp Inc.', invested: 1000, currentValue: 1200, pnl: 200, data: generateMockChartData() },
  { id: 2, firmName: 'GreenEnergy Co.', invested: 750, currentValue: 800, pnl: 50, data: generateMockChartData() },
];

function generateMockChartData() {
  return Array.from({ length: 12 }, (_, i) => ({
    name: `Month ${i + 1}`,
    value: Math.floor(Math.random() * 1000) + 500,
  }));
}

export default function Marketplace() {
  const [selectedFirm, setSelectedFirm] = useState<Firm | null>(null);
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [chartPeriod, setChartPeriod] = useState('1M');
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = () => {
    setIsWalletConnected(true);
  };

  const handleFirmClick = (firm: Firm) => {
    setSelectedFirm(firm);
  };

  const handleInvestmentClick = (investment: Investment) => {
    setSelectedInvestment(investment);
  };

  const closeFirmDialog = () => {
    setSelectedFirm(null);
  };

  const closeInvestmentDialog = () => {
    setSelectedInvestment(null);
  };
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-emerald-800">
        <span className="text-lg font-bold text-emerald-500">Blockshares Marketplace</span>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/marketplace">
            Marketplace
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/business">
            For Businesses
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/contact">
            Contact
          </Link>
          <div className="ml-auto">
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}> 
              <RainbowKitProvider theme={darkTheme({
                accentColor: '#10b981',
                accentColorForeground:'black'
              })}>
              <ConnectButton showBalance={true} accountStatus="address"/>
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
          </div>
        </nav>
      </header>
      <main className="flex-1 flex flex-col md:flex-row">
        <section className="flex-grow md:w-2/3 p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-emerald-500">Available Firms</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {firms.map((firm) => (
              <div
                key={firm.id}
                className="bg-emerald-900/20 p-4 rounded-lg cursor-pointer hover:bg-emerald-800/30 transition-colors"
                onClick={() => handleFirmClick(firm)}
              >
                <h3 className="text-lg font-semibold text-emerald-300">{firm.name}</h3>
                <p className="text-gray-400">{firm.sector}</p>
                <p className="text-emerald-500 mt-2">${firm.price} / share</p>
              </div>
            ))}
          </div>
        </section>
        <section className="md:w-1/3 p-4 border-t md:border-l border-emerald-800 md:border-t-0 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-emerald-500">Your Investments</h2>
          <div className="space-y-4">
            {userInvestments.map((investment) => (
              <div
                key={investment.id}
                className="bg-emerald-900/20 p-4 rounded-lg cursor-pointer hover:bg-emerald-800/30 transition-colors"
                onClick={() => handleInvestmentClick(investment)}
              >
                <h3 className="text-lg font-semibold text-emerald-300">{investment.firmName}</h3>
                <p className="text-gray-400">Invested: ${investment.invested}</p>
                <p className="text-emerald-500">Current Value: ${investment.currentValue}</p>
                <p className={investment.pnl >= 0 ? "text-green-500" : "text-red-500"}>
                  PNL: ${investment.pnl}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Dialog open={selectedFirm !== null} onOpenChange={closeFirmDialog}>
        <DialogContent className="bg-black border border-emerald-800 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-emerald-500">{selectedFirm?.name}</DialogTitle>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="mt-4">
            <Tabs value={chartPeriod} onValueChange={setChartPeriod}>
              <TabsList className="bg-emerald-900/20">
                {['1M', '5M', '1Y', '3Y', '10Y'].map((period) => (
                  <TabsTrigger
                    key={period}
                    value={period}
                    className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
                  >
                    {period}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={selectedFirm?.data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2f4f4f" />
                  <XAxis dataKey="name" stroke="#22c55e" />
                  <YAxis stroke="#22c55e" />
                  <Tooltip contentStyle={{ backgroundColor: '#064e3b', border: 'none' }} />
                  <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-gray-300">Sector: {selectedFirm?.sector}</p>
              <p className="text-emerald-500">Price per Share: ${selectedFirm?.price}</p>
              <form className="mt-4 space-y-4">
                <Input
                  type="number"
                  placeholder="Number of shares"
                  className="bg-emerald-900/20 border-emerald-500 text-white"
                />
                <Button className="w-full bg-emerald-500 text-black hover:bg-emerald-600">
                  Buy Shares
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={selectedInvestment !== null} onOpenChange={closeInvestmentDialog}>
        <DialogContent className="bg-black border border-emerald-800 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-emerald-500">{selectedInvestment?.firmName}</DialogTitle>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="mt-4">
            <Tabs value={chartPeriod} onValueChange={setChartPeriod}>
              <TabsList className="bg-emerald-900/20">
                {['1M', '5M', '1Y', '3Y', '10Y'].map((period) => (
                  <TabsTrigger
                    key={period}
                    value={period}
                    className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
                  >
                    {period}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={selectedInvestment?.data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2f4f4f" />
                  <XAxis dataKey="name" stroke="#22c55e" />
                  <YAxis stroke="#22c55e" />
                  <Tooltip contentStyle={{ backgroundColor: '#064e3b', border: 'none' }} />
                  <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-gray-300">Invested: ${selectedInvestment?.invested}</p>
              <p className="text-emerald-500">Current Value: ${selectedInvestment?.currentValue}</p>
              {selectedInvestment && (
                <p className={selectedInvestment.pnl >= 0 ? "text-green-500" : "text-red-500"}>
                  PNL: ${selectedInvestment.pnl}
                </p>
              )}


              <Button className="w-full bg-emerald-500 text-black hover:bg-emerald-600 mt-4">
                Sell Shares
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}