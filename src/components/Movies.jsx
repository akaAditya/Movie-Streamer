import { useEffect, useState } from "react";

const Movies = ({ moviesData }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const saveMovieHandler = async () => {
      const response = await moviesData;
      if (response && response.length > 0) {
        setMovies(response);
      }
    };
    saveMovieHandler();
  }, [moviesData]);
  
  return (
    <div className="container px-5 py-10 mx-auto">
    <h1 className="font-medium text-4xl text-gray-900 m-5 text-center">Movies List from <span className="font-medium text-4xl text-cyan-500 text-center">TheMovieDB</span></h1>
      <div className="flex flex-wrap -m-4">
        {Object.entries(movies).map((movie) => (
          <div key={movie[1].id} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
            <div className="h-full flex flex-col items-center text-center w-full">
              <img
                alt="image not found"
                className="flex-shrink-0 rounded-lg w-full h-56  object-cover object-center mb-4"
                src={
                  movie[1].poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500${movie[1].poster_path}`
                    : `https://image.tmdb.org/t/p/w500${movie[1].backdrop_path}`
                }
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  {movie[1].title}
                </h2>
                <h3 className="title-font font-medium text-sm text-gray-900">
                  Rel. Date-
                  <span className="title-font font-medium text-sm text-gray-900">
                    {movie[1].release_date}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
