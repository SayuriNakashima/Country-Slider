let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let thumb = document.querySelector('.container .thumb');

btnNext.onclick = () => moveItemsOnClick('next');
btnBack.onclick = () => moveItemsOnClick('back');

function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item');
    let thumbItems = document.querySelectorAll('.thumb .thumb-item');

    if (type === 'next') {
       
        list.appendChild(listItems[0]);  // Move a primeira imagem da lista para o final
        thumb.appendChild(thumbItems[0]);  // Move também a imagem principal do thumb para o final
        container.classList.add('next') //clase efeito
    } else {
      
        list.prepend(listItems[listItems.length - 1]); // Move a última imagem da lista para o início
        thumb.prepend(thumbItems[thumbItems.length - 1]);  // Move também a última miniatura para o início
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    },3000);
}


