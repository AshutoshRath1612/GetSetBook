import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">GetSetBook</span>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 50px;
  background-color: #4523ad;
  display: flex;
  justify-content: center;
  padding: 1rem;
  .navbar {
    width: 100%;
    .navContainer {
      color: white;
      font-weight: bolder;
      font-size: 1.5rem;
      display: flex;
      justify-content: space-around;
      font-family: monospace;
      .navItems {
        .navButton {
          border: none;
          border-radius: 10px;
          background-color: #d5d2e5;
          padding: 1rem;
          margin-right: 1rem;
          font-size: 1rem;
          cursor: pointer;
        }
      }
    }
  }
`;

export default Navbar;
