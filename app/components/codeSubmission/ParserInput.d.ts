import React from "react";
import { ErrorResponse, ParserInputProps } from "../../TreeParseGUIState";
import { MicrogrammarInputProps } from "../MicrogrammarInput";
import { HighlightFunction } from "./highlightCode";
export interface AllParserInputProps {
    parserInput: ParserInputProps;
    highlightFn: HighlightFunction;
    errorResponse?: ErrorResponse;
    updateFn: (dtp: Partial<ParserInputProps>) => Promise<void>;
}
export declare class ParserInput extends React.Component<AllParserInputProps, {}> {
    constructor(props: any);
    handleCodeChange: (code: string) => void;
    handleParserChoiceChange: (event: any, parserChoice: any) => void;
    handleMicrogrammarChange: (microgrammarInput: MicrogrammarInputProps) => Promise<void>;
    handlePathExpressionChange: (pathExpression: string) => Promise<void>;
    handleSubmit: (event: any) => void;
    radioInputs(name: any, valueAndLabelses: any): any;
    render(): JSX.Element;
}
//# sourceMappingURL=ParserInput.d.ts.map