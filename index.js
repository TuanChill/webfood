var NavMoblide = document.querySelector('.nav__overlay');
var closeBtn = document.querySelector('.nav__mobile-close');
var openBtn = document.querySelector('.navbar-list-btn');
var mobileLink = document.querySelectorAll('.nav__mobile-item')
var overLay = document.querySelector('.overLay')

function toggleOverPlay() {
    NavMoblide.classList.toggle('hide')
}

NavMoblide.addEventListener('click', function(e) {
    if(e.target ==  e.currentTarget) {
        toggleOverPlay()
    }
})
closeBtn.addEventListener('click', toggleOverPlay)
openBtn.addEventListener('click', toggleOverPlay)
overLay.addEventListener('click', toggleOverPlay)
mobileLink.forEach(function(item) {
    item.addEventListener('click', toggleOverPlay)
})