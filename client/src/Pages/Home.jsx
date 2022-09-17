import styled from "styled-components"
import Featured from "../Components/Featured"
import GuestLoveProperty from "../Components/GuestLoveProperty"
import Header from "../Components/Header"
import MailList from "../Components/MailList"
import Navbar from "../Components/Navbar"
import PropertyLists from "../Components/PropertyLists"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Container>
           <Featured />
           <h1 className="homeTitle">Browse by Property Type</h1>
           <PropertyLists />
           <h1 className="homeTitle">Homes Guests Love</h1>
           <GuestLoveProperty />
           <MailList />
      </Container>
    </div>
  )
}

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  .homeTitle{
    font-size: 2rem;
    font-family: "Oxygen", sans-serif;
    width: 80%;
  }
`;
export default Home