import * as _ from "lodash";
import React from "react";
import { ParserInputProps, TreeChoices, TreeParseGUIState } from "../TreeParseGUIState";
import { HighlightFunction } from "./codeSubmission/highlightCode";
export declare class TreeParseGUI extends React.Component<{}, TreeParseGUIState> {
    constructor(props: any);
    componentDidMount(): void;
    updateTree: (() => Promise<void>) & _.Cancelable;
    handleParserInputChange: (data: ParserInputProps) => Promise<void>;
    updateChosenTree: (event: React.ChangeEvent<Element>, tc: TreeChoices) => Promise<void>;
    highlightFn: HighlightFunction;
    setSelectedWordsAndRanges: (words: any, ranges: any) => void;
    styles: {
        header: {
            padding: string;
            marginBottom: string;
            display: string;
            flexFlow: string;
            alignItems: string;
            justifyContent: string;
            backgroundImage: string;
        };
    };
    render(): JSX.Element;
}
//# sourceMappingURL=TreeParseGUI.d.ts.map