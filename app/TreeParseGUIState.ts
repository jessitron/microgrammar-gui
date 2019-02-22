import { MicrogrammarInputProps } from "./components/MicrogrammarInput";

export interface MicrogrammarParserSpec {
    microgrammarString: string;
    terms: string;
}

// server interface
export interface DataToParse {
    code: string;
    parser: MicrogrammarParserSpec;
}

export type AST = any[];

export interface ParserInputProps {
    microgrammarInput: MicrogrammarInputProps;
    code: string;
}

export interface TreeParseGUIState {
    displayCode: boolean;
    ast: AST;
    error?: ErrorResponse;
    parserInput: ParserInputProps;
    chosenTree: TreeChoices;
}

export enum TreeChoices {
    ast = "parseThis",
    // goal: microgrammarTerms = "mgTerms",
    parsingError = "error",
}

export interface ErrorResponse {
    error: {
        message: string,
        complainAbout?: KnownErrorLocation,
        tree?: any,
    };
}

export type KnownErrorLocation = "path expression" | "code parse" | "microgrammar terms";

export type ParseResponse = { ast: AST } | ErrorResponse;

export function isErrorResponse(pr: ParseResponse): pr is ErrorResponse {
    const maybe = pr as ErrorResponse;
    return !!maybe.error;
}
