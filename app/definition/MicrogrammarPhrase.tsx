import React, { useState } from 'react';
import { State } from '../State';
import CodeMirror from 'codemirror';
import { ErrorBoundary } from '../ErrorBoundary';

export const MicrogrammarPhrase: React.FC<State> = () => {
    return <div className="mg-phrase">
        <label>Microgrammar phrase:</label>
        <ErrorBoundary>
            <CodeMirror
                value=""
                options={{}}
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