"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (macthes) {
        var output = this.analyzer.run(macthes);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
