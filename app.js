let API_Movie = 'http://www.omdbapi.com/?i=tt3896198&apikey=c997e31e&t='
let loadingStatus = false;



function checkLoaderStatus(){
  let intro = document.getElementById('intro')
  intro.style.display = 'none'
  let loader = document.getElementById('loader')

  if (loadingStatus == true){
    loader.classList.add('loader')
  }
  else{
    loader.classList.remove('loader')
  }
}



function renderMovie(data){
  let img = document.getElementById('img')
  img.src = data.Poster;
  let title = document.getElementById('title')
  title.innerText = data.Title
  let desc = document.getElementById('desc')
  desc.innerText = data.Plot
  let actors = document.getElementById('actors')
  actors.innerText = 'Actors: ' + data.Actors
  let awards = document.getElementById('awards')
  awards.innerText = 'Awards: ' + data.Awards
  let boxOffice = document.getElementById('boxOffice')
  boxOffice.innerText = 'Box Office: ' + data.BoxOffice
  let director = document.getElementById('director')
  director.innerText = 'Director: ' + data.Director
  let country = document.getElementById('country')
  country.innerText = 'Country: ' + data.Country
  let genre = document.getElementById('genre')
  genre.innerText = 'Genre: ' + data.Genre
  let language = document.getElementById('language')
  language.innerText = 'Language: ' + data.Language
}

function fetchMovieDetails(){
  
    loadingStatus = true;
    checkLoaderStatus()
    let movieName = document.getElementById('movieName');
    let apiQuery = API_Movie + movieName.value
    console.log(apiQuery)
  
    fetch(apiQuery).then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log(data)
      loadingStatus = false
      checkLoaderStatus();
      renderMovie(data)
    })

}

