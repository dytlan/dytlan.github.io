/** 
 * Ajax Version
 **/

// $('#btn-action').on('click',function(){

//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=51b99cd&s='+$('.search-box').val(),
//         success: results => {
//             const movies = results.Search;
        
//             let cards = '';
            
//             movies.forEach(movie => {
//                 let {Poster,Title,imdbID,Year} = movie;
//                 cards += `<div class="col-md-4 my-5">
//                             <div class="card">
//                                 <img src="${Poster}" class="card-img-top" alt="">
//                                 <div class="card-body">
//                                 <h5 class="card-title">${Title}</h5>
//                                 <h6 class="card-subtitle mb-2 text-muted">${Year}</h6>
//                                 <p class="card-text"></p>
//                                 <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid=${imdbID}>Show Details</a>
//                                 </div>
//                             </div>
//                         </div>`;

//                 $('.movie-container').html(cards);

//                 $('.modal-detail-button').on('click',function(){
//                     $.ajax({
//                         url: 'http://www.omdbapi.com/?apikey=51b99cd&i='+$(this).data('imdbid'),
//                         success: result => {
//                                 let {Poster,Title,Actors,Directors,Writer,Plot} = result;

//                                 let detail = `<div class="container-fluid">
//                                 <div class="row">
//                                     <div class="col-md-3">
//                                         <img class="img-fluid" src="${Poster}" alt="">
//                                     </div>
//                                     <div class="col-md">
//                                         <ul class="list-group">
//                                             <li class="list-group-item"><h4>${Title}</h4></li>
//                                             <li class="list-group-item"><strong>Director : </strong>${Directors}</li>
//                                             <li class="list-group-item"><strong>Actors : </strong>${Actors}</li>
//                                             <li class="list-group-item"><strong>Writers : </strong>${Writer}</li>
//                                             <li class="list-group-item"><strong>Plot :</strong> <br>${Plot}</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>`;
//                                 $('.modal-body').html(detail);
                            
//                         },
//                         error: (exception) => {
//                             console.log(exception.responseText);
//                         }

//                     });
//                 });

//             });
            
//         },
//         error: (exception) => {
//             console.log(exception.responseText);
//         }
//     });

// });

/** 
 * Vanilla Javascript Version
 **/
const searchButton = document.querySelector('#btn-action');

searchButton.addEventListener('click',function(){
    const searchBox = document.querySelector('.search-box');
    fetch('http://www.omdbapi.com/?apikey=51b99cd&s=' + searchBox.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';

            movies.forEach(movie => cards += showCard(movie));

            const movieList = document.querySelector('.movie-container');
            movieList.innerHTML = cards;

            const modalDetailButton = document.querySelectorAll('.modal-detail-button');

            modalDetailButton.forEach( detail =>{
                detail.addEventListener('click',function(){
                    let imdbID = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=51b99cd&i=' + imdbID)
                    .then(response => response.json())
                    .then(movie => {
                        movieDetail(movie);
                    });
                });
            });

        });
});

//To get movies searched
function showCard({Poster,Title,imdbID,Year}){
    return `<div class="col-md-4 my-5">
    <div class="card">
        <img src="${Poster}" class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="card-title">${Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${Year}</h6>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid=${imdbID}>Show Details</a>
        </div>
    </div>
</div>`
}

//To get Movie Detail
function movieDetail({Poster,Title,Directors,Actors,Writer,Plot}){
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

    const modalBody = document.querySelector('.modal-body');

    modalBody.innerHTML = detail;


}