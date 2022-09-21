var destaquesFilme = "Filmes em Destaque";

//índice                       0                    1               2                3                  4

document.write("<p>" + destaquesFilme + "</p>");

var listaFilmes = [
  "https://torrentsdublados.com/imagens/anne-frank-minha-melhor-amiga-download-torrent-2022-dublado-dual-audio-bluray-1080p-720p-4k-hd.jpg",
  "https://br.web.img3.acsta.net/pictures/21/02/10/18/14/0693859.jpg",
  "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/92/34/88/20194738.jpg",
  "http://fmcidade.com/wp-content/uploads/2022/05/amor-no-espectro2.jpg",
  "https://rollingstone.uol.com.br/media/uploads/poster-oficial-de-volta-aos-15-principal-netflix.jpg",
  "https://images.justwatch.com/poster/59365444/s718/a-menina-indigo.%7Bformat%7D"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src =" + listaFilmes[i] + ">");
}
