import { useState } from "react";
import ExploreMenu from "../../components/exploremenu/ExploreMenu";
import Header from "../../components/header/Header";
import "./Home.css";
import FoodDisplay from "../../components/fooddisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="home">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
