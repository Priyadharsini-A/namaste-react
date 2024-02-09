import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRstaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus=useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);
  console.log("useState",useState())
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRstaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    ); //this is to filter out cards -point-1
    setFilteredRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    ); //this is to render
  };
  const FilterHandler = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRstaurant(filteredList);
  };
  const searchHandler = () => {
    console.log(searchText);
    const searchData = listOfRestaurants.filter((res, i) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    ); //point-10
    setFilteredRestaurants(searchData);
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
 
  if(onlineStatus===false){
    return(
<h1>Please Check your internet connection</h1>
    )
    
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button className="px-4 py-2 bg-green-100 m-4 rounded-xl" onClick={searchHandler}>Search</button>
        <button className="px-4 py-2 bg-gray-100" onClick={FilterHandler}>
          Top Rated Restaurants
        </button>
      </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => (
          <Link 
          key={restaurant.info.id}
          to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard  resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
