import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = ({type}) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const changeOptions = (name, operation) => {
    setOptions({
      ...options,
      [name]: operation === "i" ? options[name] + 1 : (options[name]>0) ? options[name] + -1 : 0,
    });
  };

  return (
    <Container type = {type}>
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
      {type !== "list" && (
        <>
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
      <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon
            icon={faBed}
            className="headerIcon"
          ></FontAwesomeIcon>
          <input
            type="text"
            placeholder="Where are you going"
            className="headerSearchInput"
          />
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="headerIcon"
          ></FontAwesomeIcon>
          <span
            onClick={() => (openDate ? setOpenDate(false) : setOpenDate(true))}
            className="headerSearchText"
          >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(items) => setDate([items.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            ></DateRange>
          )}
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon
            icon={faPerson}
            className="headerIcon"
          ></FontAwesomeIcon>
          <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
          {openOptions &&<div className="options">
            <div className="optionItems">
              <span className="optionText">Adult</span>
              <div className="counters">
                <button className="optionCounterButton" disabled={options.adult<=1} onClick={()=>changeOptions("adult",'d')}>-</button>
                <span className="optionCounterNumber">{`${options.adult}`}</span>
                <button className="optionCounterButton" onClick={()=>changeOptions("adult",'i')}>+</button>
              </div>
            </div>
            <div className="optionItems">
              <span className="optionText">Children</span>
              <div className="counters">
                <button className="optionCounterButton" disabled={options.children<=0} onClick={()=>changeOptions("children",'d')}>-</button>
                <span className="optionCounterNumber">{`${options.children}`}</span>
                <button className="optionCounterButton" onClick={()=>changeOptions("children",'i')}>+</button>
              </div>
            </div>
            <div className="optionItems">
              <span className="optionText">Rooms</span>
              <div className="counters">
                <button className="optionCounterButton" disabled={options.room<=1} onClick={()=>changeOptions("room",'d')}>-</button>
                <span className="optionCounterNumber">{`${options.room}`}</span>
                <button className="optionCounterButton" onClick={()=>changeOptions("room",'i')}>+</button>
              </div>
            </div>
          </div>}
        </div>
        <div className="headerSearchItem">
          <button className="headerbutton">Search</button>
        </div>
      </div>
      </>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: #4523ad;
  color: white;
  padding: ${type => type.type ==='list' ? '0rem' : '3rem'};
  padding-bottom: ${type => type.type ==='list' ? '1.5rem' : '3.5rem'};;
  position: relative;
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
        font-family: "Oxygen", sans-serif;
      }
    }
    .headerListItem.active {
      border: 1px solid white;
      border-radius: 20px;
    }
  }
  .headerDetails {
    width: 60%;
    display: block;
    margin: auto;
    h1 {
      font-family: "Fira Sans", sans-serif;
      margin: 1rem 0;
      font-size: 2.5rem;
    }
    p {
      font-size: 1.3rem;
      font-family: "Fira Sans", sans-serif;
      margin: 1rem 0;
    }
    button {
      border: none;
      padding: 1rem;
      font-size: 1rem;
      font-weight: bolder;
      color: white;
      background-color: #2059c1f0;
      border-radius: 10px;
      font-family: "Oxygen", sans-serif;
    }
  }
  .headerSearch {
    margin: -1rem 12%;
    width: 70%;
    height: 45px;
    background-color: white;
    display: flex;
    align-items: centre;
    justify-content: space-around;
    border: 3px solid yellow;
    padding: 10px 0px;
    border-radius: 5px;
    position: absolute;
    bottom: -25px;
    .headerSearchItem {
      display: flex;
      align-items: center;
      gap: 10px;
      .headerSearchInput {
        border: none;
        cursor: pointer;
        background-color: white;
      }
      .headerSearchText {
        color: gray;
        cursor: pointer;
      }
      .headerIcon {
        color: lightgray;
      }
      .headerbutton {
        border: none;
        background-color: blue;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        font-weight: 700;
        font-family: sans-serif;
        font-size: 15px;
        cursor: pointer;
      }
      .date {
        position: absolute;
        top: 50px;
        z-index: 2;
      }
      .options {
        position: absolute;
        top: 60px;
        background-color: white;
        color: gray;
        border-radius: 5px;
        box-shadow: rgb(0 0 0) -1px 0px 13px 0px,
          2px -8px 33px -2px rgb(0 0 0 / 0%);
          z-index: 2;
        .optionItems {
          width: 200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10px;
          .counters {
            display: flex;
            align-items: center;
            gap: 20px;
            color: black;
            .optionCounterButton {
              padding: 0.5rem;
              font-size: 1rem;
              font-weight: bolder;
              border: 1px solid #b4b4d7;
              background-color: white;
              box-shadow: -1px 1px 5px 0px #5045b36e;
              cursor: pointer;
            }
            .optionCounterButton:disabled{
              cursor:not-allowed;
            }
          }
        }
      }
    }
  }
`;

export default Header;
