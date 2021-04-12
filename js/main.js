/* current year */
let now = new Date();
let cur_year = now.getFullYear();
document.querySelector('#year').innerHTML = cur_year;


/*************** 
CUSTOM SELECT
****************/
let arr_selects = Array.from(document.querySelectorAll('.custom-select'));
arr_selects.forEach(function(item, i, arr) {
    let btn = item.querySelector('button');
    let options = item.querySelector('.options');

    const toggleMenu = function() {
        options.style.display = (options.style.display == 'block') ? 'none' : 'block'
    }

    btn.addEventListener('click', () => {
        toggleMenu();
    });

    document.addEventListener('click', function(e) {
        const target = e.target;
        const current_sel = target == item || item.contains(target);
        const sel_is_opened = options.style.display == 'block';
        if (!current_sel && sel_is_opened) {
            toggleMenu();
        }
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

/* show/hide element */
function toggle(el){
    el.style.display = (el.style.display == 'block') ? 'none' : 'block'
}