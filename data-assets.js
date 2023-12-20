"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkJNGURO23js = require('./chunk-JNGURO23.js');
require('./chunk-2STFUQKQ.js');
require('./chunk-P57PW2II.js');

// src/public/rest/data-assets.ts
var deleteDataAssets = async (body, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "data-assets", {
  method: "delete",
  pathTemplate: "/api/v1/data-assets",
  body,
  contentType: "application/json",
  options
});
var createDataAsset = async (body, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "data-assets", {
  method: "post",
  pathTemplate: "/api/v1/data-assets",
  body,
  contentType: "application/json",
  options
});
var getDataAsset = async (dataAssetId, query, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "data-assets", {
  method: "get",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  query,
  options
});
var patchDataAsset = async (dataAssetId, body, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "data-assets", {
  method: "patch",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  body,
  contentType: "application/json",
  options
});
var updateDataAsset = async (dataAssetId, body, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "data-assets", {
  method: "put",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _chunkJNGURO23js.clearApiCache.call(void 0, "data-assets");
}
var dataAssetsExport = {
  deleteDataAssets,
  createDataAsset,
  getDataAsset,
  patchDataAsset,
  updateDataAsset,
  clearCache
};
var data_assets_default = dataAssetsExport;








exports.clearCache = clearCache; exports.createDataAsset = createDataAsset; exports.default = data_assets_default; exports.deleteDataAssets = deleteDataAssets; exports.getDataAsset = getDataAsset; exports.patchDataAsset = patchDataAsset; exports.updateDataAsset = updateDataAsset;
