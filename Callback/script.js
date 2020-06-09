$('#btn-action').on('click',function(){

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=51b99cd&s='+$('.search-box').val(),
        success: results => {
            const movies = results.Search;
        
            let cards = '';
            
            movies.forEach(movie => {
                let {Poster,Title,imdbID,Year} = movie;
                cards += `<div class="col-md-4 my-5">
                            <div class="card">
                                <img src="${Poster}" class="card-img-top" alt="">
                                <div class="card-body">
                                <h5 class="card-title">${Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${Year}</h6>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid=${imdbID}>Show Details</a>
                                </div>
                            </div>
                        </div>`;

                $('.movie-container').html(cards);

                $('.modal-detail-button').on('click',function(){
                    $.ajax({
                        url: 'http://www.omdbapi.com/?apikey=51b99cd&i='+$(this).data('imdbid'),
                        success: result => {
                                let {Poster,Title,Actors,Directors,Writer,Plot} = result;

                                let detail = `<div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-3">
                                        <img class="img-fluid" src="${Poster}" alt="">
                                    </div>
                                    <div class="col-md">
                                        <ul class="list-group">
                                            <li class="list-group-item"><h4>${Title}</h4></li>
                                            <li class="list-group-item"><strong>Director : </strong>${Directors}</li>
                                            <li class="list-group-item"><strong>Actors : </strong>${Actors}</li>
                                            <li class="list-group-item"><strong>Writers : </strong>${Writer}</li>
                                            <li class="list-group-item"><strong>Plot :</strong> <br>${Plot}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>`;
                                $('.modal-body').html(detail);
                            
                        },
                        error: (exception) => {
                            console.log(exception.responseText);
                        }

                    });
                });

            });
            
        },
        error: (exception) => {
            console.log(exception.responseText);
        }
    });

});
