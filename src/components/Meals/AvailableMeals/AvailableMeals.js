import { Card } from "../../../common/UI/Card/Card";
import classes from "./availableMeals.module.css";
import { SingleMeal } from "./SingleMeal";

// store
import { useMealStore } from "../../../Containers/Context/MealsContext";
export const AvailableMeals = () => {
    const { meals } = useMealStore();
    return (
        <section className={classes.available_meals}>
            <Card>
                <ul>
                    {meals.map((meal) => {
                        return <SingleMeal meal={meal} key={meal.id} />;
                    })}
                </ul>
            </Card>
        </section>
    );
};
