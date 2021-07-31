import React,{Component} from "react";


export default class ErrorBoundry extends Component{
    state = {
        hasError:false
}
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
    }
    render() {
        const {hasError} = this.state;
        if (hasError)
            return <div>error</div>
        return this.props.children;
    }
}