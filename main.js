const INPUT = document.querySelector('#toggle');
const CARDS = document.querySelector('.card-box');

INPUT.addEventListener('change', () => {
    let price = document.querySelectorAll('.change');

    price.forEach((item) => {
        if (item.innerHTML === '.99') {
            return  item.innerHTML = '9.99';
        } else {
            return item.innerHTML = '.99';
        }
    });
});
