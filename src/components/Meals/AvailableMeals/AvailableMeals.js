import { useMemo } from "react";
import { Card } from "../../UI/Card/Card";
import classes from "./availableMeals.module.css";

import { SingleMeal } from "./SingleMeal";

export const AvailableMeals = () => {
    const DUMMY_MEALS = useMemo(
        () => [
            {
                id: "m1",
                name: "Sushi",
                description: "Finest fish and veggies",
                price: 22.99,
            },
            {
                id: "m2",
                name: "Schnitzel",
                description: "A german specialty!",
                price: 16.5,
            },
            {
                id: "m3",
                name: "Barbecue Burger",
                description: "American, raw, meaty",
                price: 12.99,
            },
            {
                id: "m4",
                name: "Green Bowl",
                description: "Healthy...and green...",
                price: 18.99,
            },
        ],
        []
    );
    console.log("hello", DUMMY_MEALS);
    return (
        <section className={classes.available_meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map((meal) => {
                        return <SingleMeal meal={meal} key={meal.key} />;
                    })}
                </ul>
            </Card>
        </section>
    );
};
