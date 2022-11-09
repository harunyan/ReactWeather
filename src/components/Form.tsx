// Form.tsx
import { useState } from "react";

const Form = () => {
    const [city, setCity] = useState("");
    const getWeather = (e: any) => {
        e.preventDefault();
        fetch("https://api.weatherapi.com/v1/current.json?key=58f47afa84364dadb4393017212606&q=London&aqi=no")
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <form>
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
            <button type="submit" onClick={getWeather} >Get Weather</button>
        </form>
    );
};

export default Form;
