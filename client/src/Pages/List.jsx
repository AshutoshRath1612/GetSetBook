import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import styled from 'styled-components'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'

const List = () => {
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false)
  const [options,setoptions] = useState(location.state.options);
  return (
    <Container>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
              <h1 className="searchTitle">Search</h1>
              <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text" />
              </div>
              <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}</span>
          {openDate&&(<DateRange
              onChange={(items) => setDate([items.selection])}
              ranges={date}
              minDate={new Date()}
            ></DateRange>)}
              </div>
              <div className="lsItem">
                <label htmlFor="">Options</label>
                <span className="isOptionText">Min price <small>per night</small></span>
                <input type="number" className='isOptionInput' />
              </div>
                <span className="isOptionText">Max price <small>per night</small></span>
                <input type="number" className='isOptionInput' />
              <div className="lsItem">
                <label htmlFor="">Options</label>
                <span className="isOptionText">Adult</span>
                <input type="number" className='isOptionInput' />
              </div>
              <div className="lsItem">
                <label htmlFor="">Options</label>
                <span className="isOptionText">Max price <small>per night</small></span>
                <input type="number" className='isOptionInput' />
              </div>
              <div className="lsItem">
                <label htmlFor="">Options</label>
                <span className="isOptionText">Min price <small>per night</small></span>
                <input type="number" className='isOptionInput' />
              </div>
          </div>
          <div className="listResult">
      
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .listContainer{
    display: flex;
    justify-content: center;
    margin-top:20px;
  }
  .listWrapper{
    width: 100%;
    display: flex;
    gap: 20px;
    .listSearch{
      flex: 1;
      background-color: #febb02;
      padding: 10px;
      border-radius:10px;
      position: sticky;
      top: 10px;
      .searchTitle{
        font-size: 20px;
        color: #555;
        margin-bottom: 10px;
      }
      .lsItem{
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 10px;
        label{
          font-size: 12px;
        }
        input{
          border: none;
          padding:5px;
          height: 30px;
        }
        span{
          height: 30px;
          padding: 5px;
          align-items: center;
          display: flex;
          cursor: pointer;
        }
      }
    }
    .listResult{
      flex: 3;
      background-color: blue;
    }
  }
`;

export default List