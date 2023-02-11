"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.restClient = void 0;
var crypto_1 = require("./crypto");
var forex_1 = require("./forex");
var reference_1 = require("./reference");
var options_1 = require("./options");
var stocks_1 = require("./stocks");
__exportStar(require("./crypto"), exports);
__exportStar(require("./forex"), exports);
__exportStar(require("./reference"), exports);
__exportStar(require("./options"), exports);
__exportStar(require("./stocks"), exports);
var restClient = function (apiKey, apiBase, headers) { return ({
    crypto: (0, crypto_1.cryptoClient)(apiKey, apiBase, headers),
    forex: (0, forex_1.forexClient)(apiKey, apiBase, headers),
    reference: (0, reference_1.referenceClient)(apiKey, apiBase, headers),
    options: (0, options_1.optionsClient)(apiKey, apiBase, headers),
    stocks: (0, stocks_1.stocksClient)(apiKey, apiBase, headers)
}); };
exports.restClient = restClient;
exports["default"] = exports.restClient;
