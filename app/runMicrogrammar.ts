import { Grammar, microgrammar, Microgrammar } from "@atomist/microgrammar";
import { ParseResponse } from "./TreeParseGUIState";

export function runMicrogrammar(params: {
    parseThis: string,
    phrase: string,
    termDefinitionJS: string,
}): ParseResponse {

    const { phrase, parseThis } = params;
    let mg: Grammar<any>;
    try {
        mg = microgrammar({ phrase });
    } catch (e) {
        return {
            error: e,
        };
    }

    const r = (mg as Microgrammar<any>).matchReportIterator(parseThis);

    const allMatches = Array.from(r);

    return {
        ast: allMatches.map((mr) => mr.toParseTree()),
    };
}
