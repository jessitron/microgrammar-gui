import "codemirror/addon/selection/mark-selection.js";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/clike/clike.js";
import "codemirror/mode/gfm/gfm.js";
import "codemirror/theme/material.css";
import React from "react";
import { HighlightFunction } from "./highlightCode";
export interface CodeDisplayProps {
    code: string;
    className?: string;
    handleCodeChange: (newCode: string) => void;
    highlightFn?: HighlightFunction;
}
export declare class CodeDisplay extends React.Component<CodeDisplayProps, {}> {
    constructor(props: any);
    private editor;
    private overlay?;
    updateCode: (newCode: any) => void;
    hasRange(ranges: any): boolean;
    render(): JSX.Element;
}
//# sourceMappingURL=codeDisplay.d.ts.map