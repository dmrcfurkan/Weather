import React from "react";
import "./weatherinfo.css";

export const Weatherinfo = ({ city, name }) => {
  return (
    <section>
      <div className="temp">
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          Sıcaklık : {city.hourly.temperature_2m[0]} <span>Şehir: {name}</span>
        </p>
        <hr />
        {<p>Hissedilen : {city.hourly.apparent_temperature[0]}</p>}
        <div className="date-time">
          <span className="hours">
            {new Date().getHours()}:{new Date().getMinutes()}
          </span>
          <br />
          <p className="date">
            {new Date().getDate()}.0{new Date().getMonth() + 1}.
            {new Date().getFullYear()}
          </p>
        </div>
        <hr />
        <div className="parameters">
          <div className="rain">
            <i className="fa-solid fa-cloud-rain wind-rain"></i>
            <p>Yağış Olasılığı </p>
            <br />%{city.hourly.precipitation_probability[0]}
          </div>
          <div className="wind">
            <i className="fa-solid fa-wind wind-rain"></i>
            <p>Rüzgar hızı</p>
            <br />%{city.hourly.wind_speed_10m[0]}
          </div>
        </div>
      </div>
    </section>
  );
};
