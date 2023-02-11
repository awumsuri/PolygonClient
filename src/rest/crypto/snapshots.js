"use strict";
exports.__esModule = true;
exports.snapshotTickerFullBookL2 = exports.snapshotTicker = exports.snapshotGainersLosers = exports.snapshotAllTickers = void 0;
var request_1 = require("../transport/request");
// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto_tickers
var snapshotAllTickers = function (apiKey, apiBase, query) {
    return (0, request_1.get)("/v2/snapshot/locale/global/markets/crypto/tickers", apiKey, apiBase, query);
};
exports.snapshotAllTickers = snapshotAllTickers;
// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto__direction
var snapshotGainersLosers = function (apiKey, apiBase, direction) {
    return (0, request_1.get)("/v2/snapshot/locale/global/markets/crypto/".concat(direction), apiKey, apiBase);
};
exports.snapshotGainersLosers = snapshotGainersLosers;
// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto_tickers__ticker
var snapshotTicker = function (apiKey, apiBase, symbol) {
    return (0, request_1.get)("/v2/snapshot/locale/global/markets/crypto/tickers/".concat(symbol), apiKey, apiBase);
};
exports.snapshotTicker = snapshotTicker;
// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto_tickers__ticker__book
var snapshotTickerFullBookL2 = function (apiKey, apiBase, symbol) {
    return (0, request_1.get)("/v2/snapshot/locale/global/markets/crypto/tickers/".concat(symbol, "/book"), apiKey, apiBase);
};
exports.snapshotTickerFullBookL2 = snapshotTickerFullBookL2;
