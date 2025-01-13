import WeatherCard from "./components/WeatherCard";
import WeatherCardContainer from "./components/WeatherCardContainer";
import "./App.css";

const weatherData = [
  {
    id: crypto.randomUUID(),
    time: "7:00 PM",
    description: "Cloudy",
    icon: "04d",
    temp: 12,
  },
  {
    id: crypto.randomUUID(),
    time: "8:00 PM",
    description: "Rainy",
    icon: "09d",
    temp: 10,
  },
  {
    id: crypto.randomUUID(),
    time: "9:00 PM",
    description: "Clear",
    icon: "01d",
    temp: 15,
  },
  {
    id: crypto.randomUUID(),
    time: "10:00 PM",
    description: "Snowy",
    icon: "13d",
    temp: -2,
  },
  {
    id: crypto.randomUUID(),
    time: "11:00 PM",
    description: "Windy",
    icon: "50d",
    temp: 8,
  },
];

function App() {
  return (
    <>
      <h1>Weather in Granville</h1>
      <WeatherCardContainer>
        {weatherData.map(({ id, time, description, icon, temp }) => (
          <WeatherCard
            key={id}
            time={time}
            description={description}
            icon={icon}
            temp={temp}
          />
        ))}
      </WeatherCardContainer>
    </>
  );
}

export default App;
