import { auth } from "../rest/transport/request";

import { getCryptoWebsocket } from "./crypto";
import { getForexWebsocket } from "./forex";
import { getOptionsWebsocket } from "./options";
import { getStocksWebsocket } from "./stocks";

export * from "./forex";
export * from "./stocks";
export * from "./crypto";

export interface IWebsocketClient {
  crypto: () => WebSocket;
  forex: () => WebSocket;
  options: () => WebSocket;
  stocks: () => WebSocket;
}

export const websocketClient = (
  apiKey: string,
  apiBase?: string
): IWebsocketClient => ({
  crypto: auth(apiKey, getCryptoWebsocket, apiBase),
  forex: auth(apiKey, getForexWebsocket, apiBase),
  options: auth(apiKey, getOptionsWebsocket, apiBase),
  stocks: auth(apiKey, getStocksWebsocket, apiBase),
});

export default websocketClient;
