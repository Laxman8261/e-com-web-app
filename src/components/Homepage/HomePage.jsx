import React from "react";
import "./HomePage.css"
import Banner from "../bannner/banner";
import Navbar from "../navbar/navbar";
import ProductList from "../products/products";
import BrowseProducts from "../browseProducts/browse-products";
import CustomerCommentes from "../customerComments/customerComments";
import Footer from "../footer/footer";
import BrandList from "../brandsList/BrandList";

const HomePage = () => {
    return (
        <div className="main-container">
            <Navbar />
            <Banner />
            <BrandList />
            <ProductList />
            <BrowseProducts />
            <CustomerCommentes />
            <Footer />
        </div>
    )
}

export default HomePage;