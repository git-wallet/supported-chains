# supported-chains

A small, dependency-free **JSON dataset** of the 14 blockchains supported by [GitWallet](https://gitwallet.net), with helpers to look them up. Handy for building chain pickers, explorers links, or price lookups.

## Data
Each entry in [`chains.json`](chains.json):

| field | example | notes |
|-------|---------|-------|
| `id` | `"ethereum"` | stable slug |
| `name` | `"Ethereum"` | display name |
| `symbol` | `"ETH"` | native asset |
| `type` | `"EVM"` | EVM / UTXO / SVM / TVM / XRPL / Cosmos |
| `chainId` | `1` | numeric id for EVM chains, else `null` |
| `decimals` | `18` | native asset decimals |
| `explorer` | `"https://etherscan.io"` | block explorer base URL |
| `coingeckoId` | `"ethereum"` | for price APIs |

## Networks
Bitcoin · Ethereum · BNB Chain · Solana · Tron · Polygon · Arbitrum · Optimism · Base · Avalanche · Litecoin · Dogecoin · XRP Ledger · Cosmos Hub

## Usage

Plain JSON — read `chains.json` with any tool, or in a bundler:
```js
import chains from './chains.json';
```

With the Node helpers (no flags needed):
```js
import { getChain, evmChains, byChainId } from './index.js';

getChain('solana');     // { id: 'solana', symbol: 'SOL', ... }
byChainId(56);          // BNB Chain
evmChains.length;       // 7
```

Build an explorer link:
```js
const c = getChain('tron');
const url = `${c.explorer}/#/transaction/${txHash}`;
```

## License
[MIT](LICENSE) · data maintained by [GitWallet](https://gitwallet.net)
