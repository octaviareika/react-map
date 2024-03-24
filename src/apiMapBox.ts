const ACCESS_TOKEN_MAP_BOX = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export const fetchLocalMapBox = (local: string) =>
fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/Brasil.json?access_token=pk.eyJ1Ijoib2N0YXZpYXJlaWthIiwiYSI6ImNsdTFybWtlZTBodTEya3I4eXhld2dmaGgifQ.5-aPsnSWNwCzK6uMfROOhA`
, {method: 'GET'})
  .then(response => response.json())
  .then(data => data);


