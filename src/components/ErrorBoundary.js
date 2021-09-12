import { Component } from "react";

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = {hasError: false};
    }

    //  Any class-based component with componentDidCatch() is an error boundary!
    //  There is no functional-component Hook version of this!
    //  Is triggered whenever a child component throws an error.
    componentDidCatch(error) {
        console.log(error);
        this.setState({hasError: true});
    }

    //  A special render for componentDidCatch():
    //  Want it to be a wrapper component around other components that need it.
    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;