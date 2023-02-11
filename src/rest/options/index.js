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
exports.__esModule = true;
exports.optionsClient = exports.snapshotOptionContract = void 0;
var request_1 = require("../transport/request");
var aggregates_1 = require("./aggregates");
var dailyOpenClose_1 = require("./dailyOpenClose");
var previousClose_1 = require("./previousClose");
var trades_1 = require("./trades");
var lastTrade_1 = require("./lastTrade");
var quotes_1 = require("./quotes");
var snapshots_1 = require("./snapshots");
var summaries_1 = require("./summaries");
var snapshots_2 = require("./snapshots");
__createBinding(exports, snapshots_2, "snapshotOptionContract");
var optionsClient = function (apiKey, apiBase, headers) {
    if (apiBase === void 0) { apiBase = "https://api.polygon.io"; }
    return ({
        aggregates: (0, request_1.auth)(apiKey, aggregates_1.aggregates, apiBase, headers),
        summaries: (0, request_1.auth)(apiKey, summaries_1.summaries, apiBase, headers),
        dailyOpenClose: (0, request_1.auth)(apiKey, dailyOpenClose_1.dailyOpenClose, apiBase),
        previousClose: (0, request_1.auth)(apiKey, previousClose_1.previousClose, apiBase),
        trades: (0, request_1.auth)(apiKey, trades_1.trades, apiBase),
        lastTrade: (0, request_1.auth)(apiKey, lastTrade_1.lastTrade, apiBase),
        quotes: (0, request_1.auth)(apiKey, quotes_1.quotes, apiBase),
        snapshotOptionContract: (0, request_1.auth)(apiKey, snapshots_1.snapshotOptionContract, apiBase)
    });
};
exports.optionsClient = optionsClient;
exports["default"] = exports.optionsClient;
