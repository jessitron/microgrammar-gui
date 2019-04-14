import React, { useState } from 'react';
import { MicrogrammarExploration } from './Prop';
import { MicrogrammarDefinition, init as initialMicrogrammarDefinitionProps } from './definition/MicrogrammarDefinition';

export const MicrogrammarExplorer: React.FC<{}> = () => {

    const [appState, updateAppState] = useState({
        microgrammarDefinition: initialMicrogrammarDefinitionProps
    });

    const updateFunctions = {
        enterNewPhrase: (newPhrase: string) => {
            updateAppState(s => {
                console.log("I updateth the phrase yo");
                // s.microgrammarDefinition.phrase = newPhrase;
                return {
                    ...s,
                    microgrammarDefinition: {
                        ...s.microgrammarDefinition,
                        phrase: newPhrase
                    }
                };
            })
        }
    };

    return <React.Fragment>
        <MicrogrammerDefinition appState={appState} updateFunctions={updateFunctions} />
    </React.Fragment>;
}

MicrogrammarExplorer.displayName = "MicrogrammarExplorer";
