import { Fragment } from "react";
import { MealsSummary } from "./MealsSummary";
import { AvailableMeals } from "./AvailableMeals";

export const Meals = () => (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
);
