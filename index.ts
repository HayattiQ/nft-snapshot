import dotenv from 'dotenv'
import axios from "axios";
import moralis from "moralis/node";
import fs from 'fs/promises';
import { stringify } from 'csv-stringify/sync';
import nftconfig from "./nftconfig.json";
dotenv.config();


getOwners();

async function getOwners() {
  try {

    const options = { address: nftconfig.contract_address };
    await moralis.start({ serverUrl: process.env.SERVER_URL });
    const data = await moralis.Web3API.token.getNFTOwners(options);


    const json = JSON.stringify(data, null, 2);
    await fs.writeFile(nftconfig.output_json_file_name, json);
    if (!data.result) {
      Error("data result is null");
      return;
    }
    const csv = stringify(data.result, { header: true });
    await fs.writeFile(nftconfig.output_csv_file_name, csv);
    console.log("Data write finished");

  } catch (error) {
    console.log("Error: ", error);
    return;
  }
}