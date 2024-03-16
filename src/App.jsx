import React, { useEffect } from "react";
import { useState } from "react";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

const App = () => {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(9);

  const pageCountHandler = (counter) => {
    setPage(counter);
  };
  useEffect(() => {
    const getMoviesFromAPI = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        };
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?page=${page}&primary_release_year=2023&primary_release_date.gte=2023-12-01&primary_release_date.lte=2023-12-31&sort_by=popularity.asc&api_key=c94f45d8322466c870645eb8411b6fa5`,
          options
        );
        if (!response.ok) {
          throw new Error("Data is not fetched");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesFromAPI();
  }, [page]);

  return (
    <React.Fragment>
      <Navbar refresh={pageCountHandler} />
      <Movies moviesData={movies} />
    </React.Fragment>
  );
};

export default App;
