interface Movie {
    title: string;
    director: string;
    releaseYear: number;
    rating: number;
  }
  
  const movieList: Movie[] = [
    { title: "The Matrix", director: "The Wachowskis", releaseYear: 1999, rating: 9 },
    { title: "Inception", director: "Christopher Nolan", releaseYear: 2010, rating: 8 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", releaseYear: 1994, rating: 10 },
  ];
  
  for (const movie of movieList) {
    console.log(`${movie.title} (${movie.rating}/10)`);
  }
  
  function addMovie(movie: Movie): void {
    movieList.push(movie);
  }
  
  function deleteMovie(title: string): void {
    const index = movieList.findIndex((movie) => movie.title === title);
    if (index !== -1) {
      movieList.splice(index, 1);
    }
  }
  
  function getMovieByDirector(director: string): Movie[] {
    return movieList.filter((movie) => movie.director === director);
  }
  