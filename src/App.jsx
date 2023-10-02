import { useEffect, useState } from "react";
import { fetchCarImagesFromAPI } from "./service/api"
import data from './data.json';
import CarPanel from "./CarPanel";
import Pagination from "./Pagination";

const App = () => {



  return (
    <div className="container mx-auto p-6 w-full min-h-screen text-right flex justify-center">
      <div className="w-full flex flex-col">
        <h1>Car Details</h1>
        <CarPanel />
        <Pagination />
      </div>
    </div >

  )
}

export default App