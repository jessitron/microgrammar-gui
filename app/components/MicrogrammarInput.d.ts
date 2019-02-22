import React from "react";
import { ErrorResponse, KnownErrorLocation, ParserKind } from "../TreeParseGUIState";
export declare class MicrogrammarInput extends React.Component<{
    parserKind: ParserKind;
    microgrammarInputProps: MicrogrammarInputProps;
    errorResponse?: ErrorResponse;
    handleChange: (mip: Partial<MicrogrammarInputProps>) => Promise<void>;
}, {}> {
    constructor(props: any);
    handlePhraseChange: (microgrammarString: string) => Promise<void>;
    handleTermsChange: (terms: string) => Promise<void>;
    render(): JSX.Element;
    errorDisplay(location: KnownErrorLocation, errorResponse: ErrorResponse | undefined): JSX.Element;
}
export interface MicrogrammarInputProps {
    microgrammarString: string;
    terms: string;
}
export declare const init: MicrogrammarInputProps;
export declare const initialPathExpression = "/root/mg";
//# sourceMappingURL=MicrogrammarInput.d.ts.map