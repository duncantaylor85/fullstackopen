import FilterInput from "./FilterInput";
import countriesService from "../services/countries";
import { useState, useEffect } from "react";
import CountryList from "./CountryList";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(filterText);
    });
    setFilteredCountries(filtered);
  }, [filterText, countries]);

  useEffect(() => {
    console.log(filteredCountries);
  }, [filteredCountries]);

  return (
    <div>
      <h1>Countries</h1>
      <FilterInput filterText={filterText} onFilterChange={setFilterText} />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default Countries;
