import React, { useState } from 'react';
import { useEffect } from 'react';
import sun from "./Images/sun_black.png"
import cloud from "./Images/rain.png"
import sun1 from "./Images/sun.png"
import './weather.css'
const WeatherAPI=()=> {
    const [query, GetQuery] = useState("");
    const [temp, setTemp] = useState([]);
    const [city, setCity] = useState([])
    const [country, setCountry] = useState([])
    const [climate, setClimate] = useState([])
    const CallAPI = (input) => {
        if(!input) return
        const Url = "https://api.openweathermap.org/data/2.5/weather?&appid="
        const Key = "b77f022453b0f3c9f4a7590a479a4bdc&q="
        const weatherRes = fetch(Url + Key + input).then((res => res.json()))
        weatherRes.then((json => setCity([json.name])))
        weatherRes.then((json => setCountry([json.sys.country])))
        weatherRes.then((json => setTemp([json.main])))
        weatherRes.then((json => setClimate([json.weather[0]])))
        weatherRes.catch((error) =>console.log("" , error))
    }
    useEffect(() => {
        CallAPI("Salem")
    }, [])
    const searchPlace = (e) => {
        GetQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        // e.preventDefault()
        CallAPI(query)
    }
    return (
        <div className='col-md-12 col-sm-12'>
            <div className='top'>
                <h1 className='title'>Weather App</h1>
                <img className='sunicon' src={sun} alt=''></img>
                <div className='d-grid gap-2 col-md-3 mt-3'>
                    <input type="text" placeholder='Search Weather' className='form-control me-4 shadow rounded' onChange={searchPlace} ></input></div>
                <div className='col-md-12 my-3'><button type='submit' className='btn btn-info' onClick={handleSubmit}>Search</button></div>
                <div className='col-md-12 mt-6 text-center content'>
                    <div className='shadow rounded Resultbox'>
                        <img className='tempicon' src={sun1} alt=''></img><img className='cloudicon' src={cloud} alt='' ></img>
                        <div className='weatherres'><h3 className='city'>{<>{city}</>}&nbsp;,&nbsp;<span style={{ color: "#6d71f9" }}>{country}</span></h3>
                            <br></br>
                            <h3 className='temp'>{temp.map((item) => (<>{((item.temp) - 273.15).toFixed(2)}</>))}°C</h3>
                            <br></br>
                            <h4 className='text-dark weather'>Weather : {climate.map((item) => (<>{item.description}</>))}</h4></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default WeatherAPI;