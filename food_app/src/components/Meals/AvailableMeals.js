import DUMMY_MEALS from './dummyMeals';
import Card from '../UI/Card';
import MealItem from './MealItem.js/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
    return (
        <section className={classes.summary}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map((meal) =>
                        <MealItem
                            id={meal.id}
                            key={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price} />)}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;