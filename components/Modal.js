import React, { useEffect, useRef } from 'react';
import ReactDOM, { createPortal } from 'react-dom';

//  a function which takes in children
// returns a function
const Modal = ({ children }) => {

    // useRef allows you to clean up your dom elements
    // we want one div created one
    const elRef = useRef(null);

    if (!elRef.current) {
        // ***
        // This code creates a div.
        // But it results in a ReferenceError: document is not defined
        // const div = document.createElement("div");
        // elRef.current = div;
        // ***

        // ALTERNATIVELY
        if (typeof window !== 'undefined') {
            const div = document.createElement("div");
            elRef.current = div;
        }
    }

    //  once the div renders
    useEffect(() => {
        //  grab the div where the id is "modal"
        const modalRoot = document.getElementById("modal");
        //  append div
        modalRoot.appendChild(elRef.current);
        // remove it when you're done. this is the Component will unmount of hooks
        return () => modalRoot.removeChild(elRef.current);

    }, []);
    // ERROR THROWN : Target container is not a DOM element.
    return createPortal(<div>{children}</div>, elRef.current);
    // return null
};

export default Modal;