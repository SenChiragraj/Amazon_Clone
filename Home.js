import React from "react";
import "./styles/Home.css";
import Product from "./Product";
// import {withRouter} from "react-router"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
          <div className="home__row">
            <Product
              id={34343342}
              title="Summary The Lean Startup: Book Summary in 20 minutes or less | Big Ideas & Key Takeaways | How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
              price={29.99}
              image="https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY327_QL65_.jpg"
              rating={4}
            />
            <Product
              id={34343564}
              title={"Amazon Brand - Solimo Xxxl Bean Bag Filled With Beans (Black And Brown)(Faux Leather)"}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61em4XfIdEL._AC_UL480_QL65_.jpg"
              price={229}
              rating={3}
            />
          </div>
          <div className="home__row">
            <Product
              id={3437565}
              title={"AmazonBasics Steel Zero Gravity Reclining Lounge Portable Chair, Black"}
              image={"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91IkpRBxMhL._AC_UL480_QL65_.jpg"}
              price={3499}
              rating={5}
            />
            <Product
              id={3037651}
              title={"SPINEHEAL MATTRESS Spineheal Box Type Soft Cotton Foldable Bed Mattress, Firm Gadda For Floor & Bed, Double Size Mattress (72 X 48 X 5 "}
              image={"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/813Y1TIZwfL._AC_UY327_QL65_.jpg"              }
              rating={3}
              price={5499}
            />
            <Product
              id={88743342}
              title={
                "Amazon Brand - Solimo Muddha Xxxl Bean Bag Filled With Beans (Brown & Orange)(Faux Leather)"
              }
              image={
                "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71Hw1pVZ8vL._AC_UL480_QL65_.jpg"
              }
              rating={4}
              price={1299}
            />
          </div>
          <div className="home__row">
            <Product
            id={84343342}
              title={
                "Acer XZ306CX 29.5 Inch Ultrawide 21:9 1500R Curve 2560 X 1080 LCD Monitor with LED Backlight I 1 MS VRB I 200 Hz I HDR 400LCD Monitor with LED Backlight I 1 MS VRB I 200 Hz I HDR 400 I DCI-P3 93% I AMD Free Sync I 2XHDMI 1XDP I Stereo Speakers I Eye Care, White "
              }
              image={
                "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71sBDiA+O3L._AC_UY327_QL65_.jpg"
              }
              rating={4}
              price={21999}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;