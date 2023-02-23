import React from 'react'
import styled from 'styled-components'
import useFetch from '../hooks/useFetch'

const PropertyLists = () => {
  const {data,Loading,Error} = useFetch("hotels/find/countByType");
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
  ]
  console.log(data)
  return (
    <Container>
        {!Loading && <>
        {data && images.map((img,index)=>
        (<div className="pListItem" key={index}>
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>{data[index]?.type}</h1>
          <h2>{data[index]?.count} {data[index]?.type}</h2>
        </div>
      </div>))}
      </>}
    </Container>
  )
}
const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    .pListItem{
        flex: 1;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        .pListImg{
            width: 100%;
            height: 150px;
            object-fit: cover;
            box-shadow: 6px -1px 20px 0px #000000;
        }
        .pListTitles{
            h1{
                font-size: 20px;
                font-family: 'Ubuntu', sans-serif;
                text-transform: capitalize;
            }
            h2{
                font-size: 16px;
                font-family:  'Merriweather Sans', sans-serif;
            }
        }
    }
`;

export default PropertyLists