// Menggunakan Fetch
//* Note : method fetch, setTimeout, promise, async await adalah asynchronous
// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?apikey=2fb09361&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((m) => (cards += showCards(m)));
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

// Ketika tombol detail di klik dengan menggunakan metode fetch
//       const modalDetailButton = document.querySelectorAll(".modal-detail-button");
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com/?apikey=2fb09361&i=" + imdbid)
//             .then((response) => response.json())
//             .then((f) => {
//               const movieDetail = showDetail(f);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

//* fetch (refactor)
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (err) {
    alert(err);
  }
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=2fb09361&s=" + keyword)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

//* Ketika tombol detail diklik menggunakan event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=2fb09361&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  const movieDetail = showDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

// function untuk card
function showCards(e) {
  return `<div class="col-md-4 my-3">
                      <div class="card">
                          <img src="${e.Poster}" class="card-img-top" alt="" />
                          <div class="card-body">
                          <h5 class="card-title">${e.Title}</h5>
                          <h6 class="card-subtitle mb-2 text-body-secondary">${e.Year}</h6>
                          <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${e.imdbID}">Show Details</a>
                          </div>
                      </div>
                  </div>`;
}

// Function untuk modal-detail
function showDetail(g) {
  return `<div class="container-fluit">
                <div class="row">
                  <div class="col-md-3">
                    <img src="${g.Poster}" class="img-fluid" alt="${g.Title}" />
                  </div>
                  <div class="col-md">
                    <ul class="list-group">
                      <li class="list-group-item"><h4>${g.Title} (${g.Year})</h4></li>
                      <li class="list-group-item"><strong>Director :</strong> ${g.Director}</li>
                      <li class="list-group-item"><strong>Genre :</strong> ${g.Genre}</li>
                      <li class="list-group-item"><strong>Actors:</strong> ${g.Actors}</li>
                      <li class="list-group-item">
                        <strong>Plot : <br /></strong>${g.Plot}</li>
                    </ul>
                  </div>
                </div>
              </div>`;
}
