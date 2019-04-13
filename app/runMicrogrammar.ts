import * as mgModule from "@atomist/microgrammar";
import { ParseResponse } from "./TreeParseGUIState";

export function runMicrogrammar(params: {
    parseThis: string,
    phrase: string,
    termDefinitionJS: string,
}): ParseResponse {

    const { phrase, parseThis, termDefinitionJS } = params;

    let terms: (mg) => mgModule.TermsDefinition<any>;
    try {
        terms = Function(`"use strict";return (${termDefinitionJS})`)()(mgModule);
    } catch (e) {
        console.log("Failed to parse terms: " + e.message);
        return {
            error: {
                message: e.message,
                complainAbout: "microgrammar terms",
            },
        };
    }
    console.log("Terms have been parsed.");

    let mg: mgModule.Grammar<any>;
    try {
        mg = mgModule.microgrammar({ phrase, terms });
    } catch (e) {
        console.log("Failed to parse microgrammar: " + e.message);
        return {
            error: {
                message: e.message,
                complainAbout: "microgrammar phrase",
                // todo: provide the tree
            },
        };
    }
    console.log("Microgrammar has been parsed.");

    const r = (mg as mgModule.Microgrammar<any>).perfectMatch(parseThis);

    const allMatches = Array.from([r]);

    return {
        ast: allMatches.map((mr) => mgModule.isSuccessfulMatchReport(mr) ?
            mr.toParseTree() : mr.toExplanationTree(),
        ),
        valueStructure: allMatches.map((mr) =>
            mgModule.isSuccessfulMatchReport(mr) ? mr.toValueStructure() : undefined),
    };
}
