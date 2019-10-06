//  WORK IN PROGRESS
import * as React from 'react'
import { Portal } from './Portal'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

const initialState = {
    name: "",
}

const setName = () => ({
    type: "NAME"
})

const reducer = (state = initialState, action) => {
    if (action.type === "NAME") {
        return {
            name: state.name
        }
    }
    return state;
}

const store = createStore(reducer);

const mapStateToProps = (state) => { return state }

const mapDispatchToProps = (dispatch) => {
    return {
        name() { dispatch(setName()) }
    }
}


export class Modal extends React.Component {

    //  May remove this once I get Redux working.
    constructor(props) {
        super(...arguments)

        this.state = {
            opened: false
        }
    }

    open = () => {
        this.setState({ opened: true })
    }

    close = () => {
        this.setState({ opened: false })
    }


    render() {
        const { count, increment } = this.props;
        console.log({ count, increment })
        return (
            <Provider store={store}>
                {/* <PersonInfoContainer /> */}
                <React.Fragment>
                    <button type='button' onClick={this.open}>Edit</button>
                    {this.state.opened && (
                        <Portal selector='#modal'>
                            <div className='overlay'>
                                <div className='modal'>
                                    {/* <Provider store={store}>
                                    <Form />
                                </Provider> */}
                                    {/* <Form store={store} /> */}
                                    <form>
                                        <label>Name</label>
                                        <input type="text" name="name" value="" />
                                        <label>Phone number</label>
                                        <input type="text" name="username" value="" />
                                        <button type='button' onClick={this.close}>Close Modal</button>
                                    </form>
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
            </Provider>
        )
    }
}

const PersonInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)