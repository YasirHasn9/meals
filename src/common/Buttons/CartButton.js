import { CartIcon } from "../Icons/index";
import classes from "./cartButton.module.css";
import { useModal } from "../../Containers/Context/ModalContext";
export const CartButton = (props) => {
    const { dispatch } = useModal();
    console.log("CartButton", dispatch);
    return (
        <button
            className={classes.btn}
            onClick={() => dispatch({ type: "open" })}
        >
            <span className={classes.icon_cart_button}>
                <CartIcon />
            </span>
            <span className={classes.my_cart}>Your cart</span>
            <span className={classes.number_cart_button}>3</span>
        </button>
    );
};
