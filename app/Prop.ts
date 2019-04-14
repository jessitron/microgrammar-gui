
export type MicrogrammarExploration = {
    microgrammarDefinition: MicrogrammarDefinitionProps
}

export type WrappedMicrogrammarExploration = {
    appState: MicrogrammarExploration,
    updateFunctions: {
        enterNewPhrase: (s: string) => void
    }
}

export type MicrogrammarDefinitionProps = {
    phrase: string
}

