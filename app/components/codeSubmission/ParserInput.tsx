import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import { ErrorResponse, ParserInputProps } from "../../TreeParseGUIState";
import { MicrogrammarInput, MicrogrammarInputProps } from "../MicrogrammarInput";
import { PathExpressionInput } from "../PathExpressionInput";
import { CodeDisplay } from "./codeDisplay";
import { HighlightFunction } from "./highlightCode";

export interface AllParserInputProps {
  parserInput: ParserInputProps;
  highlightFn: HighlightFunction;
  errorResponse?: ErrorResponse;
  updateFn: (dtp: Partial<ParserInputProps>) => Promise<void>;
}

const availableParsers = [{ value: "Java9", label: "Java" },
{ value: "Markdown", label: "Markdown" },
{ value: "microgrammar", label: "Microgrammar" },
];

export class ParserInput extends React.Component<AllParserInputProps, {}> {
  constructor(props) {
    super(props);
  }

  public handleCodeChange = (code: string) => {
    this.props.updateFn({ code });
  }

  public handleMicrogrammarChange = (microgrammarInput: MicrogrammarInputProps) => {
    return this.props.updateFn({
      microgrammarInput,
    });
  }

  public handleSubmit = (event) => {
    console.log("You pushed submit.");
    event.preventDefault();
  }

  public radioInputs(name, valueAndLabelses) {
    const oneInput = (value, label) => {
      return <FormControlLabel
        value={value} name={name}
        control={<Radio color="primary" />}
        label={label}
        color="white"
        key={value} />;
    };
    return valueAndLabelses.map((o) => oneInput(o.value, o.label));
  }

  public render() {
    return (
      <div>
        <div className="essayForm"
          style={{ width: "100%", backgroundColor: "'#172330'" }}>
          <form
            style={{ backgroundColor: "#172330" }}
            onSubmit={this.handleSubmit}
          >
            <MicrogrammarInput
              microgrammarInputProps={this.props.parserInput.microgrammarInput}
              handleChange={this.handleMicrogrammarChange}
              errorResponse={this.props.errorResponse} />
            Parse This:
            <CodeDisplay
              key="parseThisInput"
              highlightFn={this.props.highlightFn}
              className="parseThisInput"
              code={this.props.parserInput.code}
              handleCodeChange={this.handleCodeChange}
            />
          </form>
        </div>
      </div>
    );
  }
}
