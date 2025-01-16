import PropTypes from "prop-types";

function WeatherCard({ time, description, icon, temp }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 text-center">
        <div className="card-body">
          <div className="weather-card-time">{time}</div>
          <img
            className="weather-card-icon mx-auto my-3"
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt={description}
            style={{ width: "50px", height: "50px" }}
          />
          <div className="weather-card-description">{description}</div>
          <div className="weather-card-temp">{temp}°C</div>
        </div>
      </div>
    </div>
  );
}

WeatherCard.propTypes = {
  time: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  temp: PropTypes.number,
};

export default WeatherCard;
