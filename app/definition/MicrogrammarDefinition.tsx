import React, { useState } from 'react';
import { State } from '../State';
import { MicrogrammarPhrase } from './MicrogrammarPhrase';
import { MicrogrammarTerms } from './MicrogrammarTerms';

export const MicrogrammerDefinition: React.FC<State> = () => {
    return <React.Fragment>
        <MicrogrammarPhrase />
        <MicrogrammarTerms />
    </React.Fragment>;
}

MicrogrammerDefinition.displayName = "MicrogrammerDefinition";