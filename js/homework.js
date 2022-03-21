/* 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



"use strict"


const personalAnimeDB= {
      count:0,
      anime: {},
      actors: {},
      genres: [],
      privat: true,
      start: function(){
        this.count = +prompt('Сколько анимэ Вы уже посмотрели', '');
        while(this.count == '' || this.count == null || isNaN(this.count)){
          this.count = +prompt('Сколько анимэ Вы уже посмотрели', '');
        }
      },
      detectPersonalLevel: function (){
        if (personalAnimeDB.anime <10 ){
          console.log('ПРосмотрено довольно мало фильмов');
        }else if(personalAnimeDB.anime >= 10 &&  personalAnimeDB.anime <= 30 ){
          console.log('Вы классический зритель');
        } else if (personalAnimeDB.anime >30 ) {
          console.log('Вы киноман');
        }else {
          alert("Error"); 
        }
      },
      rememberMyAnime: function (){
        let iter = 0;
        while(iter < 2){
        let a = prompt('Одно из последних просмотренных анимэ',"");
          if(a == null || a.length < 3 ){
            do {
            alert("Введи название длиннее и не вздумай нажимать отмена");
            a = prompt('Одно из последних просмотренных анимэ',"");
            }while ( a == null || a.length < 3);
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
      }while (b.length > 50);
      }     
        personalAnimeDB.anime[a] = b;
        iter++;
      
      }
      },
      writeYourGenres: function (){         
        let iterGenre = 1;        
        while(iterGenre < 4){
          let favoriteGenres = prompt(`Ваш любимый жанр под номером ${iterGenre}`);
          if(favoriteGenres == null || favoriteGenres.length < 1){
            alert("Введи название и не вздумай нажимать отмена");
          } else{
          this.genres[iterGenre-1] = favoriteGenres;
          iterGenre++;}
          
          if (this.genres.length == 3){
            this.genres.forEach(function(item, i){
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
          } 

        }
      },
      showMyDB:function (hidden){
        if (!hidden){
          console.log(personalAnimeDB);
        }
      },
      toggleVisibleMyDB: function(toggleVisible){
        if(toggleVisible){
            this.privat = false;
        }else {
            this.privat = true;
        }
      }
  };


  personalAnimeDB.start();
  personalAnimeDB.detectPersonalLevel();
  personalAnimeDB.rememberMyAnime();
  personalAnimeDB.writeYourGenres();
  personalAnimeDB.toggleVisibleMyDB(personalAnimeDB.privat);
  console.log(personalAnimeDB);