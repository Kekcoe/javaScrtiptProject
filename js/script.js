const numberOFAnime = +prompt('Сколько анимэ Вы уже посмотрели', '');

let genresArr = [];
const personalAnimeDB= {
      count:numberOFAnime,
      anime: {},
      actors: {},
      genres: genresArr,
      privat:false
  };
  

personalAnimeDB.count = numberOFAnime;

const a = prompt('Одно из последних просмотренных анимэ',"");
const b =  +prompt('Насколько оцените его', "");
const c = prompt('Одно из последних просмотренных анимэ',"");
const d =  +prompt('Насколько оцените его', "");

personalAnimeDB.anime[a] = b;
personalAnimeDB.anime[c] = d;

console.log(personalAnimeDB);