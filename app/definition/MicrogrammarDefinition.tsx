import React from 'react';
import { MicrogrammarDefinitionProps, WrappedMicrogrammarExploration } from '../Prop';
import { MicrogrammarPhrase } from './MicrogrammarPhrase';
import { MicrogrammarTerms } from './MicrogrammarTerms';

export const MicrogrammarDefinition: React.FC<WrappedMicrogrammarExploration> = (props) => {

    return <React.Fragment>
        <MicrogrammarPhrase appState={props.appState} updateFunctions={props.updateFunctions} />
        <MicrogrammarTerms />
    </React.Fragment>;
}

MicrogrammarDefinition.displayName = "MicrogrammarDefinition";

export const init: MicrogrammarDefinitionProps = {
    phrase: "banana",
}