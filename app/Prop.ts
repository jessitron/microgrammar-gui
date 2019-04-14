import { Dispatch, SetStateAction } from "react";

export type MicrogrammarExploration = {
    microgrammarDefinition: MicrogrammarDefinitionProps
}

/**
 * To pass this the entire appState as props, we need to make it a property.
 * The update functions must be separate because they can't be created until
 * we have an updateAppState function, which is created from the same `useState`
 * call as the initial appState.
 */
export type WrappedMicrogrammarExploration = {
    appState: MicrogrammarExploration,
    updateFunctions: {
        enterNewPhrase: (s: string) => void
    }
}

export type MicrogrammarDefinitionProps = {
    phrase: string
}

export function enterNewPhrase(updateAppState: Dispatch<SetStateAction<MicrogrammarExploration>>) {
    return (newPhrase: string) => {
        updateAppState(s => {
            // learned: if you return the same object (after updating it), 
            // it doesn't re-render.
            return {
                ...s,
                microgrammarDefinition: {
                    ...s.microgrammarDefinition,
                    phrase: newPhrase
                }
            };
        })
    }
}

