import React from "react";
import { ErrorResponse, KnownErrorLocation, MicrogrammarParserSpec } from "../TreeParseGUIState";
import { CodeDisplay } from "./codeSubmission/codeDisplay";

export class MicrogrammarInput extends React.Component<{
    microgrammarInputProps: MicrogrammarInputProps,
    errorResponse?: ErrorResponse,
    handleChange: (mip: Partial<MicrogrammarInputProps>) => Promise<void>,
}, {}> {

    constructor(props) {
        super(props);
    }

    public handlePhraseChange = (microgrammarString: string) => {
        return this.props.handleChange({ microgrammarString });
    }

    public handleTermsChange = (terms: string) => {
        return this.props.handleChange({ terms });
    }

    public render() {
        return <div id="microgrammarInput">
            Microgrammar phrase:
           <CodeDisplay
                key="microgrammarInput"
                code={this.props.microgrammarInputProps.microgrammarString}
                handleCodeChange={this.handlePhraseChange}
                className="microgrammarInput" />
            Microgrammar terms:
           <CodeDisplay
                key="termInput"
                code={this.props.microgrammarInputProps.terms}
                handleCodeChange={this.handleTermsChange}
                className="microgrammarInput can-have-errors"
            />
            {this.errorDisplay("microgrammar terms", this.props.errorResponse)}
        </div>;
    }

    public errorDisplay(location: KnownErrorLocation, errorResponse: ErrorResponse | undefined) {
        const key = "error-" + location;
        const emptyDiv = <div className="hidden" key={key} />;
        if (!errorResponse || !errorResponse.error) {
            console.log("No error");
            return emptyDiv;
        }
        if (errorResponse.error.complainAbout !== location) {
            console.log("Error in wrong place" + errorResponse.error.complainAbout);
            return emptyDiv;
        }

        return <div key={key} className="error-display">{errorResponse.error.message}</div>;
    }
}

export interface MicrogrammarInputProps {
    microgrammarString: string;
    terms: string;
}

export const init: MicrogrammarInputProps = {
    microgrammarString: "<${first}><${second}>",
    terms: `function (mg) {
    return {
        first: /[a-zA-Z0-9]+/,
        second: /[a-z0-9]+/
    }
}`,
};

export const initialPathExpression = "/root/mg";
