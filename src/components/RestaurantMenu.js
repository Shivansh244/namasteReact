import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

  // const menuCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // const categoryWithItems = menuCards?.find((cards)=> cards?.card?.card?.itemCards);
  // const itemCards = categoryWithItems.cards.card.card.itemCards || [];

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;

  const { name, cuisines, costForTwoMessage, avgRating, deliveryTime } =
    restaurantInfo;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{deliveryTime} mins</h3>

      <div className="menu-container">
        <h2>Menu</h2>
        <div className="main-menu-container">
          {itemCards.map((item) => (
            <div>
              <h3>{item.card.info.name}</h3>
              <h4>{item.card.info.description}</h4>
              <h4>
                ₹{" "}
                {item.card.info.defaultPrice / 100 || 0 }
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
