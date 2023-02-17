import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="flists">
        <ul className="flist">
          <li className="flistitems">Countries</li>
          <li className="flistitems">Regions</li>
          <li className="flistitems">Cities</li>
          <li className="flistitems">Districts</li>
          <li className="flistitems">Airports</li>
          <li className="flistitems">Hotels</li>
        </ul>
        <ul className="flist">
          <li className="flistitems">Countries</li>
          <li className="flistitems">Regions</li>
          <li className="flistitems">Cities</li>
          <li className="flistitems">Districts</li>
          <li className="flistitems">Airports</li>
          <li className="flistitems">Hotels</li>
        </ul>
        <ul className="flist">
          <li className="flistitems">Countries</li>
          <li className="flistitems">Regions</li>
          <li className="flistitems">Cities</li>
          <li className="flistitems">Districts</li>
          <li className="flistitems">Airports</li>
          <li className="flistitems">Hotels</li>
        </ul>
        <ul className="flist">
          <li className="flistitems">Countries</li>
          <li className="flistitems">Regions</li>
          <li className="flistitems">Cities</li>
          <li className="flistitems">Districts</li>
          <li className="flistitems">Airports</li>
          <li className="flistitems">Hotels</li>
        </ul>
        <ul className="flist">
          <li className="flistitems">Countries</li>
          <li className="flistitems">Regions</li>
          <li className="flistitems">Cities</li>
          <li className="flistitems">Districts</li>
          <li className="flistitems">Airports</li>
          <li className="flistitems">Hotels</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 DoomZ Booking</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  font-size: 12px;
  .flists {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
  }
  .flist {
    list-style: none;
    padding: 0;
  }
  .flistitems {
    margin-bottom: 10px;
    color: #003580;
    cursor: pointer;
  }
  .fText {
    display: block;
    margin: auto;
    width: 20%;
    font-size: 1rem;
    font-weight: bolder;
    font-family: "Merriweather Sans";
  }
`;

export default Footer;
