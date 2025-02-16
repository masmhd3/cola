let btn = document.getElementById('btn-nav')
let ul = document.getElementById('ul')

btn.onclick = function(){
    ul.classList.toggle('active')
    btn.classList.toggle('fa-x')
}
// <i class="fa-solid fa-x"></i>
