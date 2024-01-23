import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRstaurant] = useState([]);
  const[filteredRestaurants,setFilteredRestaurants]=useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRstaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  };
  const FilterHandler = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRstaurant(filteredList);
  };
  const searchHandler=()=>{
  console.log(searchText)
    const searchData=listOfRestaurants.filter((res,i)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilteredRestaurants(searchData)
   
  }
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
        <button onClick={searchHandler}>Search</button>
        <button className="filter-btn" onClick={FilterHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
