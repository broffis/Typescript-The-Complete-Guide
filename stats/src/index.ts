import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();


// console.log(`Liverpool won ${liverpoolWins} games`);

const summary = new Summary(
  new WinsAnalysis('Tottenham'),
  new ConsoleReport()
  // new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);

const shortSummary = Summary.winsAnalysisWithHtmlReport('Southampton');
shortSummary.buildAndPrintReport(matchReader.matches)
