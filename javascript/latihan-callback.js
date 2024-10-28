$(".search-button").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=2fb09361&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);

      // Ketika tombol detail di klik
      //* Note : Saat kita melakukan event handler seperti code dibawah ini, jangan gunakan arrow function karena arrow function tidak punya scope this.
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=2fb09361&i=" + $(this).data("imdbid"),
          success: (r) => {
            const movieDetail = showDetail(r);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

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
