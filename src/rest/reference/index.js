"use strict";
exports.__esModule = true;
exports.referenceClient = void 0;
var request_1 = require("../transport/request");
var conditions_1 = require("./conditions");
var exchanges_1 = require("./exchanges");
var marketHolidays_1 = require("./marketHolidays");
var marketStatus_1 = require("./marketStatus");
var optionsContract_1 = require("./optionsContract");
var optionsContracts_1 = require("./optionsContracts");
var dividends_1 = require("./dividends");
var stockSplits_1 = require("./stockSplits");
var stockFinancials_1 = require("./stockFinancials");
var tickerDetails_1 = require("./tickerDetails");
var tickerNews_1 = require("./tickerNews");
var tickers_1 = require("./tickers");
var tickerTypes_1 = require("./tickerTypes");
var referenceClient = function (apiKey, apiBase, headers) {
    if (apiBase === void 0) { apiBase = "https://api.polygon.io"; }
    return ({
        conditions: (0, request_1.auth)(apiKey, conditions_1.conditions, apiBase, headers),
        exchanges: (0, request_1.auth)(apiKey, exchanges_1.exchanges, apiBase, headers),
        marketHolidays: (0, request_1.auth)(apiKey, marketHolidays_1.marketHolidays, apiBase, headers),
        marketStatus: (0, request_1.auth)(apiKey, marketStatus_1.marketStatus, apiBase, headers),
        optionsContract: (0, request_1.auth)(apiKey, optionsContract_1.optionsContract, apiBase, headers),
        optionsContracts: (0, request_1.auth)(apiKey, optionsContracts_1.optionsContracts, apiBase, headers),
        dividends: (0, request_1.auth)(apiKey, dividends_1.stockDividends, apiBase, headers),
        stockSplits: (0, request_1.auth)(apiKey, stockSplits_1.stockSplits, apiBase, headers),
        stockFinancials: (0, request_1.auth)(apiKey, stockFinancials_1.stockFinancials, apiBase, headers),
        tickerDetails: (0, request_1.auth)(apiKey, tickerDetails_1.tickerDetails, apiBase, headers),
        tickerNews: (0, request_1.auth)(apiKey, tickerNews_1.tickerNews, apiBase, headers),
        tickers: (0, request_1.auth)(apiKey, tickers_1.tickers, apiBase, headers),
        tickerTypes: (0, request_1.auth)(apiKey, tickerTypes_1.tickerTypes, apiBase, headers)
    });
};
exports.referenceClient = referenceClient;
exports["default"] = exports.referenceClient;
