import {
  clearApiCache,
  invokeFetch
} from "./chunk-ZNLWUSS5.mjs";
import "./chunk-7HKUAHVA.mjs";
import "./chunk-ZFXKCRJC.mjs";

// src/public/rest/reloads.ts
var getReloads = async (query, options) => invokeFetch("reloads", {
  method: "get",
  pathTemplate: "/api/v1/reloads",
  query,
  options
});
var queueReload = async (body, options) => invokeFetch("reloads", {
  method: "post",
  pathTemplate: "/api/v1/reloads",
  body,
  contentType: "application/json",
  options
});
var getReload = async (reloadId, options) => invokeFetch("reloads", {
  method: "get",
  pathTemplate: "/api/v1/reloads/{reloadId}",
  pathVariables: { reloadId },
  options
});
var cancelReload = async (reloadId, options) => invokeFetch("reloads", {
  method: "post",
  pathTemplate: "/api/v1/reloads/{reloadId}/actions/cancel",
  pathVariables: { reloadId },
  options
});
function clearCache() {
  return clearApiCache("reloads");
}
var reloadsExport = { getReloads, queueReload, getReload, cancelReload, clearCache };
var reloads_default = reloadsExport;
export {
  cancelReload,
  clearCache,
  reloads_default as default,
  getReload,
  getReloads,
  queueReload
};
