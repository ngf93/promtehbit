/* current year */
let now = new Date();
let cur_year = now.getFullYear();
console.log(cur_year);
document.querySelector('#year').innerHTML = cur_year;


/*************** 
CUSTOM SELECT sort
****************/
let arr_selects = Array.from(document.querySelectorAll('.custom-select'));
arr_selects.forEach(function(item, i, arr) {
    let btn = item.querySelector('button');
    let options = item.querySelector('.options');
    btn.addEventListener('click', () => {
        options.style.display = (options.style.display == 'block') ? 'none' : 'block'
    });

    let arr_radio = Array.from(item.querySelectorAll('input[type="radio"]'));
    arr_radio.forEach(function(item, i, arr) {
        if(item.checked){
            btn.innerHTML = item.value;
        }
        item.addEventListener('change', (event) => {
            btn.innerHTML = item.value;
            options.style.display = 'none';
        });
    });
});
