import React from 'react';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsNow from "../components/NewsNow";
import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";
import ScrollButton from "../components/ScrollButton";
import NavCategories from "../components/NavCategories";

const Home = () => {
    return(
        <div>
            <ScrollButton/>
            <TopNavbar />
            <Announcement />
            <Navbar />
            <NavCategories/>
            <Slider />
            <Categories />
            <Products/>
            <NewsNow/>
            <Footer />
        </div>
    )
}

export default Home