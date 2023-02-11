"use strict";
exports.__esModule = true;
exports.stocksClient = void 0;
var request_1 = require("../transport/request");
var aggregates_1 = require("./aggregates");
var aggregatesGroupedDaily_1 = require("./aggregatesGroupedDaily");
var dailyOpenClose_1 = require("./dailyOpenClose");
var previousClose_1 = require("./previousClose");
var lastQuote_1 = require("./lastQuote");
var lastTrade_1 = require("./lastTrade");
var snapshots_1 = require("./snapshots");
var quotes_1 = require("./quotes");
var trades_1 = require("./trades");
var summaries_1 = require("./summaries");
var stocksClient = function (apiKey, apiBase, headers) {
    if (apiBase === void 0) { apiBase = "https://api.polygon.io"; }
    return ({
        aggregates: (0, request_1.auth)(apiKey, aggregates_1.aggregates, apiBase, headers),
        aggregatesGroupedDaily: (0, request_1.auth)(apiKey, aggregatesGroupedDaily_1.aggregatesGroupedDaily, apiBase),
        summaries: (0, request_1.auth)(apiKey, summaries_1.summaries, apiBase, headers),
        dailyOpenClose: (0, request_1.auth)(apiKey, dailyOpenClose_1.dailyOpenClose, apiBase),
        lastQuote: (0, request_1.auth)(apiKey, lastQuote_1.lastQuote, apiBase),
        lastTrade: (0, request_1.auth)(apiKey, lastTrade_1.lastTrade, apiBase),
        previousClose: (0, request_1.auth)(apiKey, previousClose_1.previousClose, apiBase),
        quotes: (0, request_1.auth)(apiKey, quotes_1.quotes, apiBase),
        snapshotAllTickers: (0, request_1.auth)(apiKey, snapshots_1.snapshotAllTickers, apiBase),
        snapshotGainersLosers: (0, request_1.auth)(apiKey, snapshots_1.snapshotGainersLosers, apiBase),
        snapshotTicker: (0, request_1.auth)(apiKey, snapshots_1.snapshotTicker, apiBase),
        trades: (0, request_1.auth)(apiKey, trades_1.trades, apiBase)
    });
};
exports.stocksClient = stocksClient;
exports["default"] = exports.stocksClient;
