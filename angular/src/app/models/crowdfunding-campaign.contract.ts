import { AbiItem } from "web3-utils";

export const CrowdfundingCampaignContract: AbiItem[] = [
  {
    type: "constructor",
    payable: false,
    stateMutability: "nonpayable",
    inputs: [{ name: "_goal", type: "uint" }],
  },
  {
    type: "function",
    name: "getBalance",
    constant: true,
    payable: false,
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint" }],
  },
];
