import dotenv from 'dotenv'
import axios from "axios";
import moralis from "moralis/node";
import fs from 'fs/promises';
import { stringify } from 'csv-stringify/sync';
import nftconfig from "./nftconfig.json";
import internal from 'stream';
dotenv.config();


type OwnerResult = {
  token_address: string;
  token_id: string;
  contract_type: string;
  owner_of: string;
  block_number: string;
  block_number_minted: string;
  token_uri?: string | undefined;
  metadata?: string | undefined;
  synced_at?: string | undefined;
  amount?: string | undefined;
  name: string;
  symbol: string;
}[];

getOwners();

async function MoralisEach(total: number) {
  let eachResult: OwnerResult = [];
  let options: any = nftconfig.options;
  let offset = 0;

  console.log("First each process.");
  for (let offset = 0; offset < total; offset += 500) {
    options["offset"] = offset;
    console.log("Each process running. offset=" + offset);
    let data = await moralis.Web3API.token.getNFTOwners(options);
    if (!data.result) {
      console.log("data result is empty. Please check your script");
      return eachResult;
    }
    let res: OwnerResult = data.result;
    eachResult = eachResult.concat(res);
  }
  return eachResult;
}

async function getOwners() {
  try {

    await moralis.start({ serverUrl: process.env.SERVER_URL });
    const data = await moralis.Web3API.token.getNFTOwners(nftconfig.options);


    await fs.writeFile("./output/first_send.json", JSON.stringify(data, null, 2));
    if (!data.result) {
      Error("data result is null");
      return;
    }

    let result: OwnerResult = data.result;

    if (data.total && data.total >= 500) {
      result = await MoralisEach(data.total);
    }

    await fs.writeFile(nftconfig.output_json_file_name, JSON.stringify(result, null, 2));
    const csv = stringify(result, { header: true });
    await fs.writeFile(nftconfig.output_csv_file_name, csv);
    console.log("Data write finished");

  } catch (error) {
    console.log("Error: ", error);
    return;
  }
}