# nft-snapshot
NFT のホルダーのwallet addressのスナップショットをとります。
MoralisのAPIを使っています。
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