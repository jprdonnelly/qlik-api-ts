"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6JERR27Kjs = require('./chunk-6JERR27K.js');
require('./chunk-H7SAZYEE.js');

// src/public/rest/automations.ts
var getAutomations = async (query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations",
  query,
  options
});
var createAutomation = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations",
  body,
  options
});
var getAutomationsSettings = async (options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/settings",
  options
});
var updateAutomationsSettings = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "put",
  pathTemplate: "/api/v1/automations/settings",
  body,
  options
});
var getAutomationsUsageMetrics = async (query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/usage",
  query,
  options
});
var deleteAutomation = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "delete",
  pathTemplate: "/api/v1/automations/{id}",
  pathVariables: { id },
  options
});
var getAutomation = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/{id}",
  pathVariables: { id },
  options
});
var updateAutomation = async (id, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "put",
  pathTemplate: "/api/v1/automations/{id}",
  pathVariables: { id },
  body,
  options
});
var copyAutomation = async (id, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/copy",
  pathVariables: { id },
  body,
  options
});
var disableAutomation = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/disable",
  pathVariables: { id },
  options
});
var enableAutomation = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/enable",
  pathVariables: { id },
  options
});
var moveAutomation = async (id, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/move",
  pathVariables: { id },
  body,
  options
});
var getAutomationRuns = async (id, query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/{id}/runs",
  pathVariables: { id },
  query,
  options
});
var queueAutomationRun = async (id, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs",
  pathVariables: { id },
  body,
  options
});
var getAutomationRun = async (id, runId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}",
  pathVariables: { id, runId },
  options
});
var getAutomationRunDetails = async (id, runId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/export",
  pathVariables: { id, runId },
  options
});
var retryAutomationRun = async (id, runId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/retry",
  pathVariables: { id, runId },
  options
});
var stopAutomationRun = async (id, runId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/stop",
  pathVariables: { id, runId },
  options
});
function clearCache() {
  return _chunk6JERR27Kjs.clearApiCache.call(void 0, "automations");
}
var automationsExport = {
  getAutomations,
  createAutomation,
  getAutomationsSettings,
  updateAutomationsSettings,
  getAutomationsUsageMetrics,
  deleteAutomation,
  getAutomation,
  updateAutomation,
  copyAutomation,
  disableAutomation,
  enableAutomation,
  moveAutomation,
  getAutomationRuns,
  queueAutomationRun,
  getAutomationRun,
  getAutomationRunDetails,
  retryAutomationRun,
  stopAutomationRun,
  clearCache
};
var automations_default = automationsExport;





















exports.clearCache = clearCache; exports.copyAutomation = copyAutomation; exports.createAutomation = createAutomation; exports.default = automations_default; exports.deleteAutomation = deleteAutomation; exports.disableAutomation = disableAutomation; exports.enableAutomation = enableAutomation; exports.getAutomation = getAutomation; exports.getAutomationRun = getAutomationRun; exports.getAutomationRunDetails = getAutomationRunDetails; exports.getAutomationRuns = getAutomationRuns; exports.getAutomations = getAutomations; exports.getAutomationsSettings = getAutomationsSettings; exports.getAutomationsUsageMetrics = getAutomationsUsageMetrics; exports.moveAutomation = moveAutomation; exports.queueAutomationRun = queueAutomationRun; exports.retryAutomationRun = retryAutomationRun; exports.stopAutomationRun = stopAutomationRun; exports.updateAutomation = updateAutomation; exports.updateAutomationsSettings = updateAutomationsSettings;