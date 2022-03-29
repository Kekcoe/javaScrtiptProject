/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', ()=> {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    movieDB.movies.sort();

    const promoAdv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    const filmsList = document.querySelector('.promo__interactive-list');
    const formAdd = document.querySelector('form.add');
    const btnAdd = formAdd.querySelector('button');
    const addInput = formAdd.querySelector('.adding__input');
    const favoriteCheckBox = formAdd.querySelector('[type = "checkbox"]');

          
    formAdd.addEventListener('submit', (event)=> {
       event.preventDefault();

       let newFilm = addInput.value.slice(0,21);
       const favorite = favoriteCheckBox.checked;
 
        if(newFilm){
            if (newFilm.length === 21){
                newFilm = newFilm + '...';
            }

            if (favorite){
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm );
            sortArr( movieDB.movies);    
            createAnimeList(movieDB.movies, filmsList); 
        }
      
        event.target.reset();        
    });
      
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    
    const makeChanges = () =>{
        genre.textContent = "драма";    
        poster.style.backgroundImage = 'url("img/bg.jpg")'; 
    };
         
    const sortArr = (arr) => {
        arr.sort();
    };
       
    function createAnimeList(films, parent){
        parent.innerHTML = "";
        sortArr( films);
        films.forEach((film, i) => {
            filmsList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}  ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn,i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createAnimeList(movieDB.movies, filmsList); 
            });
        });
    }

    deleteAdv(promoAdv);
    makeChanges();
     createAnimeList(movieDB.movies, filmsList);
      
    console.log(movieDB.movies);

});