function addPhoto() {

    let container = document.getElementById('container')

    let imgAdd = prompt("Введите ссылку на изображение:")
    let imgEl = document.createElement('img')

    imgEl.setAttribute('src', imgAdd)
    imgEl.setAttribute('width', '300')

    container.append(imgEl)
    
}
    addPhoto()

function addText() {

    let container = document.getElementById('container')

    let text = prompt("Введите текст для параграфа:")
    let p = document.createElement('p')

    p.innerText = text

    container.append(p)
}

    addText()


function addHeader() {

    let container = document.getElementById('container')

    let header = prompt("Введите название заголовка:")
    let h2 = document.createElement('h2')

    h2.innerText = header

    container.append(h2)
}    

    // addHeader()


// function action() {

// let move = prompt("Напишите цифру:")
//     if (move === "1") {
//         addPhoto()
//     } else if (move === "2") {
//         addText()        
//     } else if (move === "3") {
//         addHeader()        
//     }   else {
//         alert("Неверная цифра!")
//     }
// }

// action()



// addPost()
// ! 1 задание
// создайте #container в html
// создайте функцию которая создает картинку и запрашивает ссылку для картинки в prompt
// создайте функцию которая создает параграф и запрашивает текст для параграфа в prompt
// создайте функцию которая создает заголовок h2 и запрашивает текст для заголовка в prompt
// вызовите prompt в котором нужно написать цифру
// если цифра - 1, сделайте append картинки в #container
// если цифра - 2, сделайте append параграф в #container
// если цифра - 3, сделайте append заголовок в #container

// Бонусом несколько раз вызвать


// function addPost() {
//     let container = document.getElementById('container')

//     let div = document.createElement('div')
//     let p = document.createElement('p')
//     let img = document.createElement('img')
//     let like = document.createElement('button')
//     let dislike = document.createElement('button')

//     div.setAttribute('class', 'post')

//     let text = prompt('Напишите описание нового поста:')
//     p.innerText = text

//     let urlForImg = prompt('Вставьте ссылку для картинки:')
//     img.setAttribute('src', urlForImg)
//     img.setAttribute('class', 'postImg')

//     like.innerText = 'Нравится👍'
//     dislike.innerText = 'Не нравится👎'

//     div.append(img)
//     div.append(p)
//     div.append(like)
//     div.append(dislike)
//     container.append(div)
// }


// ! 1ый этап, создание img:
// let imgEl = document.createElement('img')
// console.log(imgEl)

// ! 2ой этап, добавление атрибутов
// .setAttribute(названиеАтрибута, значение)
// imgEl.setAttribute('src', 'https://st.depositphotos.com/1899425/1623/i/450/depositphotos_16232649-stock-photo-moraine-lake-sunrise-colorful-landscape.jpg')
// imgEl.setAttribute('width', '100%')


// ! 3ий этап, добавление элемента на страницу:
// let nationPicElement = document.getElementById('nation-pic')
// .append(элемент) - добавление элемента внутрь div#nation-pic
// nationPicElement.append(imgEl)





// addPost()
// ! todo 1 задание
// создайте #container в html
// создайте функцию которая создает картинку и запрашивает ссылку для картинки в prompt
// создайте функцию которая создает параграф и запрашивает текст для параграфа в prompt
// создайте функцию которая создает заголовок h2 и запрашивает текст для заголовка в prompt
// вызовите prompt в котором нужно написать цифру
// если цифра - 1, сделайте append картинки в #container
// если цифра - 2, сделайте append параграф в #container
// если цифра - 3, сделайте append заголовок в #container

// Бонусом несколько раз вызвать




