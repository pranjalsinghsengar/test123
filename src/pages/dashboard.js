import React, { useState } from "react";
import Items from "../components/items";
import MainContainer from "../layout/mainContainer";
import { db } from "../config/firebaseConfig";
import { ref, set } from "firebase/database";

const Dashboard = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const SubmitHandler = () => {
    set(ref(db, "abc"), {
      data: selectedItems,
    });
  };
  return (
    <MainContainer>
      <Items
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />

      <button onClick={SubmitHandler}>Submit kr do</button>
    </MainContainer>
  );
};

export default Dashboard;
