import {
  clearApiCache,
  invokeFetch
} from "./chunk-W4J34XGA.mjs";
import "./chunk-7REWEWCX.mjs";

// src/public/rest/temp-contents.ts
var uploadTempFile = async (query, body, options) => invokeFetch("temp-contents", {
  method: "post",
  pathTemplate: "/api/v1/temp-contents",
  query,
  body,
  options
});
var downloadTempFile = async (id, query, options) => invokeFetch("temp-contents", {
  method: "get",
  pathTemplate: "/api/v1/temp-contents/{id}",
  pathVariables: { id },
  query,
  options
});
var getTempFileDetails = async (id, options) => invokeFetch("temp-contents", {
  method: "get",
  pathTemplate: "/api/v1/temp-contents/{id}/details",
  pathVariables: { id },
  options
});
function clearCache() {
  return clearApiCache("temp-contents");
}
var tempContentsExport = { uploadTempFile, downloadTempFile, getTempFileDetails, clearCache };
var temp_contents_default = tempContentsExport;
export {
  clearCache,
  temp_contents_default as default,
  downloadTempFile,
  getTempFileDetails,
  uploadTempFile
};