import React from 'react';
import { WrappedMicrogrammarExploration } from '../Prop';
import { Controlled as CodeMirror } from "react-codemirror2";
import { ErrorBoundary } from '../ErrorBoundary';

export const MicrogrammarPhrase: React.FC<WrappedMicrogrammarExploration> = (props) => {
    const currentPhrase = props.appState.microgrammarDefinition.phrase;
    console.log("The current phrase is: " + currentPhrase)
    const updatePhrase = props.updateFunctions.enterNewPhrase;

    return <div className="mg-phrase">
        <label>Microgrammar phrase:</label>
        <ErrorBoundary>
            <CodeMirror /* TODO: bring in a theme because it doesn't line itself up */
                className="codemirror"
                value={currentPhrase}
                options={{ lineNumbers: true }}
                onBeforeChange={(editor: any, data: any, value: string) => {
                    updatePhrase(value);
                }}
                onChange={(editor: any, data: any, value: any) => {
                }}
            />
        </ErrorBoundary>
    </div>;
}

MicrogrammarPhrase.displayName = "MicrogrammarPhrase";