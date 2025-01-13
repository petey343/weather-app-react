import PropTypes from "prop-types";

import "./WeatherCardContainer.css";

function WeatherCardContainer({ children }) {

    return (
        <div className="weather-card-container">
            {children}
        </div>
    );
}

WeatherCardContainer.propTypes = {
    children: PropTypes.node,
  };

export default WeatherCardContainer;