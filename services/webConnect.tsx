import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import config from "../config.json";

// Initialize Web3
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
const erc20ABI = [
    {
        "constant": true,
        "inputs": [{ "name": "_owner", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "type": "function"
    }
];
const contractABI = config.ABI;
const contractAddress = '0x34361d562327bf2d782aa96fecc2c6efdf36fce4';

// Define individual token addresses
const dTslaAddress = '0xYourTslaTokenAddress';
const dGoogAddress = '0xYourGoogTokenAddress';
const dNvdaAddress = '0xYourNvdaTokenAddress';

// Exported functions

// Function to get the connected account
export async function getAccount() {
    const accounts = await web3.eth.requestAccounts();
    return '0x8713Daefd36072B47eD7AD39801e1d713a1Bd5bd';
}

// Function to modify the contract state
export async function modifyState(newValue:number) {
    const account = await getAccount();
    if (!account) {
        console.error('No account found. Please connect your wallet.');
        return;
    }

    try {
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const data = contract.methods.mintGoog(newValue).encodeABI();

        const tx = {
            from: account,
            to: contractAddress,
            gas: 2000000,
            data: data
        };

        const txHash = await web3.eth.sendTransaction(tx);
        console.log('Transaction hash:', txHash);
        return txHash;
    } catch (error) {
        console.error('Transaction failed:', error);
    }
}
