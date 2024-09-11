import { useState } from "react";
import ExploreMenu from "../../components/exploremenu/ExploreMenu";
import Header from "../../components/header/Header";
import "./Home.css";
import FoodDisplay from "../../components/fooddisplay/FoodDisplay";
import AppDownload from "../../components/appdownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="home">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
