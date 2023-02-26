import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const SelectRooms = ({ setOpen, hotelId }) => {
  return (
    <Container>
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="close"
        onClick={setOpen(false)}
      ></FontAwesomeIcon>
      <span>Select your Rooms:</span>
    </Container>
  );
};

const Container = styled.div``;

export default SelectRooms;
