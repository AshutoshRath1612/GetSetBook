import React from 'react'
import styled from 'styled-components';

const Searchitem = () => {
    return (
        <Container>
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
              Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
              Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>8.9</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">$112</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See availability</button>
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