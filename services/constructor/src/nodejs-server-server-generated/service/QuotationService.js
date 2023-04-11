'use strict';


/**
 * delete a request for quotation to constructor
 *
 * quotationRequestId Integer Id of the quotation request
 * no response value expected for this operation
 **/
exports.deleteQuotationIdDELETE = function(quotationRequestId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit a request for quotation to constructor
 *
 * quotationRequestId Integer Id of the quotation request
 * address String Address of the property
 * startDate String Start Date
 * duration Integer Duration in days
 * budget BigDecimal Max budget in Euroes
 * no response value expected for this operation
 **/
exports.editQuotationPUT = function(quotationRequestId,address,startDate,duration,budget) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Offer a quoation to HRC
 *
 * quotationRequestId Integer Id of the quotation request
 * returns Quotation
 **/
exports.getQuotationIdGET = function(quotationRequestId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "duration" : 10,
  "servicePrice" : 1000,
  "id" : 10,
  "startDate" : "11/10/2023"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recives a quotation request from a HRC company
 *
 * address String Address of the property
 * startDate String Start Date
 * duration Integer Duration in days
 * budget BigDecimal Max budget in Euroes
 * no response value expected for this operation
 **/
exports.newQuotationPOST = function(address,startDate,duration,budget) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

