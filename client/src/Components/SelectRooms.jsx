import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
const SelectRooms = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/rooms/{id}`);

  const handleSelect = (e) => {
    const selectedRooms = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      selectedRooms ? [...selectedRooms, value] : 
      selectedRooms.filter((item)=> item !==value)
    );
  };
  return (
    <Container>
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="close"
        onClick={setOpen(false)}
      ></FontAwesomeIcon>
      <span>Select your Rooms:</span>
      {data.map((item) => (
        <div className="bookitem">
          <div className="bookTitle">{item.title}</div>
          <div className="bookDesc">{item.desc}</div>
          <div className="bookMax">
            Max People: <b>{item.maxPeople}</b>
          </div>
          <div className="bookPrice">{item.Price}</div>
          <div className="rooms">
            {item.roomNumbers.map((roomNumber) => (
              <div className="">
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={(e) => handleSelect(e)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div``;

export default SelectRooms;
