"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _QMWU5E4Djs = require('./chunks/QMWU5E4D.js');
require('./chunks/FG5GDUSZ.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/extensions.ts
var getExtensions = async (options) => _QMWU5E4Djs.invokeFetch.call(void 0, "extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions",
  options
});
var uploadExtension = async (body, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "extensions", {
  method: "post",
  pathTemplate: "/api/v1/extensions",
  body,
  contentType: "multipart/form-data",
  options
});
var deleteExtension = async (id, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "extensions", {
  method: "delete",
  pathTemplate: "/api/v1/extensions/{id}",
  pathVariables: { id },
  options
});
var getExtension = async (id, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions/{id}",
  pathVariables: { id },
  options
});
var patchExtension = async (id, body, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "extensions", {
  method: "patch",
  pathTemplate: "/api/v1/extensions/{id}",
  pathVariables: { id },
  body,
  contentType: "multipart/form-data",
  options
});
var downloadExtension = async (id, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions/{id}/file",
  pathVariables: { id },
  options
});
var downloadFileFromExtension = async (id, filepath, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions/{id}/file/{filepath}",
  pathVariables: { id, filepath },
  options
});
function clearCache() {
  return _QMWU5E4Djs.clearApiCache.call(void 0, "extensions");
}
var extensionsExport = {
  getExtensions,
  uploadExtension,
  deleteExtension,
  getExtension,
  patchExtension,
  downloadExtension,
  downloadFileFromExtension,
  clearCache
};
var extensions_default = extensionsExport;










exports.clearCache = clearCache; exports.default = extensions_default; exports.deleteExtension = deleteExtension; exports.downloadExtension = downloadExtension; exports.downloadFileFromExtension = downloadFileFromExtension; exports.getExtension = getExtension; exports.getExtensions = getExtensions; exports.patchExtension = patchExtension; exports.uploadExtension = uploadExtension;
