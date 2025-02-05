import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import "./App.css";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <>
      <div>
        <Navbar />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
          <InnerContainer>
            <FoodList foodData={foodData} setFoodId={setFoodId} />
          </InnerContainer>
          <InnerContainer>
            <FoodDetail foodId={foodId} />
          </InnerContainer>
        </Container>
      </div>
    </>
  );
}

export default App;
