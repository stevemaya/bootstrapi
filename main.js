const xhr = new XMLHttpRequest();
xhr.addEventListener('loadend', () => {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    const doggy = document.querySelector('img');
    doggy.src = data.message;
});

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
});
