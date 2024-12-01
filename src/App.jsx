import React, { useState } from "react";
import DateRangePicker from "./components/DateRangePicker";
import SpeciesSelector from "./components/SpeciesSelector";
import RangeSlider from "./components/RangeSlider";
import "./styles/FilterSidebar.css";
import Header from './components/Header'; // Import Header component
import ImageFilter from "./components/ImageFilter"


const App = () => {
  // State for date range
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  // State for selected species
  const [selectedSpecies, setSelectedSpecies] = useState([]);

  // State for sliders
  const [latitudeRange, setLatitudeRange] = useState([-87.01, 88.63]);
  const [longitudeRange, setLongitudeRange] = useState([-179.98, 174.61]);
  const [depthRange, setDepthRange] = useState([0, 500]);

  return (
    <div className="app-container"> {/* Wrap the entire content in a container */}
      <Header /> {/* Rendering Header component */}
 {/* 
       
*/}
    <div className="filter-sidebar">
      <h3>Filter Options</h3>

      {/* Date Range Picker */}
      <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />

      {/* Species Selector */}
      <SpeciesSelector
        selectedSpecies={selectedSpecies}
        setSelectedSpecies={setSelectedSpecies}
      />

      {/* Latitude Range Slider */}
      <RangeSlider
        label="Latitude Range"
        range={latitudeRange}
        setRange={setLatitudeRange}
        min={-90}
        max={90}
        unit=""
      />

      {/* Longitude Range Slider */}
      <RangeSlider
        label="Longitude Range"
        range={longitudeRange}
        setRange={setLongitudeRange}
        min={-180}
        max={180}
        unit=""
      />

      {/* Depth Range Slider */}
      <RangeSlider
        label="Depth Range"
        range={depthRange}
        setRange={setDepthRange}
        min={0}
        max={1000}
        unit="m"
      />
    </div>

    <div className="w-full min-h-screen bg-gray-900">
      <ImageFilter />
    </div> 
    </div>
  );
  
};

export default App;
