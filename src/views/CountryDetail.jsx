import React, { Component } from 'react';

import countries from './../countries.json';

class CountryDetail extends Component {
  state = {
    country: [],
  };

  componentDidMount(previousProps) {
    if (this.props.match.params.id !== previousProps.match.params.id) {
      this.loadCountry();
    }
  }

  loadCountry = () => {
    console.log(countries);
    const country = countries.find(
      (item) => item.id === this.props.match.params.id
    );
    console.log(country);
    this.setState({
      country: country,
    });
  };

  render() {
    const country = this.state.country;
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        <p>{country.name}</p>
        <p>{country.capital}</p>
        <p>{country.region}</p>
        <p>{country.subsegion}</p>
        <p>{country.languages}</p>
      </div>
    );
  }
}

export default CountryDetail;
