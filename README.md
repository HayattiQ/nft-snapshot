# nft-snapshot
Take a snapshot of the NFT holder's wallet address and output to CSV and JSON file.
This script can be used to issue NFT AirDrop, holder privileges, etc. The language is TypeScript.

This system uses Moralis API, so you need to register as a member of Moralis.

# usage

Download the necessary files.
`git clone https://github.com/HayattiQ/nft-snapshot
 npm install`.

Create .env file.
`touch .env`.

Fill in the .env file with the Server URL for Moralis.
`SERVER_URL="https://xxxxxxxxxxx.usemoralis.com:2053/server"`

Start the program.
`npm run app`.

By default, output is in the /output/ folder.
Output can be in CSV or JSON.

The config file is nftconfig.json. You can specify the contract address, blocknumber, etc.

# nft-snapshot
NFT のホルダーのwallet addressのスナップショットをとります。
こちら、任意の時点で、自分のコレクションのNFTホルダーが誰なのかをＣＳＶやＪＳＯＮファイルにして出力します。
ＮＦＴのAirDropやホルダー特典などの発行に使うことが可能です。言語はTypeScriptを利用しています。

また、このシステムはMoralisのAPIを使っていますので、Moralisへの会員登録が必要になります。

# usage

必要ファイルをダウンロードします。
`git clone https://github.com/HayattiQ/nft-snapshot
 npm install`

.envファイルを作成します。
`touch .env`

.envファイルに、MoralisのServer URLを記入します。
`SERVER_URL="https://xxxxxxxxxxx.usemoralis.com:2053/server"`

プログラムをスタートさせます。
`npm run app`

初期設定だと、 /output/フォルダに出力されます。
CSVとJSONにて出力が可能です。

また、configファイルは nftconfig.json です。コントラクトアドレスやblocknumberなどの指定が可能です。