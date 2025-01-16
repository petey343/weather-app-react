import PropTypes from "prop-types";

function WeatherCardContainer({ children }) {
  return (
    <div className="container my-4">
      <div className="row">{children}</div>
    </div>
  );
}

WeatherCardContainer.propTypes = {
  children: PropTypes.node,
};

export default WeatherCardContainer;
