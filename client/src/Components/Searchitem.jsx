import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Searchitem = ({item}) => {
    return (
        <Container>
          <img
            src={item.photos[0]}
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance}m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
              Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
              {item.desc}
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>{item.rating}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">₹{item.cheapestPrice}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <Link to={`hotel/${item._id}`}>
              <button className="siCheckButton">See availability</button>
              </Link>
            </div>
          </div>
        </Container>
      );
}

const Container = styled.div`
    border:1px solid grey;
    padding:10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom:20px ;
    font-size: 20px;
    font-family: sans-serif;
    img{
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
    .siDesc{
        display: flex;
        flex: 2;
        flex-direction: column;
        gap: 10px;
    }
    .siTitle{
        font-size: 20px;
        color: #0071c2;
    }
    .siDistance{
        font-size: 12px;
    }
    .siTaxiOp{
        font-size: 12px;
        background-color: #008009;
        color: white;
        width: max-content;
        padding: 3px;
        border-radius: 5px;
    }
    .siSubtitle{
        font-size: 12px;
        font-weight: bold;
    }
    .siCancelOp{
        font-size: 12px;
        color: #008009;
        font-weight: bold;
    }
    .siCancelOpSubtitle{
        font-size: 12px;
        color: #008009;
    }
    .siDetails{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .siRating{
          display: flex;
          justify-content: space-between;
          span{
            font-weight: bolder;
          }
          button{
            background-color: blue;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            font-size: 15px;
          }
        }
        .siDetailTexts{
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 5px;
          .siPrice{
            font-size: 24px;
          }
          .siTaxOp{
            font-size: small;
            color: grey;
          }
          .siCheckButton{
            background-color: #0071c2;
            color: white;
            font-weight: bold;
            padding: 10px 5px;
            border: none;
            border-radius: 5px;
          }
        }
    }
`;

export default Searchitem