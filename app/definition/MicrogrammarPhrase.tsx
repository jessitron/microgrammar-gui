import React, { useState } from 'react';
import { State } from '../State';
import CodeMirror from 'codemirror';

export const MicrogrammarPhrase: React.FC<State> = () => {
    return <div className="mg-phrase">
        <label>Microgrammar phrase:</label>
        <CodeMirror
            value=""
            onBeforeChange={(editor: any, data: any, value: any) => {
                //this.updateCode(value);
            }}
        />
    </div>;
}