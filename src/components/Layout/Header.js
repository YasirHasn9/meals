import { Fragment } from "react";
import { CartButton } from "../../common/Buttons/index";
import classes from "./Header.module.css";
export const Header = () => (
    <Fragment>
        <header className={classes.header}>
            <div className={classes.navbar}>
                <div className={classes.logo}>
                    <h1>Meals</h1>
                </div>
                <div className={classes.cart}>
                    <CartButton />
                </div>
            </div>
        </header>
    </Fragment>
);
