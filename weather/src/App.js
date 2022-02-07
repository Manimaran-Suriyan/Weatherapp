import React from "react";
import WeatherAPI from "./Components/weatherAPIHooks";
const App = props => {
  return (
    <div style={{textAlign:"center"}}>
      <WeatherAPI/>
    </div>
  )
}
export default App;