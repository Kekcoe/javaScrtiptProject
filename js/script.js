const numberOFAnime = +prompt('Сколько анимэ Вы уже посмотрели', '');

let genresArr = [];
const personalAnimeDB= {
      count:numberOFAnime,
      anime: {},
      actors: {},
      genres: genresArr,
      privat:false
  };

  if (personalAnimeDB.anime <10 ){
    console.log('ПРосмотрено довольно мало фильмов');
  }else if(personalAnimeDB.anime >= 10 &&  personalAnimeDB.anime <= 30 ){
    console.log('Вы классический зритель');
  } else {
    console.log('Вы киноман');
  }
  
let iter = 0;

while(iter < 2){
let a = prompt('Одно из последних просмотренных анимэ',"");
  if(a == null || a.length < 3 ){
    do {
      alert("Введи название длиннее и не вздумай нажимать отмена");
    a = prompt('Одно из последних просмотренных анимэ',"");
    }while (a.length < 3 || a == null );
  } else if (a.length > 50){    
    do {
      alert("Введи название короче");
      a = prompt('Одно из последних просмотренных анимэ',"");
  }while (a.length >50);
  }

let b =  +prompt('Насколько оцените его', "");
if( b == 0 || b.length < 1 ){
  do {
    alert("Введи значение и не вздумай нажимать отмена");
    b =  +prompt('Насколько оцените его', "");
  }while (b == 0 || b.length < 1 );
} else if (b.length > 50){    
  do {
    alert("Введи название короче");
    b =  +prompt('Насколько оцените его', "");
}while (b == 0);
}
personalAnimeDB.anime[a] = b;
iter++;
}




console.log(personalAnimeDB);