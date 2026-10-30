import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));

/** The full chain list (parsed from chains.json). */
export const chains = JSON.parse(readFileSync(join(__dir, 'chains.json'), 'utf8'));

export const byId = Object.fromEntries(chains.map((c) => [c.id, c]));

/** Get a chain by its id (e.g. "ethereum"). */
export const getChain = (id) => byId[String(id).toLowerCase()] ?? null;

/** All EVM chains. */
export const evmChains = chains.filter((c) => c.type === 'EVM');

/** Look up an EVM chain by numeric chainId (e.g. 1 -> Ethereum). */
export const byChainId = (chainId) =>
  chains.find((c) => c.chainId === Number(chainId)) ?? null;

export default chains;
