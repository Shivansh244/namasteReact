import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props
    const {
      name,
      cuisines,
      avgRating,
      cloudinaryImageId,
      costForTwo
      } = resData?.info
      
    return (
    <div className="m-4 p-4 w-48 bg-gray-100 hover:bg-gray-200">
          <img 
            className="w-48 rounded-lg" 
            src= { CDN_URL + cloudinaryImageId}/>
        <div className="overflow-hidden text-ellipsis">
          <h4 className="py-4 text-lg font-bold">{name}</h4>
          <h5>{cuisines.join(',')}</h5>
          <h5>{avgRating} Stars</h5>
          <h5>{costForTwo}</h5>  
        </div>
      </div>
    );
  }

  export default RestaurantCard;