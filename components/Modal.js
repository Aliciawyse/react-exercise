import * as React from 'react'
import { Portal } from './Portal'

export class Modal extends React.Component {

    // Odd ritual, this will be constructed with properties and those properties will be handed to react. Call the constructor on my parent class which is React.Component.
    constructor() {
        super(...arguments)

        //  set an initial state
        //  this.state is self contained in the class. It's master of it's own state.
        //  this state will change later.
        this.state = { opened: false }
    }

    open = () => {
        this.setState({ opened: true })
    }

    close = () => {
        this.setState({ opened: false })
    }

    render() {
        return (
            <React.Fragment>
                <button type='button' onClick={this.open}>Edit</button>

                {this.state.opened && (
                    <Portal selector='#modal'>
                        <div className='overlay'>
                            <div className='modal'>
                                <p>
                                    This modal is rendered using{' '}
                                    <a href='https://reactjs.org/docs/portals.html'>portals</a>.
                                </p>
                                <button type='button' onClick={this.close}>Close Modal</button>
                            </div>
                            <style jsx global>{`
                            body {
                                overflow: hidden;
                            }
                            `}
                            </style>
                            <style jsx>{`
                                .overlay {
                                    position: fixed;
                                    background-color: rgba(0, 0, 0, 0.7);
                                    top: 0;
                                    right: 0;
                                    bottom: 0;
                                    left: 0;
                                }

                                .modal {
                                    background-color: white;
                                    position: absolute;
                                    top: 10%;
                                    right: 10%;
                                    bottom: 10%;
                                    left: 10%;
                                    padding: 1em;
                                }
                            `}</style>
                        </div>
                    </Portal>
                )}
            </React.Fragment>
        )
    }
}
