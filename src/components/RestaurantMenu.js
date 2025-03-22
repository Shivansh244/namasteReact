import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

  // const menuCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // const categoryWithItems = menuCards?.find((cards)=> cards?.card?.card?.itemCards);
  // const itemCards = categoryWithItems.cards.card.card.itemCards || [];

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</p>

      {/* Categories accordion       */}
        {categories.map((category, index) => (
          <RestaurantCategory 
            data={category?.card?.card}
            key={category?.card?.card.title}
            showItems = {index===showIndex ? true: false}
            setShowIndex = {() => setShowIndex(index)}
            />
        ))} 
      
    </div>
  );
};

export default RestaurantMenu;
