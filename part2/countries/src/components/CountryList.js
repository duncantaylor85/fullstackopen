import Country from "./Country";
const CountryList = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else {
    return (
      <div>
        <ul>
          {countries.map((country) => {
            return <li key={country.name.common}>{country.name.common}</li>;
          })}
        </ul>
      </div>
    );
  }
};

export default CountryList;
