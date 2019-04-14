import React from "react";

export class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
    constructor(props: {}) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: any) {
        console.log("I haz an error");
        // You can also log the error to an error reporting service
        console.log(error);
        console.log("and an info");
        console.log(info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}