import { City } from '../city/city';
import './style.css';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [citiesApi, setCitiesApi] = useState(null);

  //načtení api při načtení stránky
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
      <div className="cityBox">
        <label htmlFor="citiesChoise">City: </label>
        <br />
        <input list="citiesList" id="cities" name="citiesChoise" />
        <datalist id="citiesList">
          {citiesApi === null
            ? null
            : citiesApi.map((cityApi) => (
                <option
                  value={cityApi.Id}
                  label={
                    cityApi.ZIP !== null
                      ? `${cityApi.Name} - ${cityApi.ZIP}`
                      : cityApi.Name
                  }
                  key={cityApi.Id}
                ></option>
              ))}
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
