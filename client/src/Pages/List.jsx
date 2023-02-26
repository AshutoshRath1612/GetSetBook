import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import styled from "styled-components";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Searchitem from "../Components/Searchitem";
import useFetch from "../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined) 
  const [options, setoptions] = useState(location.state.options);
  
  const {data,loading,error,refetch} = useFetch(`hotels?city=${destination}&min=${min ||0}&max=${max||100000}`);

  const handleClick = ()=>{
      refetch();
  }
  return (
    <div>
      <Navbar />
      <Container>
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="searchTitle">Search</h1>
              <div className="lsItem">
                <label htmlFor="">Destination</label>
                <input
                  className="lsItemInput"
                  placeholder={destination}
                  type="text"
                />
              </div>
              <div className="lsItem">
                <label htmlFor="">Check-in Date</label>
                <span
                  className="isOptionText"
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(items) => setDate([items.selection])}
                    ranges={date}
                    minDate={new Date()}
                  ></DateRange>
                )}
              </div>
              <div className="lsItem">
                <label htmlFor="">Options</label>
              </div>
              <div className="lsItems">
                <span className="isOptionText">
                  Min price <small> per night</small>
                </span>
                <input type="number" onChange={(e)=> setMin(e.target.value)} className="isOptionInput" />
              </div>
              <div className="lsItems">
                <span className="isOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" onChange={(e)=> setMax(e.target.value)} className="isOptionInput" />
              </div>
              <div className="lsItems">
                <span className="isOptionText">Adult</span>
                <input min={1} type="number" className="isOptionInput" placeholder={options.adult} />
              </div>
              <div className="lsItems">
                <span className="isOptionText">Children</span>
                <input min={0} type="number" className="isOptionInput" placeholder={options.children} />
              </div>
              <div className="lsItems">
                <span className="isOptionText">Room</span>
                <input min={1} type="number" className="isOptionInput" placeholder={options.room}/>
              </div>
              <button onClick={()=>handleClick()} className="search">Search</button>
            </div>
            <div className="listResult">
              {loading ? "Loading" : <>
              {data.map((item)=>(
                <Searchitem key= {item._id} item={item}></Searchitem>
              ))}
              </>}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  .listContainer {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .listWrapper {
    width: 80%;
    display: flex;
    gap: 20px;
    .listSearch {
      flex: 1;
      background-color: #febb02;
      padding: 10px;
      border-radius: 10px;
      position: sticky;
      top: 10px;
      height: max-content;
      .searchTitle {
        font-size: 40px;
        color: #555;
        font-family: "Oxygen";
        font-weight: bolder;
        margin-bottom: 10px;
      }
      .lsItem {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 10px;
        label {
          font-size: 20px;
          font-weight: 600;
          font-family: "Fira Sans";
          margin-top: 10px;
        }
        .lsItemInput {
          border: none;
          padding: 5px 10px;
          height: 30px;
          border-radius: 10px;
          background-color: lightblue;
        }
        .isOptionText {
          padding: 5px 10px;
          height: 30px;
          border-radius: 10px;
          background-color: lightblue;
          width: 60%;
          font-size: 1rem;
          font-family: "Fira Sans";
          font-weight: 600;
          align-items: center;
          display: flex;
          cursor: pointer;
        }
      }
      .lsItems {
        display: flex;
        justify-content: space-between;
        margin: 20px;
        .isOptionText {
          font-family: "Roboto", sans-serif;
          font-size: 18px;
          margin-top: 10px;
        }
        .isOptionInput {
          width: 15%;
          height: 20px;
          border-radius: 10px;
          border: none;
          padding: 10px;
          font-size: 1.1rem;
        }
      }
      .search {
        width: 100%;
        height: 45px;
        border-radius: 20px;
        border: none;
        background: #3c3cffad;
        color: white;
        font-size: 1.4rem;
        cursor: pointer;
      }
    }
    .listResult {
      flex: 3;
    }
  }
`;

export default List;
