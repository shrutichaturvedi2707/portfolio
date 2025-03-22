import { useState, useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setTimeout(() => {
          const weatherData = {
            city: "Halifax",
            temperature: 5,
            humidity: 65,
            description: "Cloudy"
          };
          
          setWeather(weatherData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError("Failed to load weather data");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <Card className="mb-4">
        <Card.Body className="text-center">
          <Spinner animation="border" size="sm" />
          <span className="ms-2">Loading weather...</span>
        </Card.Body>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="mb-4">
        <Card.Body className="text-center text-danger">
          {error}
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="mb-4">
      <Card.Body>
        <h5>Current Weather in {weather.city}</h5>
        <p>Temperature: {weather.temperature}°C</p>
        <p>Humidity: {weather.humidity}%</p>
        <p>Conditions: {weather.description}</p>
      </Card.Body>
    </Card>
  );
}

export default Weather;