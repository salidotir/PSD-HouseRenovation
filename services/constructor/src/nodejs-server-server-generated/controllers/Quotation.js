'use strict';

var utils = require('../utils/writer.js');
var Quotation = require('../service/QuotationService');

module.exports.deleteQuotationIdDELETE = function deleteQuotationIdDELETE (req, res, next, quotationRequestId) {
  Quotation.deleteQuotationIdDELETE(quotationRequestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editQuotationPUT = function editQuotationPUT (req, res, next, quotationRequestId, address, startDate, duration, budget) {
  Quotation.editQuotationPUT(quotationRequestId, address, startDate, duration, budget)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getQuotationIdGET = function getQuotationIdGET (req, res, next, quotationRequestId) {
  Quotation.getQuotationIdGET(quotationRequestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newQuotationPOST = function newQuotationPOST (req, res, next, address, startDate, duration, budget) {
  Quotation.newQuotationPOST(address, startDate, duration, budget)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
