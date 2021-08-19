import { createContext, useContext, useReducer } from "react";
const ModalContext = createContext();

const modalReducer = (state, action) => {
    switch (action.type) {
        case "open":
            return { ...state, open: true };
        case "close":
            return { ...state, open: false };
        default:
            throw new Error("Unhandled Modal");
    }
};

export const ModalProvider = ({ children }) => {
    const [state, dispatchModalAction] = useReducer(modalReducer, {
        open: false,
    });
    const value = { state, dispatchModalAction };
    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error("State should be used inside the Provider");
    }
    return context;
};
