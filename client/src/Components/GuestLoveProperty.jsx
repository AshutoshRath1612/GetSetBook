import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const GuestLoveProperty = () => {
  return (
    <Container>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>
            <FontAwesomeIcon
              icon={faFaceSmile}
              className="fpRatingIcon"
            ></FontAwesomeIcon>
            8.9
          </button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>
            <FontAwesomeIcon
              icon={faFaceSmile}
              className="fpRatingIcon"
            ></FontAwesomeIcon>
            9.3
          </button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>
            <FontAwesomeIcon
              icon={faFaceSmile}
              className="fpRatingIcon"
            ></FontAwesomeIcon>
            8.8
          </button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>
            <FontAwesomeIcon
              icon={faFaceSmile}
              className="fpRatingIcon"
            ></FontAwesomeIcon>
            8.9
          </button>
          <span>Excellent</span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .fpItem {
    flex: 1;
    gap: 10px;
    display: flex;
    flex-direction: column;
    .fpImg {
      width: 100%;
      object-fit: cover;
      height: 270px;
      border-radius: 10px;
      box-shadow: -5px 4px 12px 0px black;
    }
    .fpName {
      font-weight: bolder;
      font-size: 1.3rem;
      font-family: "Ubuntu", sans-serif;
    }
    .fpCity {
      font-size: 1.2rem;
    }
    .fpPrice {
      font-size: 1.1rem;
      font-weight: bold;
      color: blue;
      font-family: "Oxygen", sans-serif;
    }
    .fpRating {
      button {
        padding: 5px;
        background-color: #4523adb8;
        border: none;
        font-size: 15px;
        font-weight: bold;
        margin-right: 10px;
        .fpRatingIcon {
          color: greenyellow;
          margin-right: 5px;
        }
      }
      span {
        font-weight: bolder;
        font-size: 1.1rem;
        font-family: "Merriweather Sans", sans-serif;
      }
    }
  }
`;

export default GuestLoveProperty;
