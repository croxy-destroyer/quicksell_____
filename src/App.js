import React, { useEffect, useState } from 'react';

import './App.css';

import TopNav from './components/TopNav/TopNav';
import DashView from './components/DashBoard/DashView';


const App = () => {
  const URL = "https://api.quicksell.co/v1/internal/frontend-assignment";
  const [apiData, setApiData] = useState({}); 
  const [selectedData, setSelectedData] = useState([]); 

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data)
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (

    <div>
      <TopNav setSelectedData={setSelectedData} apiData={apiData} />
      <DashView selectedData={selectedData} />
    </div>

  );

};

export default App;
