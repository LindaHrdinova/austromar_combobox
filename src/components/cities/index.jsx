import { City } from '../city/city';
import './style.css';
import { useState, useEffect } from 'react';

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
        <main>
          <select name="cities" id="cities">
            <option value=""></option>
            {citiesApi === null
              ? ''
              : citiesApi.map((cityApi) => (
                  <option value={cityApi.Id} key={cityApi.Id}>
                    {cityApi.Name} - {cityApi.Id}
                  </option>
                ))}
          </select>
          {citiesApi === null
            ? ''
            : citiesApi.map((cityApi) => (
                <City city={cityApi} key={cityApi.Id} />
              ))}
        </main>
      </div>
    </>
  );
};
