import { City } from '../city/city';
import './style.css';
import { useState, useEffect } from 'react';

//načtení api
export const HomePage = () => {
  const [citiesApi, setCitiesApi] = useState(null);
  const cisla = [1, 2, 3];
  useEffect(() => {
    const localApiCities = async () => {
      const response = await fetch('http://localhost:4000/api/cities');
      const data = (await response.json()).data;
      setCitiesApi(data);
    };

    localApiCities();
  }, []);

  return (
    <>
      <header>
        <h1>Austromar - city</h1>
      </header>
      <div className="cityBox">
        <label for="citiesChoise">City:</label>
        <input list="citiesList" id="cities" name="citiesChoise" />
        <datalist id="citiesList">
          {citiesApi === null
            ? null
            : citiesApi.map((cityApi) => (
                <option value={cityApi.Id} key={cityApi.Id}>
                  {cityApi.Name} - {cityApi.Id}
                </option>
              ))}{' '}
        </datalist>

        <div className="cities__box">
          {citiesApi === null
            ? null
            : citiesApi.map((cityApi) => (
                <City city={cityApi} key={cityApi.Id} />
              ))}
        </div>
      </div>
    </>
  );
};
