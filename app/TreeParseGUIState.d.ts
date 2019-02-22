import { MicrogrammarInputProps } from "./components/MicrogrammarInput";
export declare type ParserKind = "Java9" | "Markdown" | "microgrammar";
export declare type ParserSpec = MicrogrammarParserSpec | {
    kind: "Java9" | "Markdown";
};
export interface MicrogrammarParserSpec {
    kind: "microgrammar";
    microgrammarString: string;
    matchName: string;
    rootName: string;
    terms: string;
}
interface HasPathExpression {
    pathExpression: string;
}
export declare type DataToParse = {
    code: string;
    parser: ParserSpec;
} & HasPathExpression;
export declare type AST = any[];
export declare type PathExpressionByParserKind = {
    [K in ParserKind]: string;
};
export interface ParserInputProps {
    parserKind: ParserKind;
    microgrammarInput: MicrogrammarInputProps;
    pathExpression: PathExpressionByParserKind;
    code: string;
}
export interface TreeParseGUIState {
    deps: string[];
    selectedWords: string[];
    selectedRanges: object[];
    displayCode: boolean;
    ast: AST;
    error?: ErrorResponse;
    parserInput: ParserInputProps;
    chosenTree: TreeChoices;
}
export declare enum TreeChoices {
    ast = "parseThis",
    parsingError = "error"
}
export interface ErrorResponse {
    error: {
        message: string;
        complainAbout?: KnownErrorLocation;
        tree?: any;
    };
}
export declare type KnownErrorLocation = "path expression" | "code parse" | "microgrammar terms";
export declare type ParseResponse = {
    ast: AST;
} | ErrorResponse;
export declare function isErrorResponse(pr: ParseResponse): pr is ErrorResponse;
export {};
//# sourceMappingURL=TreeParseGUIState.d.ts.map