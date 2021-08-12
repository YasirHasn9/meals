import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";
import { useModal } from "../../../Containers/Context/ModalContext";

const Backdrop = (props) => {
    const { dispatch } = useModal();
    return (
        <div
            onClick={() => dispatch({ type: "close" })}
            className={classes.backdrop}
        ></div>
    );
};
const ModalOverLay = (props) => (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
);
export const Modal = (props) => {
    let state = useModal();
    let toggleModal = state.state.open;
    if (toggleModal) {
        console.log("what");
    } else {
        console.log("do nothing");
    }
    return (
        toggleModal && (
            <Fragment>
                {ReactDOM.createPortal(
                    <Backdrop closeModal={props.closeModal} />,
                    document.getElementById("overlay")
                )}
                {ReactDOM.createPortal(
                    <ModalOverLay>{props.children}</ModalOverLay>,
                    document.getElementById("overlay")
                )}
            </Fragment>
        )
    );
};
