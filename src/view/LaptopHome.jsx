import React,{useState} from "react";
// import HomeViewSection from "../components/home-view-section/HomeViewSection";
import "../css/Shop.css";
// import ShopItem from "../components/shop-items/ShopItem";
import ShopHome from "../components/RenderShopHome/ShopHome";
import { useNavigate } from "react-router-dom";
import LeftSection from "../components/LeftSection/LeftSection";
import { headerlistLow } from "../api/arrays/header";
import ShopLand from "../components/shopHomeLand/ShopLand";
import Land from "../components/shopHomeLand/Land";



//photos

import {data, sidebardata } from '../api/arrays/shop'

const LaptopHome = (props) => {
  const [isClicked, setisClicked] = useState(false);
  const handlebtnclick = () => {
    setisClicked(!isClicked);
  };


  

  return (
    <div className="shop">
      <Land/>
      <div className="shop-items container">
        <div className="left-grid">
          <LeftSection leftsection={sidebardata.laptop}/>
        </div>
        <div className="right-grid">
           <ShopHome data={data.laptops} click={handlebtnclick} />
        </div>
      </div>
    </div>
  );
};

export default LaptopHome;
