import React, { useState } from "react";
import Items from "../components/items";
import MainContainer from "../layout/mainContainer";

const Dashboard = () => {
  const [savedData, setSavedData] = useState();
  const SubmitHandler = () => {};
  return (
    <MainContainer>
      <Items savedData={savedData} setSavedData={setSavedData} />

      <button onClick={SubmitHandler}></button>
    </MainContainer>
  );
};

export default Dashboard;
