"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// console.log(`Liverpool won ${liverpoolWins} games`);
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Tottenham'), new ConsoleReport_1.ConsoleReport()
// new HtmlReport()
);
summary.buildAndPrintReport(matchReader.matches);
var shortSummary = Summary_1.Summary.winsAnalysisWithHtmlReport('Southampton');
shortSummary.buildAndPrintReport(matchReader.matches);
