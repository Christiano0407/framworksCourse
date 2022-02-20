console.group("Javascript API Movies");
// == Const e variables ===

// ==== Intersection Observer ======

// ==== API  Add Movies ===
const addMovies = async () => {
  // Aync and await ==> Try e catch (siempre)
  try {
    // Respuesta = Edita la "Key"=>
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f&language=es-Mx"
    );
    console.log(response);
    // Status ==> Cargó la página =>
    if (response.status === 200) {
      // Petición e respuesta con datos ==>
      const data = await response.json();
      /* console.log(data); */
      let movies = " ";

      data.results.forEach((movie) => {
        movies += `
        <div class="movies">
         <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
         <h1>${movie.title}</h1> 
          </div>`;
      });

      // Conteiner =>
      document.getElementById("container").innerHTML = movies;

      /*  console.log(data.title); */
    } else if (response.status === 404) {
      console.log("Error");
    } else {
      console.log("Movie do not exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

addMovies();

// ======= Scroll Infinite = Intersection Observer ==========

console.groupEnd();
