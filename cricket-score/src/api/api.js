const API_KEY = "mMVSXk4cekOUK6Y8lDI1oGgKvrs2";

export const getMatches = () => {
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
 // console.log("URL", url);
 
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the cuurent match

export const getMatchDetail = (id) => {
  const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};