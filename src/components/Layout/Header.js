import { Fragment } from "react";
import { CartButton } from "../../common/Buttons/CartButton";
import classes from "./Header.module.css";
import MealsImage from "../../assets/images/meals.jpg";
export const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <h1>Meals</h1>
                </div>
                <div className={classes.cart}>
                    <CartButton />
                </div>
            </header>
            <div className={classes.main_image}>
                <img src={MealsImage} alt="main" />
            </div>
        </Fragment>
    );
};
