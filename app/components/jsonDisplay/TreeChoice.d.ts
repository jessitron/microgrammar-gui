import React from "react";
import { ThemeKeys } from "react-json-view";
import { TreeChoices, TreeParseGUIState } from "../../TreeParseGUIState";
export interface HowToDisplay {
    treeToRender: any;
    theme: ThemeKeys;
}
export declare function effectiveTreeChoice(tpgs: TreeParseGUIState): TreeChoices;
export declare function howToDisplayTree(tpgs: TreeParseGUIState, tc: TreeChoices): HowToDisplay;
export declare function availableTreeChoices(tpgs: TreeParseGUIState): TreeChoices[];
export interface RadioChoiceSpec<Enum> {
    value: Enum;
    label: string;
    disabled?: boolean;
}
export declare function TreeChoice(props: {
    treeToDisplay: TreeChoices;
    availableChoices: TreeChoices[];
    chooseTree: (event: React.ChangeEvent, tc: TreeChoices) => void;
}): JSX.Element;
//# sourceMappingURL=TreeChoice.d.ts.map