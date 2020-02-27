import React, { Component } from 'react'

export default class Hello extends Component {
    constructor(props) {
        super()
        console.log(props)
        this.state = {
            text: props.msg,

        }

    }

    addText() {
        return this.state.text + " I don't know"
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <p>{this.addText()}</p>
            </div>
        )
    }
}
