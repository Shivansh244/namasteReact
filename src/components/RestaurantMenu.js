import { useState , useEffect } from "react";

const RestaurantMenu = () => {

    const[resInfo,setResInfo] = useState(null);

    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=780927&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    if (resInfo === null) return <Shimmer/>

    const{
        name,
        cuisines,
        costForTwoMessage,
        cloudinaryImageId,
        avgRating,
        deliveryTime
    } = resInfo?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info

    return(
        <div>
            <h1>Name</h1>
            <h1>Menu</h1>
        </div>
    )
}

export default RestaurantMenu;