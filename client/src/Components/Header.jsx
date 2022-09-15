import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faPlane } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Container>
      <div className="headerList">
        <div className="headerListItem active">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
        </div>
      </div>
      <div className="headerDetails">
      <h1 className="headerTitle">
        Wandering a perfect place to reserve for you trip?
      </h1>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free GetSetBook account
      </p>
      <button className="headerbtn">Sign in / Register</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #4523ad;
  color: white;
  padding: 2rem;
  .headerList {
    display: flex;
    padding: 1rem;
    justify-content: center;
    .headerListItem {
      padding: 1rem;
      cursor: pointer;
      margin: 0 1rem 0 1rem;
      span {
        padding: 1rem;
        font-family: 'Oxygen', sans-serif;
      }
    }
    .headerListItem.active {
      border: 1px solid white;
      border-radius: 20px;
    }
  }
  .headerDetails{
    width: 60%;
    display: block;
    margin:auto;
    h1{
      font-family: 'Fira Sans', sans-serif;
      margin: 1rem 0;
      font-size: 2.5rem;
    }
    p{
      font-size: 1.3rem;
      font-family: 'Fira Sans', sans-serif ;
      margin: 1rem 0;
    }
    button{
      border: none;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bolder;
    color: white;
    background-color: #2059c1f0;
    border-radius: 10px;
    font-family: 'Oxygen', sans-serif;
    }
  }
`;

export default Header;
