'use strict';

export const fetchData = function(URL, callback) {
      fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
    }
    export const url = {
      currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&lang=fr`;
      },
      forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric&lang=fr`;
      },
      airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&lang=fr`;
      },
      reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&lang=fr`;
      },
      geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&lang=fr`;
      }
    }
