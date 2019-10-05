import React from 'react'
import ReactDOM from 'react-dom'

export class Portal extends React.Component {
    // anything passed down from the parent element is going to be
    // available in this.props.

    // querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

    // By default, when your component’s state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().

    // this.props is immutable. It's "read-only"
    componentDidMount() {
        this.element = document.querySelector(this.props.selector)
        this.forceUpdate()
    }

    render() {
        if (this.element === undefined) {
            return null
        }
        console.log("+++++this.props.children+++++", this.props.children)
        return ReactDOM.createPortal(this.props.children, this.element)
    }
}
