"use strict";
exports.__esModule = true;
exports.cryptoClient = void 0;
var request_1 = require("../transport/request");
var aggregates_1 = require("./aggregates");
var aggregatesGroupedDaily_1 = require("./aggregatesGroupedDaily");
var dailyOpenClose_1 = require("./dailyOpenClose");
var trades_1 = require("./trades");
var lastTrade_1 = require("./lastTrade");
var previousClose_1 = require("./previousClose");
var snapshots_1 = require("./snapshots");
var summaries_1 = require("./summaries");
var cryptoClient = function (apiKey, apiBase, headers) {
    if (apiBase === void 0) { apiBase = "https://api.polygon.io"; }
    return ({
        aggregates: (0, request_1.auth)(apiKey, aggregates_1.aggregates, apiBase, headers),
        aggregatesGroupedDaily: (0, request_1.auth)(apiKey, aggregatesGroupedDaily_1.aggregatesGroupedDaily, apiBase),
        summaries: (0, request_1.auth)(apiKey, summaries_1.summaries, apiBase, headers),
        dailyOpenClose: (0, request_1.auth)(apiKey, dailyOpenClose_1.dailyOpenClose, apiBase),
        lastTrade: (0, request_1.auth)(apiKey, lastTrade_1.lastTrade, apiBase),
        trades: (0, request_1.auth)(apiKey, trades_1.trades, apiBase),
        previousClose: (0, request_1.auth)(apiKey, previousClose_1.previousClose, apiBase),
        snapshotAllTickers: (0, request_1.auth)(apiKey, snapshots_1.snapshotAllTickers, apiBase),
        snapshotGainersLosers: (0, request_1.auth)(apiKey, snapshots_1.snapshotGainersLosers, apiBase),
        snapshotTicker: (0, request_1.auth)(apiKey, snapshots_1.snapshotTicker, apiBase),
        snapshotTickerFullBookL2: (0, request_1.auth)(apiKey, snapshots_1.snapshotTickerFullBookL2, apiBase)
    });
};
exports.cryptoClient = cryptoClient;
exports["default"] = exports.cryptoClient;
