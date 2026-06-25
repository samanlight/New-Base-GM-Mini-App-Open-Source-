export const ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "streakCount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalCount",
        "type": "uint256"
      }
    ],
    "name": "GMRecorded",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "gm",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getStats",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "currentStreak",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "total",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "lastTimestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
