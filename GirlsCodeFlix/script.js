var listaFilmes =["https://m.media-amazon.com/images/M/MV5BMjI4NzQzMDM2NV5BMl5BanBnXkFtZTcwOTE5OTQyMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMGIwMGM2NWQtMzI4Yi00ODczLWI2MmMtMzEyYmY3ZGE0NGI4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_UY268_CR76,0,182,268_AL_.jpg", "https://i.vimeocdn.com/vod_poster/88062_310x459.jpg", "https://br.blogthinkbig.com/wp-content/uploads/sites/6/2016/09/CarolShaw2.jpg?resize=360%2C500","https://gamecenter.nyu.edu/wp-content/uploads/2013/03/Roberta_Young_Chart.jpg",
];
  
var listaFilmesVideos = [
    "https://www.youtube.com/embed/SL292JNUZGk",
  
    "https://www.youtube.com/embed/98S3Lyf6nss",
  
    "https://www.youtube.com/embed/B0jZMPZuOQU",
  
    "https://www.youtube.com/embed/a78uBNlI8Z0",
  
    "https://www.youtube.com/embed/F2WX3iTVoHY"
  ];
  
function verFilmes(endereço, index) {
  var listaFilmes = document.querySelector("#filmesimagens");
  var elementoFilme =
    "<img src=" + endereço + " onclick='videoFilme(" + index + ")'>";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}

function videoFilme(indexVideo) {
  document.getElementById("filmesimagens").innerHTML =
    "<iframe src=" +
    listaFilmesVideos[indexVideo] +
    " width=560' height='315'></iframe>";
  document.getElementById("voltar").innerHTML =
    '<button onclick="inicio()">Voltar</button>';

}

function inicio() {
  document.getElementById("filmesimagens").innerHTML = "";
  document.getElementById("voltar").innerHTML = " ";
for (var i = 0; i < listaFilmes.length; i++) {

  verFilmes(listaFilmes[i], + i);
  }
}

inicio();