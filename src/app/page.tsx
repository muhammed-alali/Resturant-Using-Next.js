import About from "@/components/home/about";
import Banner from "@/components/home/banner";
import Blogs from "@/components/home/blogs";
import ProductCard from "@/components/home/cards/ProductCard";
import Chefs from "@/components/home/chefs";
import CountUpCom from "@/components/home/countUp";
import FoodSlide from "@/components/home/food-slide";
import Menus from "@/components/home/menus";
import Video from "@/components/home/video";
import WhatOurClientsSay from "@/components/home/whatOurClientsSay";

export default function Home() {
  return (
    <>
      <Banner />
      <div>
        <About />
        <Video />
        <Menus />
        <CountUpCom />
        <Chefs />
        <ProductCard />
        <WhatOurClientsSay />
        <Blogs />
        <FoodSlide />
      </div>
    </>
  );
}
