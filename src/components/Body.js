import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    filteredList = listOfRestaurant.filter((res) => {
                        return res.info.avgRating > 4 
                    })
                    setListOfRestaurant(filteredList);
                    console.log("listOfRestaurant: ", listOfRestaurant)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-continer">
                {listOfRestaurant.map(res => {
                    return <RestaurantCard key={res.info.id} resData={res}/>
                })}
            </div>
        </div>
    )
}

export default Body;
