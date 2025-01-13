import PropTypes from "prop-types";
import "./WeatherCard.css";

function WeatherCard({ time, description, icon, temp }) {
  return (
    <>
      <div className="weather-card">
        <div className="weather-card-time">{time}</div>
        <img
          className="weather-card-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <div className="weather-card-description">{description}</div>
        <div className="weather-card-temp">{temp}°C</div>
      </div>
    </>
  );
}

WeatherCard.propTypes = {
  time: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  temp: PropTypes.number,
};

export default WeatherCard;
