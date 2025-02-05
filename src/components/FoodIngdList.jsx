import FoodIngdItem from "./FoodIngdItem";

export default function FoddIngdList({ foodRecipe, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading Data...</p>
      ) : (
        foodRecipe.extendedIngredients.map((item) => (
          <FoodIngdItem key={item.id} item={item} />
        ))
      )}
    </div>
  );
}
