'use strict';

var utils = require('../utils/writer.js');
var Project = require('../service/ProjectService');

module.exports.newProjectPOST = function newProjectPOST (req, res, next, quotationRequestId) {
  Project.newProjectPOST(quotationRequestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectCompletionStatusIdGET = function projectCompletionStatusIdGET (req, res, next, quotationRequestId) {
  Project.projectCompletionStatusIdGET(quotationRequestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
