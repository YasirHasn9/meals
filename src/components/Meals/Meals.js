import { Fragment } from "react";
import { MealsSummary } from "./MealsSummary";
import { AvailableMeals } from "./AvailableMeals/AvailableMeals";
// import { MealsContext } from "../../Containers/Context/MealsContext";

export const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    );
};
