import React, { useState } from 'react';
import { State } from './State';
import { MicrogrammerDefinition } from './definition/MicrogrammarDefinition';

export const MicrogrammarExplorer: React.FC<State> = () => {
    return <React.Fragment>
        <MicrogrammerDefinition />
    </React.Fragment>;
}

MicrogrammarExplorer.displayName = "MicrogrammarExplorer";
