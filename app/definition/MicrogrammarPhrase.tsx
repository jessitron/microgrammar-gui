import React, { useState } from 'react';
import { State } from '../State';
import { Controlled as CodeMirror } from "react-codemirror2";
import { ErrorBoundary } from '../ErrorBoundary';

export const MicrogrammarPhrase: React.FC<State> = () => {
    return <div className="mg-phrase">
        <label>Microgrammar phrase:</label>
        <ErrorBoundary>
            <CodeMirror /* TODO: bring in a theme because it doesn't line itself up */
                className="codemirror"
                value="bananas" /* IMPORTANT: pass the state around. */
                options={{ lineNumbers: true }}
                onBeforeChange={(editor: any, data: any, value: any) => {
                    // this.setState({ value });
                }}
                onChange={(editor: any, data: any, value: any) => {
                }}
            />
        </ErrorBoundary>
    </div>;
}

MicrogrammarPhrase.displayName = "MicrogrammarPhrase";