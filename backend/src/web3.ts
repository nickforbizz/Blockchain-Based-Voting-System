require('dotenv').config();
import Web3 from "web3";
import data from "../build/contracts/Election.json";

const web3_port = process.env.WEB3_PORT || 7545;
const web3_url = `http://localhost:${web3_port}`;
export const web3 = new Web3(web3_url);

const provider = new Web3.providers.HttpProvider(web3_url);
const contract = require("@truffle/contract");

const ElectionContract = contract(data);

ElectionContract.setProvider(provider);

export default ElectionContract;
