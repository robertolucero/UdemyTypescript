import { MatchData } from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(macthes: MatchData[]): void {
        const output = this.analyzer.run(macthes);
        this.outputTarget.print(output);
    }
}