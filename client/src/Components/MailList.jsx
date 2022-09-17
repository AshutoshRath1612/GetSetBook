import React from "react";
import styled from "styled-components";

const MailList = () => {
  return (
    <Container>
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deal for you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Enter your mail here" />
        <button>Subscribe</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: #4d4d78;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 4rem;
  .mailTitle {
    font-size: 4rem;
    font-family: "Prompt", sans-serif;
  }
  .mailDesc {
    font-size: 1.8rem;
    font-family: "Prompt";
  }
  .mailInputContainer {
    margin-top: 10px;
    input {
      height: 38px;
      margin: 0 22px;
      padding: 0 100px;
      background: transparent;
      border: 1px solid #aea8b9;
      border-radius: 10px;
      font-size: 1.1rem;
    }
    button {
      padding: 12px;
      background-color: #2059c1f0;
      border: none;
      font-weight: bolder;
      cursor: pointer;
      border-radius:10px;
    }
  }
`;
export default MailList;
