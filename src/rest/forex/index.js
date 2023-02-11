"use strict";
exports.__esModule = true;
exports.forexClient = void 0;
var request_1 = require("../transport/request");
var aggregates_1 = require("./aggregates");
var aggregatesGroupedDaily_1 = require("./aggregatesGroupedDaily");
var conversion_1 = require("./conversion");
var quotes_1 = require("./quotes");
var lastQuote_1 = require("./lastQuote");
var previousClose_1 = require("./previousClose");
var snapshots_1 = require("./snapshots");
var summaries_1 = require("./summaries");
var forexClient = function (apiKey, apiBase, headers) {
    if (apiBase === void 0) { apiBase = "https://api.polygon.io"; }
    return ({
        aggregates: (0, request_1.auth)(apiKey, aggregates_1.aggregates, apiBase, headers),
        aggregatesGroupedDaily: (0, request_1.auth)(apiKey, aggregatesGroupedDaily_1.aggregatesGroupedDaily, apiBase),
        summaries: (0, request_1.auth)(apiKey, summaries_1.summaries, apiBase, headers),
        conversion: (0, request_1.auth)(apiKey, conversion_1.conversion, apiBase),
        quotes: (0, request_1.auth)(apiKey, quotes_1.quotes, apiBase),
        lastQuote: (0, request_1.auth)(apiKey, lastQuote_1.lastQuote, apiBase),
        previousClose: (0, request_1.auth)(apiKey, previousClose_1.previousClose, apiBase),
        snapshotAllTickers: (0, request_1.auth)(apiKey, snapshots_1.snapshotAllTickers, apiBase),
        snapshotGainersLosers: (0, request_1.auth)(apiKey, snapshots_1.snapshotGainersLosers, apiBase),
        snapshotTicker: (0, request_1.auth)(apiKey, snapshots_1.snapshotTicker, apiBase)
    });
};
exports.forexClient = forexClient;
exports["default"] = exports.forexClient;
