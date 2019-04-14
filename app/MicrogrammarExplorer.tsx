import React, { useState } from 'react';
import { MicrogrammarExploration, enterNewPhrase } from './Prop';
import { MicrogrammarDefinition, init as initialMicrogrammarDefinitionProps } from './definition/MicrogrammarDefinition';

/**
 * Top-level component for the application.
 * This one declares the application state, along with the allowed ways to update it,
 * and passes this down to the components. This state becomes props to everything downstream,
 * and the only ways they can change it are the update functions we pass.
 * 
 * This way, all updates to state flow from the top, allowing all components to respond.
 */
export const MicrogrammarExplorer: React.FC<{}> = () => {

    const [appState, updateAppState] = useState({
        microgrammarDefinition: initialMicrogrammarDefinitionProps
    });

    const updateFunctions = {
        enterNewPhrase: enterNewPhrase(updateAppState),
    };

    return <React.Fragment>
        <MicrogrammarDefinition appState={appState} updateFunctions={updateFunctions} />
    </React.Fragment>;
}

MicrogrammarExplorer.displayName = "MicrogrammarExplorer";
