'use strict';


/**
 * Start the project
 *
 * quotationRequestId Integer Id of the quotation request
 * no response value expected for this operation
 **/
exports.newProjectPOST = function(quotationRequestId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets completion status of the project
 *
 * quotationRequestId Integer Id of the quotation request
 * returns Boolean
 **/
exports.projectCompletionStatusIdGET = function(quotationRequestId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

