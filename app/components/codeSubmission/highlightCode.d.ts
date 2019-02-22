import { AST } from "../../TreeParseGUIState";
export declare type HighlightInstruction = SomeChars | WeAreDoneHere;
interface SomeChars {
    eatChars: number;
    className: string | null;
}
declare type WeAreDoneHere = "we are done here";
export declare function areWeDone(hi: HighlightInstruction): hi is WeAreDoneHere;
export declare type HighlightFunction = (lineFrom0: number, charFrom0: number) => HighlightInstruction;
export declare function highlightFromAst(code: string, ast: AST, lineFrom0: number, charFrom0: number): "we are done here" | {
    eatChars: any;
    className: string;
};
export {};
//# sourceMappingURL=highlightCode.d.ts.map