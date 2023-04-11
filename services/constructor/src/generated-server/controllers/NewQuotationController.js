const service = require('../services/NewQuotationService.js');

module.exports.funcNewQuotation = function funcNewQuotation(req, res) {
    service.funcNewQuotation(req, res);
}

