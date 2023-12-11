import {
  clearApiCache,
  invokeFetch
} from "./chunk-W4J34XGA.mjs";
import "./chunk-7REWEWCX.mjs";

// src/public/rest/users.ts
var getUsers = async (query, options) => invokeFetch("users", {
  method: "get",
  pathTemplate: "/api/v1/users",
  query,
  options
});
var createUser = async (body, options) => invokeFetch("users", {
  method: "post",
  pathTemplate: "/api/v1/users",
  body,
  options
});
var countUsers = async (query, options) => invokeFetch("users", {
  method: "get",
  pathTemplate: "/api/v1/users/actions/count",
  query,
  options
});
var filterUsers = async (query, body, options) => invokeFetch("users", {
  method: "post",
  pathTemplate: "/api/v1/users/actions/filter",
  query,
  body,
  options
});
var inviteUsers = async (body, options) => invokeFetch("users", {
  method: "post",
  pathTemplate: "/api/v1/users/actions/invite",
  body,
  options
});
var getMyUser = async (options) => invokeFetch("users", {
  method: "get",
  pathTemplate: "/api/v1/users/me",
  options
});
var getUsersMetadata = async (options) => invokeFetch("users", {
  method: "get",
  pathTemplate: "/api/v1/users/metadata",
  options
});
var deleteUser = async (userId, options) => invokeFetch("users", {
  method: "delete",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  options
});
var getUser = async (userId, query, options) => invokeFetch("users", {
  method: "get",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  query,
  options
});
var patchUser = async (userId, body, options) => invokeFetch("users", {
  method: "patch",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  body,
  options
});
function clearCache() {
  return clearApiCache("users");
}
var usersExport = {
  getUsers,
  createUser,
  countUsers,
  filterUsers,
  inviteUsers,
  getMyUser,
  getUsersMetadata,
  deleteUser,
  getUser,
  patchUser,
  clearCache
};
var users_default = usersExport;
export {
  clearCache,
  countUsers,
  createUser,
  users_default as default,
  deleteUser,
  filterUsers,
  getMyUser,
  getUser,
  getUsers,
  getUsersMetadata,
  inviteUsers,
  patchUser
};