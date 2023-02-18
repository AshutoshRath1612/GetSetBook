import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MailList from "../Components/MailList";
import Navbar from "../Components/Navbar";

const Hotel = () => {
  const [slidenumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <Container>
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faCircleArrowLeft} onClick={()=> slidenumber >0 ? setSlideNumber(slidenumber-1) : setSlideNumber(photos.length-1)} className="arrow"></FontAwesomeIcon>
              <div className="sliderWrapper">
                <img src={photos[slidenumber].src} alt="" />
              </div>
              <FontAwesomeIcon icon={faCircleArrowRight} onClick={()=> slidenumber < photos.length-1 ? setSlideNumber(slidenumber+1) : setSlideNumber(0)} className="arrow"></FontAwesomeIcon>
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">Grand Hotel</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              <span>Bhubaneswar</span>
            </div>
            <span className="hotelDistance">
              Excellent Location - 500m from center
            </span>
            <sapn className="hotelPriceHighlight">
              Book a stay over 1200 at this property and get a free airport taxi
            </sapn>
            <div className="hotelImages">
              {photos.map((photo, i) => (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of City</h1>
                <p className="hotelDesc">
                  Located a 5-minute walk from St. Florian's Gate in Krakow,
                  Tower Street Apartments has accommodations with air
                  conditioning and free WiFi. The units come with hardwood
                  floors and feature a fully equipped kitchenette with a
                  microwave, a flat-screen TV, and a private bathroom with
                  shower and a hairdryer. A fridge is also offered, as well as
                  an electric tea pot and a coffee machine. Popular points of
                  interest near the apartment include Cloth Hall, Main Market
                  Square and Town Hall Tower. The nearest airport is John Paul
                  II International Kraków–Balice, 16.1 km from Tower Street
                  Apartments, and the property offers a paid airport shuttle
                  service.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <MailList />
      <Footer />
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  width: 80%;
  .slider {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.426);
    z-index: 999;
    display: flex;
    align-items: center;
    .close{
      position: absolute;
      top: 20px;
      right: 20px;
      font-size:30px;
      color: lightgray;
      cursor: pointer;
    }
    .arrow{
      margin: 20px;
      font-size: 50px;
    }
    .sliderWrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 80%;
        height: 80vh;
      }
    }
  }
  .hotelWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    .bookNow {
      position: absolute;
      top: 10px;
      right: 0;
      border: none;
      padding: 10px 20px;
      background-color: #0071c2;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    .hotelTitle {
      font-size: 50px;
    }
    .hotelAddress {
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .hotelPriceHighlight {
      color: #008009;
      font-weight: 500;
    }
    .hotelDistance {
      color: #0071c2;
      font-weight: 500;
    }
    .hotelImages {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .hotelImgWrapper {
      width: 33%;
      transition-timing-function: ease-in;
      transition-duration: 0.3s;
      .hotelImg {
        width: 100%;
        object-fit: cover;
      }
    }
    .hotelImgWrapper:hover {
      transform: scale(1.1);
    }
    .hotelDetails {
      gap: 20px;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .hotelDetailsTexts {
        flex: 3;
        .hotelDesc {
          font-size: 14px;
          margin-top: 20px;
        }
      }
      .hotelDetailsPrice {
        flex: 1;
        background-color: #ebf3ff;
        padding: 20px;
        flex-direction: column;
        gap: 20px;
        h1 {
          font-size: 18px;
          color: #555;
          margin-bottom: 5px;
        }
        span {
          font-size: 14px;
        }
        h2 {
          font-weight: 300;
          margin: 10px 0px;
        }
        button {
          border: none;
          padding: 10px 20px;
          background-color: #0071c2;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
  }
`;
export default Hotel;
