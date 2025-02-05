import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import FoodIngdList from "./FoodIngdList";

export default function FoodDetail({ foodId }) {
  const [foodRecipe, setFoodRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "1090f75070984b3991b0f00e600d9cd2";
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      setFoodRecipe(data);
      setIsLoading(false);
    }
    fetchData();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{foodRecipe.title}</h1>
        <img className={styles.recipeImage} src={foodRecipe.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            ⏲️ <strong>{foodRecipe.readyInMinutes} minutes</strong>
          </span>
          <span>
            👪 <strong>Serves {foodRecipe.servings}</strong>
          </span>
          <span>
            <strong>
              {foodRecipe.vegetarian ? "🥦 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{foodRecipe.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲
          <strong>
            {(foodRecipe.pricePerServing / 100).toFixed(2)} Per serving
          </strong>
        </div>
        <h2>Ingredients</h2>
        <FoodIngdList foodRecipe={foodRecipe} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading
              ? "Loading Data..."
              : foodRecipe.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
