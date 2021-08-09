import { Fragment } from "react";
import { CartButton } from "../../common/Buttons/index";
import classes from "./Header.module.css";
export const Header = () => 
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.navbar}>
                    <div className={classes.logo}>
                        <h2>Meals</h2>
                    </div>
                    <div className={classes.cart}>
                        <CartButton />
                    </div>
                </div>
            </header>
        </Fragment>
    );
};
