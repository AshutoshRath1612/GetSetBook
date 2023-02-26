import React from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const Featured = () => {
  const {data,loading,error} = useFetch("hotels/find/countByCity?cities=bbsr,ctc,puri");


  return (
    <Container>
      {loading? "Loading Please Wait" : <> <div className="featuredItem">
        <img
          src="https://resize.indiatvnews.com/en/resize/newbucket/730_-/2021/08/purijagannath-pti-1628089644.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bhubaneswar</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/08/27/c0/khandadhar-falls.jpg?w=700&h=500&s=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Cuttack</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Marine_Lines_Mumbai_2021.jpg/800px-Marine_Lines_Mumbai_2021.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Puri</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>}
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;
  .featuredItem {
    position: relative;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 250px;
    box-shadow: -4px 7px 9px 0px black;
    .featuredImage {
      width: 100%;
      object-fit: cover;
    }
    .featuredTitles {
      position: absolute;
      bottom: 20px;
      left: 20px;
      font-family: "Merriweather Sans", sans-serif;
      color: #04f500;
      text-shadow: -6px 1px 5px black;
    }
  }
`;
export default Featured;
